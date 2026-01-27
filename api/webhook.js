// ===============================
// KONFIGURASI
// ===============================

// Nomor WA yang akan di-tag (HARUS ADA di group)
const TAG_ALL_NUMBERS = [
  "6281234567890",
  "6289876543210",
  "6281112223334"
];

// ===============================
// HANDLER
// ===============================
export default async function handler(req, res) {
  // Terima webhook dari Fontte
  if (req.method !== "POST") {
    return res.status(200).send("OK");
  }

  const data = req.body;

  // ===============================
  // AMBIL DATA DARI FONTTE
  // ===============================
  const pesan = data.text;     // isi chat WA
  const from = data.from;      // ID group: xxxx@g.us

  console.log("TEXT:", pesan);
  console.log("FROM:", from);

  // ===============================
  // VALIDASI GROUP
  // ===============================
  if (!from || !from.endsWith("@g.us")) {
    return res.status(200).json({ status: "bukan group" });
  }

  // ===============================
  // COMMAND !tagall
  // ===============================
  if (pesan && pesan.toLowerCase().startsWith("!tagall")) {

    // pesan tambahan dari command
    const customText = pesan.replace("!tagall", "").trim();
    const finalMessage = customText || "Halo semua 👋 mohon perhatiannya";

    // respon awal
    await fetch("https://api.fonnte.com/send", {
      method: "POST",
      headers: {
        Authorization: process.env.FONTTE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        target: from,
        message: "📣 Tag semua sedang diproses..."
      }),
    });

    // kirim mention semua
    await fetch("https://api.fonnte.com/send", {
      method: "POST",
      headers: {
        Authorization: process.env.FONTTE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        target: from,
        message: finalMessage,
        mentions: TAG_ALL_NUMBERS
      }),
    });
  }

  res.status(200).json({ status: "ok" });
}
