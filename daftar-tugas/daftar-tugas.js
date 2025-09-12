

// Keamanan Komputer
const tanggal_1 = "";
const jam_1 = "";
const deskripsi_1 = "";
const file_1 = "";
const link_1 = "";

// Profesi Kependidikan
const tanggal_2 = "";
const jam_2 = "";
const deskripsi_2 = "";
const file_2 = "";
const link_2 = "";

// Inovasi Teknologi
const tanggal_3 = "15-09-2025";
const jam_3 = "22.00";
const deskripsi_3 = "Resume Materi & Pendahuluan Proposal PKM";
const file_3 = "";
const link_3 = "";

// Strategi Pembelajaran
const tanggal_4 = "15-09-2025";
const jam_4 = "23.00";
const deskripsi_4 = "Perbedaan antara Pendekatan, Metode, Teknik, Taktik, Gaya, dan Model Pembelajaran";
const file_4 = "";
const link_4 = "https://lms.unm.ac.id/mod/assign/view.php?id=683162";

// Kecerdasan Buatan
const tanggal_5 = "16-09-2025";
const jam_5 = "15.00";
const deskripsi_5 = "Tugas Kelompok: Pendekatan Representasi Pengetahuan";
const file_5 = "https://drive.google.com/file/d/1tImlFXkOFn92YlNR8M-CeLeN9j3K6Npd/view?usp=drive_link";
const link_5 = "";

// Jaringan Komputer
const tanggal_6 = "17-09-2025";
const jam_6 = "10.00";
const deskripsi_6 = "Summary Protokol Jaringan";
const file_6 = "https://drive.google.com/file/d/1p0BY62EMIDVEGFbGXkwranLAHD837C-D/view?usp=drive_link";
const link_6 = "";

// Pemrograman Web
const tanggal_7 = "18-09-2025";
const jam_7 = "24.00";
const deskripsi_7 = "Praktikum 3: CSS";
const file_7 = "https://drive.google.com/file/d/1EjVZm5FmAPRtf38tMNrWKZF3OlY7ahjR/view?usp=drive_link";
const link_7 = "https://docs.google.com/forms/d/e/1FAIpQLSdbpqdHFNEew-wefIaBbjz66ewZenODm9kyvzpRGqJ6tyWueA/viewform";

// Struktur Data
const tanggal_8 = "17-09-2025";
const jam_8 = "13.00";
const deskripsi_8 = "Praktikum 2: Pointer";
const file_8 = "https://docs.google.com/document/d/161qx_AV9ycnQQdLE2AmJn1zkT5x1bSBu/edit?usp=drive_link&ouid=114574896051005830120&rtpof=true&sd=true";
const link_8 = "";

   // Info 1
document.getElementById("info-1").addEventListener("click", function () {
  Swal.fire({
    title: "Keamanan Komputer",
    html: `
      <p><b>Deskripsi:</b> ${deskripsi_1}</p>
      <p><b>Deadline:</b> ${tanggal_1} ${jam_1} WITA</p>
      <hr>
      <br>
      <div class="alertButton">
        <a href="${file_1}" target="_blank" class="aAlert">
          📂 File Tugas
        </a>
        <a href="${link_1}" target="_blank" class="aAlert">
          🔗 Link Pengumpulan
        </a>
      </div>
    `,
    icon: "info",
    confirmButtonText: "OK",
    confirmButtonColor: "#3498db"
  });
});

// Info 2
document.getElementById("info-2").addEventListener("click", function () {
  Swal.fire({
    title: "Profesi Kependidikan",
    html: `
      <p><b>Deskripsi:</b> ${deskripsi_2}</p>
      <p><b>Deadline:</b> ${tanggal_2} ${jam_2} WITA</p>
      <hr>
      <br>
      <div class="alertButton">
        <a href="${file_2}" target="_blank" class="aAlert">
          📂 File Tugas
        </a>
        <a href="${link_2}" target="_blank" class="aAlert">
          🔗 Link Pengumpulan
        </a>
      </div>
    `,
    icon: "info",
    confirmButtonText: "OK",
    confirmButtonColor: "#3498db"
  });
});

