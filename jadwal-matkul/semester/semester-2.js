// 1 
const hari_1 = "Senin";
const jam_1 = "I-II";
const pukul_1 = "07.30 - 09.10";
const ruangan_1 = "ONLINE 2";
const matkul_1 = "Belajar dan Pembelajaran";
const sks_1 = "2";

// 2
const hari_2 = "Senin";
const jam_2 = "III-IV";
const pukul_2 = "09.15-10.55";
const ruangan_2 = "Lab ICT 4";
const matkul_2 = "Elektronika Analag dan Digital";
const sks_2 = "2";

// 3
const hari_3 = "Senin";
const jam_3 = "V-VI";
const pukul_3 = "11.00-12.40";
const ruangan_3 = "AE 102";
const matkul_3 = "Perkembangan Peserta Didik";
const sks_3 = "2";

// 4
const hari_4 = "Selasa";
const jam_4 = "I-II";
const pukul_4 = "07.30-09.10";
const ruangan_4 = "AE 102";
const matkul_4 = "Komunikasi Data";
const sks_4 = "2";

// 5
const hari_5 = "Rabu";
const jam_5 = "VII-IX";
const pukul_5 = "13.10-15.40";
const ruangan_5 = "Lab Programing";
const matkul_5 = "Basis Data";
const sks_5 = "3";

// 6
const hari_6 = "Rabu";
const jam_6 = "X-XI";
const pukul_6 = "15.45-17.30";
const ruangan_6 = "ONLINE 2";
const matkul_6 = "Matematika Diskrit";
const sks_6 = "2";

// 7
const hari_7 = "Kamis";
const jam_7 = "I-III";
const pukul_7 = "07.30-10.05";
const ruangan_7 = "AE 106";
const matkul_7 = "Sistem Operasi";
const sks_7 = "3";

// 8
const hari_8 = "Kamis";
const jam_8 = "X-XI";
const pukul_8 = "15.45-17.30";
const ruangan_8 = "Lab Animasi";
const matkul_8 = "Komputer Grafis";
const sks_8 = "2";

// 9
const hari_9 = "Jumat";
const jam_9 = "IV-V";
const pukul_9 = "10.05-11.50";
const ruangan_9 = "AE 104";
const matkul_9 = "Pancasila";
const sks_9 = "2";

for (let i = 1; i <= 9; i++) {
  document.getElementById(`hari_${i}`).innerText = eval(`hari_${i}`);
  document.getElementById(`jam_${i}`).innerText = eval(`jam_${i}`);
  document.getElementById(`pukul_${i}`).innerText = eval(`pukul_${i}`);
  document.getElementById(`ruangan_${i}`).innerText = eval(`ruangan_${i}`);
  document.getElementById(`matkul_${i}`).innerText = eval(`matkul_${i}`);
  document.getElementById(`sks_${i}`).innerText = eval(`sks_${i}`);
}