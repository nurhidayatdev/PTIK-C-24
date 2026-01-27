export default async function handler(req, res) {
  await fetch("https://api.fonnte.com/send", {
    method: "POST",
    headers: {
      Authorization: process.env.FONTTE_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      target: "120363406099279842@g.us", // GANTI GROUP ID
      message: "TES KIRIM DARI SERVER"
    }),
  });

  res.status(200).send("OK");
}