// Info 3
document.getElementById("info-3").addEventListener("click", function () {
  Swal.fire({
    title: "Inovasi Teknologi",
    html: `
      <p><b>Deskripsi:</b> ${deskripsi_3}</p>
      <p><b>Deadline:</b> ${tanggal_3} ${jam_3} WITA</p>
      <hr>
      <br>
      <div class="alertButton">
        <a href="${file_3}" target="_blank" class="aAlert">
          📂 File Tugas
        </a>
        <a href="${link_3}" target="_blank" class="aAlert">
          🔗 Link Pengumpulan
        </a>
      </div>
    `,
    icon: "info",
    confirmButtonText: "OK",
    confirmButtonColor: "#3498db"
  });
});

// Info 4
document.getElementById("info-4").addEventListener("click", function () {
  Swal.fire({
    title: "Strategi Pembelajaran",
    html: `
      <p><b>Deskripsi:</b> ${deskripsi_4}</p>
      <p><b>Deadline:</b> ${tanggal_4} ${jam_4} WITA</p>
      <hr>
      <br>
      <div class="alertButton">
        <a href="${file_4}" target="_blank" class="aAlert">
          📂 File Tugas
        </a>
        <a href="${link_4}" target="_blank" class="aAlert">
          🔗 Link Pengumpulan
        </a>
      </div>
    `,
    icon: "info",
    confirmButtonText: "OK",
    confirmButtonColor: "#3498db"
  });
});

// Info 5
document.getElementById("info-5").addEventListener("click", function () {
  Swal.fire({
    title: "Kecerdasan Buatan",
    html: `
      <p><b>Deskripsi:</b> ${deskripsi_5}</p>
      <p><b>Deadline:</b> ${tanggal_5} ${jam_5} WITA</p>
      <hr>
      <br>
      <div class="alertButton">
        <a href="${file_5}" target="_blank" class="aAlert">
          📂 File Tugas
        </a>
        <a href="${link_5}" target="_blank" class="aAlert">
          🔗 Link Pengumpulan
        </a>
      </div>
    `,
    icon: "info",
    confirmButtonText: "OK",
    confirmButtonColor: "#3498db"
  });
});

// Info 6
document.getElementById("info-6").addEventListener("click", function () {
  Swal.fire({
    title: "Jaringan Komputer",
    html: `
      <p><b>Deskripsi:</b> ${deskripsi_6}</p>
      <p><b>Deadline:</b> ${tanggal_6} ${jam_6} WITA</p>
      <hr>
      <br>
      <div class="alertButton">
        <a href="${file_6}" target="_blank" class="aAlert">
          📂 File Tugas
        </a>
        <a href="${link_6}" target="_blank" class="aAlert">
          🔗 Link Pengumpulan
        </a>
      </div>
    `,
    icon: "info",
    confirmButtonText: "OK",
    confirmButtonColor: "#3498db"
  });
});

// Info 7
document.getElementById("info-7").addEventListener("click", function () {
  Swal.fire({
    title: "Pemrograman Web",
    html: `
      <p><b>Deskripsi:</b> ${deskripsi_7}</p>
      <p><b>Deadline:</b> ${tanggal_7} ${jam_7} WITA</p>
      <hr>
      <br>
      <div class="alertButton">
        <a href="${file_7}" target="_blank" class="aAlert">
          📂 File Tugas
        </a>
        <a href="${link_7}" target="_blank" class="aAlert">
          🔗 Link Pengumpulan
        </a>
      </div>
    `,
    icon: "info",
    confirmButtonText: "OK",
    confirmButtonColor: "#3498db"
  });
});

// Info 8
document.getElementById("info-8").addEventListener("click", function () {
  Swal.fire({
    title: "Struktur Data",
    html: `
      <p><b>Deskripsi:</b> ${deskripsi_8}</p>
      <p><b>Deadline:</b> ${tanggal_8} ${jam_8} WITA</p>
      <hr>
      <br>
      <div class="alertButton">
        <a href="${file_8}" target="_blank" class="aAlert">
          📂 File Tugas
        </a>
        <a href="${link_8}" target="_blank" class="aAlert">
          🔗 Link Pengumpulan
        </a>
      </div>
    `,
    icon: "info",
    confirmButtonText: "OK",
    confirmButtonColor: "#3498db"
  });
});


// Kode DOM
for (let i = 1; i <= 8; i++) {
  document.getElementById(`tanggal_${i}`).innerText = eval(`tanggal_${i}`);
  document.getElementById(`jam_${i}`).innerText = eval(`jam_${i}`);
  document.getElementById(`deskripsi_${i}`).innerText = eval(`deskripsi_${i}`);
};