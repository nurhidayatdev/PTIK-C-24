export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const data = req.body;

  const pesan = data.message?.toLowerCase();
  const groupId = data.group_id;
  const sender = data.sender;

  // Pastikan pesan dari group
  if (!groupId) {
    return res.status(200).json({ status: "ignore" });
  }

  // COMMAND
  if (pesan === "!tagall" || pesan.startsWith("!all")) {
    const textTambahan = pesan.replace("!all", "").trim();

    await fetch("https://api.fonnte.com/send", {
      method: "POST",
      headers: {
        Authorization: process.env.FONTTE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        target: groupId,
        message: `@everyone ${textTambahan || "Halo semua 👋"}`
      }),
    });
  }

  res.status(200).json({ status: "ok" });
}
