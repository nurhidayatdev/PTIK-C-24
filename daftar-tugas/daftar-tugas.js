// Keamanan Komputer
const tanggal_1 = "-";
const jam_1 = "-";
const deskripsi_1 = "-";

// Profesi Kependidikan
const tanggal_2 = "-";
const jam_2 = "-";
const deskripsi_2 = "-";

// Inovasi Teknologi
const tanggal_3 = "15 September 2025";
const jam_3 = "22.00";
const deskripsi_3 = "Resume Materi & Pendahuluan Proposal PKM";

// Strategi Pembelajaran
const tanggal_4 = "-";
const jam_4 = "-";
const deskripsi_4 = "-";

// Kecerdasan Buatan
const tanggal_5 = "17 September 2025";
const jam_5 = "14.50";
const deskripsi_5 = "Tugas Kelompok: Pendekatan Representasi Pengetahuan";

// Jaringan Komputer
const tanggal_6 = "10 September 2025";
const jam_6 = "10.05";
const deskripsi_6 = "Summary Protokol Jaringan";

// Pemrograman Web
const tanggal_7 = "10 September 2025";
const jam_7 = "24.00";
const deskripsi_7 = "Praktikum 3: CSS \n<a href="#">Link Pengumpulan</a>";

// Struktur Data
const tanggal_8 = "17 September 2025";
const jam_8 = "13.00";
const deskripsi_8 = "Praktikum 2: Pointer";

// Kode DOM
for (let i = 1; i <= 8; i++) {
  document.getElementById(`tanggal_${i}`).innerText = eval(`tanggal_${i}`);
  document.getElementById(`jam_${i}`).innerText = eval(`jam_${i}`);
  document.getElementById(`deskripsi_${i}`).innerText = eval(`deskripsi_${i}`);
}
