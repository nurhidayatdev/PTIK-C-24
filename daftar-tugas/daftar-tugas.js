// Keamanan Komputer
const tanggal_1 = "";
const jam_1 = "";
const deskripsi_1 = "";
const link_1 = "";

// Profesi Kependidikan
const tanggal_2 = "";
const jam_2 = "";
const deskripsi_2 = "";
const link_2 = "";

// Inovasi Teknologi
const tanggal_3 = "15-09-2025";
const jam_3 = "22.00";
const deskripsi_3 = "Resume Materi & Pendahuluan Proposal PKM";
const link_3 = "";

// Strategi Pembelajaran
const tanggal_4 = "15-09-2025";
const jam_4 = "23.00";
const deskripsi_4 = "Perbedaan antara Pendekatan, Metode, Teknik, Taktik, Gaya, dan Model Pembelajaran.";
const link_4 = "https://lms.unm.ac.id/mod/assign/view.php?id=683162";

// Kecerdasan Buatan
const tanggal_5 = "16-09-2025";
const jam_5 = "15.00";
const deskripsi_5 = "Tugas Kelompok: Pendekatan Representasi Pengetahuan";
const link_5 = "";

// Jaringan Komputer
const tanggal_6 = "17-09-2025";
const jam_6 = "10.00";
const deskripsi_6 = "Summary Protokol Jaringan";
const link_6 = "";

// Pemrograman Web
const tanggal_7 = "18-09-2025";
const jam_7 = "24.00";
const deskripsi_7 = "Praktikum 3: CSS";
const link_7 = "https://docs.google.com/forms/d/e/1FAIpQLSdbpqdHFNEew-wefIaBbjz66ewZenODm9kyvzpRGqJ6tyWueA/viewform";

// Struktur Data
const tanggal_8 = "17-09-2025";
const jam_8 = "13.00";
const deskripsi_8 = "Praktikum 2: Pointer";
const link_8 = "";

// Kode DOM
for (let i = 1; i <= 8; i++) {
  document.getElementById(`tanggal_${i}`).innerText = eval(`tanggal_${i}`);
  document.getElementById(`jam_${i}`).innerText = eval(`jam_${i}`);
  document.getElementById(`deskripsi_${i}`).innerText = eval(`deskripsi_${i}`);
  document.getElementById(`link_${i}`).href = eval(`link_${i}`);
}
