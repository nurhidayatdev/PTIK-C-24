// Keamanan Komputer
const tanggal_1 = "";
const jam_1 = "";
const deskripsi_1 = "";

// Profesi Kependidikan
const tanggal_2 = "";
const jam_2 = "";
const deskripsi_2 = "";

// Inovasi Teknologi
const tanggal_3 = "";
const jam_3 = "";
const deskripsi_3 = "";

// Strategi Pembelajaran
const tanggal_4 = "";
const jam_4 = "";
const deskripsi_4 = "";

// Kecerdasan Buatan
const tanggal_5 = "";
const jam_5 = "";
const deskripsi_5 = "";

// Jaringan Komputer
const tanggal_6 = "";
const jam_6 = "";
const deskripsi_6 = "";

// Pemrograman Web
const tanggal_7 = "";
const jam_7 = "";
const deskripsi_7 = "";

// Struktur Data
const tanggal_8 = "";
const jam_8 = "";
const deskripsi_8 = "";

// Kode DOM
for (let i = 1; i <= 8; i++) {
  document.getElementById(`tanggal_${i}`).innerText = eval(`tanggal_${i}`);
  document.getElementById(`jam_${i}`).innerText = eval(`jam_${i}`);
  document.getElementById(`deskripsi_${i}`).innerText = eval(`deskripsi_${i}`);
}
