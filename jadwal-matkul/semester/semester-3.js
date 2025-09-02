// 1
const hari_1 = "Senin";
const jam_1 = "I-III";
const pukul_1 = "07.30-10.05";
const ruangan_1 = "C2-P4";
const matkul_1 = "Keamanan Komputer";
const sks_1 = "3";

// 2
const hari_2 = "Senin";
const jam_2 = "XI";
const pukul_2 = "16.00-17.30";
const ruangan_2 = "AE 107";
const matkul_2 = "Profesi Kependidikan";
const sks_2 = "2";

// 3
const hari_3 = "Selasa";
const jam_3 = "III-V";
const pukul_3 = "09.15-11.00";
const ruangan_3 = "Lab ICT 3";
const matkul_3 = "Inovasi Teknologi";
const sks_3 = "2";

// 4
const hari_4 = "Selasa";
const jam_4 = "V-VI";
const pukul_4 = "11.00-13.10";
const ruangan_4 = "C2-P5";
const matkul_4 = "Strategi Pembelajaran";
const sks_4 = "3";

// 5
const hari_5 = "Selasa";
const jam_5 = "IX-XI";
const pukul_5 = "14.50-17.30";
const ruangan_5 = "AE 105";
const matkul_5 = "Kecerdasan Buatan";
const sks_5 = "3";

// 6
const hari_6 = "Rabu";
const jam_6 = "IV-VI";
const pukul_6 = "10.05-12.40";
const ruangan_6 = "Lab Jaringan";
const matkul_6 = "Jaringan Komputer";
const sks_6 = "3";

// 7
const hari_7 = "Kamis";
const jam_7 = "I-III";
const pukul_7 = "07.30-10.05";
const ruangan_7 = "AE 102";
const matkul_7 = "Pemrograman Web";
const sks_7 = "3";

// 8
const hari_8 = "Jumat";
const jam_8 = "IX-XI";
const pukul_8 = "14.50-17.30";
const ruangan_8 = "AE 107";
const matkul_8 = "Struktur Data";
const sks_8 = "3";


// Set innerText
for (let i = 1; i <= 8; i++) {
  document.getElementById(`hari_${i}`).innerText = eval(`hari_${i}`);
  document.getElementById(`jam_${i}`).innerText = eval(`jam_${i}`);
  document.getElementById(`pukul_${i}`).innerText = eval(`pukul_${i}`);
  document.getElementById(`ruangan_${i}`).innerText = eval(`ruangan_${i}`);
  document.getElementById(`matkul_${i}`).innerText = eval(`matkul_${i}`);
  document.getElementById(`sks_${i}`).innerText = eval(`sks_${i}`);
}
