const TAG_ALL_NUMBERS = [
  "6287873520868"
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("OK");
  }

  const data = req.body;

  // 🔥 ambil field dengan aman
  const pesan =
    data.text ||
    data.message ||
    data.body ||
    "";

  const from =
    data.from ||
    data.group_id ||
    "";

  console.log("PESAN:", pesan);
  console.log("FROM:", from);

  // pastikan dari group
  if (!from.endsWith("@g.us")) {
    return res.status(200).json({ status: "bukan group" });
  }

  // command
  if (pesan.trim().toLowerCase().startsWith("!all")) {

    // respon biar kelihatan hidup
    await fetch("https://api.fonnte.com/send", {
      method: "POST",
      headers: {
        Authorization: process.env.FONTTE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        target: from,
        message: "✅ Command diterima, sedang tag semua..."
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
