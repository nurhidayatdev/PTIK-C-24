const TAG_ALL_NUMBERS = [
  "6287873520868"
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("OK");
  }

  const data = req.body;

  // ✅ AMBIL FIELD YANG BENAR
  const pesan = data.text;     // ISI CHAT
  const from = data.from;      // GROUP ID

  console.log("TEXT:", pesan);
  console.log("FROM:", from);
  console.log("TYPE:", data.type);

  // pastikan dari group
  if (!from || !from.endsWith("@g.us")) {
    return res.status(200).json({ status: "bukan group" });
  }

  // command
  if (pesan && pesan.trim().toLowerCase() === "!tagall") {

    // respon biar kelihatan hidup
    await fetch("https://api.fonnte.com/send", {
      method: "POST",
      headers: {
        Authorization: process.env.FONTTE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        target: from,
        message: "✅ Command diterima, tagging semua..."
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
        target: from,
        message: "Halo semua 👋 mohon perhatiannya",
        mentions: TAG_ALL_NUMBERS
      }),
    });
  }

  res.status(200).json({ status: "ok" });
}
