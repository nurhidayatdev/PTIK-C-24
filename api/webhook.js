const axios = require('axios');

module.exports = async (req, res) => {
  // Hanya menerima metode POST dari Fonnte
  if (req.method === 'POST') {
    const { message, sender } = req.body;

    if (!message) {
      return res.status(200).send('No Message Received');
    }

    const chat = message.toLowerCase().trim();
    const TOKEN_FONNTE = 'TOKEN_DARI_DASHBOARD_FONNTE'; // Ganti dengan Tokenmu
    let replyMessage = "";

    // LOGIKA COMMAND
    if (chat === '/halo') {
      replyMessage = "Halo! Bot kamu sekarang aktif di Vercel ⚡";
    } else if (chat === '/cek') {
      replyMessage = `Status: Aktif\nSender: ${sender}\nPlatform: Vercel Serverless`;
    } else if (chat === '/help') {
      replyMessage = "Perintah: /halo, /cek, /help";
    }

    // Kirim Balasan via Fonnte
    if (replyMessage) {
      try {
        await axios.post('https://api.fonnte.com/send', 
        new URLSearchParams({
          'target': sender,
          'message': replyMessage
        }), {
          headers: { 'Authorization': TOKEN_FONNTE }
        });
      } catch (error) {
        console.error("Gagal kirim balik:", error.message);
      }
    }

    return res.status(200).send('Success');
  } 
  
  // Jika diakses lewat browser (GET)
  else {
    return res.status(200).json({
      status: "online",
      message: "Webhook Vercel siap! Hubungkan URL ini/api/webhook ke Fonnte."
    });
  }
};
