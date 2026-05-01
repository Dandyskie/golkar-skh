# Panduan Pembelajaran Kode: Website DPD Partai Golkar Sukoharjo

Repositori ini bukan hanya sekadar kode aplikasi, melainkan juga disusun khusus sebagai **bahan pembelajaran** (studi kasus) dalam membuat antarmuka website modern, premium, dan responsif menggunakan **React, Vite, dan Tailwind CSS**.

Semua komponen utama telah disisipkan **komentar bahasa Indonesia** yang detail untuk menjelaskan apa fungsi blok kode tersebut dan bagaimana cara kerjanya.

---

## 🏗️ Struktur / Kerangka Proyek (Project Architecture)

Berikut adalah alur bagaimana website ini dirakit dari awal:

```text
golkar/
├── public/                 # Tempat file statis yang tidak diproses Vite
│   └── img/                # Aset gambar (logo, foto tokoh, background) -> Diakses via /img/...
├── src/                    # Folder utama tempat kode sumber React berada
│   ├── components/         # Kumpulan "Pecahan Lego" (Komponen UI)
│   │   ├── Preloader.jsx   # Layar loading awal (Animasi logo)
│   │   ├── Navbar.jsx      # Menu navigasi atas (Bisa menghilang saat scroll ke bawah)
│   │   ├── Hero.jsx        # Bagian sambutan utama (Background kuning, foto tokoh)
│   │   ├── About.jsx       # Profil singkat partai
│   │   ├── Agenda.jsx      # Jadwal kegiatan terdekat (Grid Layout)
│   │   ├── Program.jsx     # Program kerja (Penggunaan dinamis Icon Lucide)
│   │   ├── Structure.jsx   # Struktur organisasi kepengurusan (Hover effects)
│   │   ├── MapSection.jsx  # Peta jangkauan kader (Penggunaan SVG murni)
│   │   ├── TableData.jsx   # Data kader dengan fitur PENCARIAN (useState & filter)
│   │   ├── News.jsx        # Grid berita/artikel terkini
│   │   ├── Gallery.jsx     # Galeri foto & video kegiatan (Aspect Ratio)
│   │   ├── Aspirasi.jsx    # Formulir masukan masyarakat (Form state handling)
│   │   ├── CTA.jsx         # Tombol ajakan (Call to Action)
│   │   └── Footer.jsx      # Bagian bawah web (Tautan & Informasi Kontak)
│   ├── App.jsx             # "Lem" utama yang menggabungkan SEMUA komponen di atas
│   ├── index.css           # File CSS utama (Konfigurasi Tailwind, Custom Animation, Gradient)
│   └── main.jsx            # Entry point React (File yang pertama kali dijalankan oleh Vite)
├── index.html              # Template HTML dasar
├── tailwind.config.js      # Pengaturan tema warna khusus (Emas Golkar)
└── package.json            # Daftar library yang dipakai (React, Lucide-React, dll)
```

---

## 🚀 Alur Kerja Kode (How it Works)

Jika kamu ingin belajar bagaimana web ini bekerja, ikuti alur ini:

### 1. `index.html` dan `src/main.jsx` (Titik Awal)
Saat web dibuka, browser memuat `index.html`. Di dalamnya ada `<div id="root"></div>`. Vite lalu menjalankan `src/main.jsx` yang tugasnya menanam (render) aplikasi React ke dalam div "root" tersebut.

### 2. `src/App.jsx` (Sang Konduktor)
Coba buka file ini. Kamu akan melihat bahwa `App.jsx` tidak berisi banyak kode HTML rumit. Tugasnya hanya memanggil komponen-komponen yang telah dibuat di folder `components/` dan menyusunnya berurutan dari atas ke bawah.
```jsx
function App() {
  return (
    <div className="font-sans text-gray-800">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* ... dan seterusnya */}
      </main>
      <Footer />
    </div>
  )
}
```

### 3. Folder `src/components/` (Pecahan Lego)
Inilah tempat di mana sebagian besar coding terjadi. Kami memecah desain web menjadi bagian-bagian kecil (komponen) agar kode tidak menumpuk di satu file. Keuntungannya:
*   **Mudah dicari:** Kalau ada error di bagian form, langsung buka `Aspirasi.jsx`.
*   **Dapat digunakan ulang (Reusable):** Kamu bisa memanggil komponen yang sama berkali-kali jika butuh.

---

## 💡 Konsep Penting React & Tailwind yang Digunakan

Saat kamu membaca file-file di folder `components/`, perhatikan 3 konsep utama ini:

### A. State Management (`useState`)
Digunakan untuk membuat komponen menjadi interaktif/berubah-ubah.
*   **Lihat di `TableData.jsx`**: Kita memakai `useState` untuk mencatat apa yang diketik pengguna di kotak pencarian, lalu menyaring (filter) tabel secara langsung (real-time).
*   **Lihat di `Aspirasi.jsx`**: Kita mengumpulkan inputan form Nama, Email, dan Pesan sebelum pura-pura dikirim ke server.

### B. Pemetaan Array (`.map()`)
Daripada menulis kode HTML (atau JSX) yang sama berulang kali untuk menampilkan daftar, kita menulis data dalam bentuk *Array of Objects*, lalu mengulanginya pakai `.map()`.
*   **Lihat di `Program.jsx` atau `Agenda.jsx`**: Data disimpan di array (seperti `const programs = [...]`), lalu di-*map* menjadi kartu-kartu yang rapi. Ini membuat kode sangat bersih dan mudah dimodifikasi jika ada penambahan program baru.

### C. Desain Responsif & Interaktif (Tailwind CSS)
Perhatikan class-class Tailwind yang sering muncul:
*   `sm:`, `md:`, `lg:` : Ini adalah instruksi khusus untuk ukuran layar. (Contoh: `flex-col sm:flex-row` artinya "di HP susun ke bawah, tapi kalau di layar tablet ke atas susun menyamping").
*   `group` & `group-hover:` : Teknik ampuh untuk membuat efek animasi. Saat kotak utama (group) disentuh mouse, elemen anaknya bisa berubah warna, bergeser, atau membesar. **Lihat di `Structure.jsx` dan `Program.jsx`**.

---

## 🛠️ Cara Menjalankan Proyek di Komputermu

1. Buka Terminal / Command Prompt di folder ini.
2. Pastikan kamu sudah menginstal *Node.js*.
3. Install semua kebutuhan library dengan mengetik:
   ```bash
   npm install
   ```
4. Jalankan *development server* dengan mengetik:
   ```bash
   npm run dev
   ```
5. Buka link (biasanya `http://localhost:5173`) yang muncul di terminal menggunakan browser.

---

*Selamat belajar! Jangan ragu untuk mengubah-ubah (ngoprek) angka, warna, atau tulisan di dalam kode untuk melihat apa yang terjadi di browser.*
