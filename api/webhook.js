export default async function handler(req, res) {
  console.log("WEBHOOK MASUK");

  if (req.method !== "POST") {
    return res.status(200).send("OK");
  }

  const data = req.body;
  console.log(data);

  const pesan = data.message;
  const groupId = data.group_id;

  // pastikan dari group
  if (!groupId) {
    return res.status(200).json({ status: "bukan group" });
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
        message: "@everyone Halo semua 👋"
      }),
    });
  }

  res.status(200).json({ status: "done" });
}
