export default async function handler(req, res) {
  // Terima semua request
  const data = req.body || {};

  // Ambil isi pesan (command)
  const pesan = data.text || "";

  console.log("TEXT:", pesan);

  // COMMAND SEDERHANA
  if (pesan.trim() === "!test") {
    await fetch("https://api.fonnte.com/send", {
      method: "POST",
      headers: {
        Authorization: process.env.FONTTE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        target: "120363406099279842@g.us", // 🔴 GANTI GROUP ID ASLI
        message: "✅ COMMAND BERHASIL, PESAN TERKIRIM"
      }),
    });
  }

  res.status(200).send("OK");
}
