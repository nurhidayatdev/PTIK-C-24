// ===============================
// KONFIGURASI
// ===============================

// 🔴 GANTI DENGAN GROUP ID KAMU
const GROUP_ID = "120363406099279842@g.us";

// Nomor WA yang akan di-tag (HARUS ADA di group)
const TAG_ALL_NUMBERS = [
  "6287873520868"
];

// ===============================
// HANDLER
// ===============================
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("OK");
  }

  const data = req.body;

  // Ambil isi pesan saja
  const pesan = data.text || "";

  console.log("TEXT:", pesan);

  // ===============================
  // COMMAND !tagall
  // ===============================
  if (pesan.toLowerCase().startsWith("!tagall")) {

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
        target: GROUP_ID,
        message: "📣 Tag semua sedang diproses..."
      }),
    });

    // kirim mention
    await fetch("https://api.fonnte.com/send", {
      method: "POST",
      headers: {
        Authorization: process.env.FONTTE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        target: GROUP_ID,
        message: finalMessage,
        mentions: TAG_ALL_NUMBERS
      }),
    });
  }

  res.status(200).json({ status: "ok" });
}
