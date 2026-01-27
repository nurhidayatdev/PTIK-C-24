const TAG_ALL_NUMBERS = [
  "6287873520868"
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("OK");
  }

  const data = req.body;
  const pesan = data.message;
  const groupId = data.group_id;

  // hanya group
  if (!groupId) {
    return res.status(200).json({ status: "private chat" });
  }

  // command
  if (pesan === "!tagall") {

    await fetch("https://api.fonnte.com/send", {
      method: "POST",
      headers: {
        Authorization: process.env.FONTTE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        target: groupId,
        message: "Halo semua 👋 mohon perhatiannya",
        mentions: TAG_ALL_NUMBERS
      }),
    });
  }

  res.status(200).json({ status: "ok" });
}
