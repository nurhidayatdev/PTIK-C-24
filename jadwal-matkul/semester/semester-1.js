// 1 
const hari_1 = "Senin";
const jam_1 = "X-XI";
const pukul_1 = "15.45 - 17.30";
const ruangan_1 = "ONLINE";
const matkul_1 = "Pendidikan Kewarganegaraan";
const sks_1 = "2";

// 2
const hari_2 = "Selasa";
const jam_2 = "I-III";
const pukul_2 = "07.30-10.05";
const ruangan_2 = "ONLINE";
const matkul_2 = "Organisasi dan Arsitektur Komputer";
const sks_2 = "3";

// 3
const hari_3 = "Selasa";
const jam_3 = "V-VI";
const pukul_3 = "11.00-12.40";
const ruangan_3 = "ONLINE";
const matkul_3 = "Bahasa Inggris";
const sks_3 = "2";

// 4
const hari_4 = "Selasa";
const jam_4 = "IX-XI";
const pukul_4 = "14.50-17.30";
const ruangan_4 = "ONLINE";
const matkul_4 = "Algoritma dan Pemrograman Dasar";
const sks_4 = "3";

// 5
const hari_5 = "Rabu";
const jam_5 = "I-II";
const pukul_5 = "07.30-09.10";
const ruangan_5 = "ONLINE";
const matkul_5 = "Bahasa Indonesia";
const sks_5 = "2";

// 6
const hari_6 = "Rabu";
const jam_6 = "III-IV";
const pukul_6 = "09.15-10.55";
const ruangan_6 = "ONLINE";
const matkul_6 = "Pengantar Ilmu Komputer";
const sks_6 = "2";

// 7
const hari_7 = "Rabu";
const jam_7 = "X-XI";
const pukul_7 = "15.45-17.30";
const ruangan_7 = "ONLINE";
const matkul_7 = "Pendidikan Agama Islam";
const sks_7 = "2";

// 8
const hari_8 = "Kamis";
const jam_8 = "VII-VIII";
const pukul_8 = "13.10-14.50";
const ruangan_8 = "ONLINE";
const matkul_8 = "Matematika Dasar";
const sks_8 = "2";

// 9
const hari_9 = "Jumat";
const jam_9 = "III-IV";
const pukul_9 = "09.00-10.55";
const ruangan_9 = "ONLINE";
const matkul_9 = "Pengantar Kependidikan";
const sks_9 = "2";

for (let i = 1; i <= 9; i++) {
  document.getElementById(`hari_${i}`).innerText = eval(`hari_${i}`);
  document.getElementById(`jam_${i}`).innerText = eval(`jam_${i}`);
  document.getElementById(`pukul_${i}`).innerText = eval(`pukul_${i}`);
  document.getElementById(`ruangan_${i}`).innerText = eval(`ruangan_${i}`);
  document.getElementById(`matkul_${i}`).innerText = eval(`matkul_${i}`);
  document.getElementById(`sks_${i}`).innerText = eval(`sks_${i}`);
}