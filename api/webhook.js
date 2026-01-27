export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const data = req.body;

  const from = data.sender;      // nomor pengirim
  const message = data.message;  // isi help

  // Kirim balasan ke pengirim
  await fetch("https://api.fonnte.com/send", {
    method: "POST",
    headers: {
      Authorization: process.env.FONTTE_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      target: from,
      message: "Bot aktif ✅"
    })
  });

  res.status(200).json({ status: "ok" });
}
