/**
 * Komponen Navbar (Navigasi Atas)
 * -------------------------------------------------------------------------
 * Komponen ini adalah menu navigasi utama yang posisinya tetap di atas layar (sticky).
 * Dilengkapi dengan fitur:
 * - Mengubah background saat di-scroll (transparan -> putih)
 * - Menyembunyikan diri saat scroll ke bawah, dan muncul lagi saat scroll ke atas (smart hide)
 * - Menu burger responsif untuk mode mobile
 * 
 * Konsep React yang diajarkan:
 * 1. useState: Untuk menyimpan status dinamis (apakah sudah di-scroll? apakah menu mobile terbuka?).
 * 2. useEffect: Untuk mendeteksi event listener global seperti 'scroll' pada window.
 * 3. Conditional Rendering & Template Literals: Memasukkan class CSS secara dinamis berdasarkan state.
 */

import { useState, useEffect } from 'react';
import { LogIn } from 'lucide-react';

// Data array untuk link menu navigasi. Ini mempermudah jika ingin menambah/mengubah menu.
const menuItems = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Program', href: '#program' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Berita', href: '#berita' },
  { label: 'Struktur', href: '#struktur' },
  { label: 'Peta', href: '#peta' },
  { label: 'Aspirasi', href: '#aspirasi' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  // State untuk melacak apakah user sudah men-scroll ke bawah lebih dari 60px
  const [scrolled, setScrolled] = useState(false);
  // State untuk menyembunyikan navbar saat scroll turun, dan menampilkannya saat scroll naik
  const [hidden, setHidden] = useState(false);
  // State untuk melacak apakah menu hamburger (mobile) sedang terbuka atau tertutup
  const [mobileOpen, setMobileOpen] = useState(false);

  // Hook useEffect ini akan dijalankan sekali saat komponen pertama kali di-render (karena array dependency [] kosong)
  useEffect(() => {
    let lastScroll = 0;
    
    // Fungsi yang akan dipanggil setiap kali user melakukan scroll
    const onScroll = () => {
      const current = window.scrollY;
      
      // Jika scroll lebih dari 60px, set scrolled jadi true (untuk mengubah background navbar jadi solid putih)
      setScrolled(current > 60);
      
      // Logika Smart Hide: Jika posisi scroll > 100px DAN arahnya turun (current > lastScroll), maka sembunyikan navbar
      setHidden(current > 100 && current > lastScroll);
      
      lastScroll = current; // Simpan posisi scroll terakhir
    };

    // Tambahkan event listener ke window browser
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Cleanup function: Hapus event listener saat komponen dihancurkan (unmount) agar tidak terjadi memory leak
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fungsi untuk menangani klik pada link menu (Smooth Scrolling)
  const handleClick = (e, href) => {
    e.preventDefault(); // Mencegah perilaku default link HTML yang langsung melompat kasar
    setMobileOpen(false); // Tutup menu mobile jika sedang terbuka
    const el = document.querySelector(href); // Cari elemen HTML berdasarkan ID (contoh: id="tentang")
    if (el) el.scrollIntoView({ behavior: 'smooth' }); // Lakukan scroll yang halus (smooth scroll)
  };

  return (
    // Class dinamis menggunakan Template Literal JavaScript (tanda backtick `)
    // Jika `scrolled` true -> tambahkan shadow. Jika `hidden` true -> angkat navbar ke atas (-translate-y-full)
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white shadow-lg shadow-black/10' : 'bg-white/90 backdrop-blur-md'
    } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Kontainer utama flexbox untuk memisahkan Logo (Kiri), Menu (Tengah), dan Tombol (Kanan) */}
        <div className="flex items-center justify-between h-12 md:h-20">
          
          {/* BAGIAN KIRI: Logo dan Nama Partai */}
          <a href="#beranda" onClick={(e) => handleClick(e, '#beranda')} className="flex items-center gap-3">
            {/* Lingkaran pembungkus logo */}
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden shadow-sm border-2 border-golkar-yellow/40 bg-white flex items-center justify-center">
              {/* Gambar logo. Pastikan path dimulai dari root folder public (/img/...) */}
              <img 
                src="/img/golkarlogokntl.png" 
                alt="Logo Golkar" 
                className="w-5 h-5 md:w-10 md:h-10 object-contain"
              />
            </div>
            {/* Teks Nama Organisasi (Disembunyikan di mobile dengan class 'hidden sm:block') */}
            <div className="hidden sm:block leading-tight">
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gray-400">Dewan Pimpinan Daerah</p>
              <p className="text-sm font-bold tracking-wide uppercase text-golkar-dark-gold">Partai Golkar</p>
               <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gray-400">Sukoharjo</p>
            </div>
          </a>

          {/* BAGIAN TENGAH: Menu Navigasi Desktop */}
          <div className="hidden xl:flex items-center gap-5">
            {/* Me-loop array menuItems untuk membuat tag <a> secara dinamis */}
            {menuItems.map((item) => (
              <a key={item.href} href={item.href} onClick={(e) => handleClick(e, item.href)} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          {/* BAGIAN KANAN: Tombol Login dan Tombol Hamburger (Mobile) */}
          <div className="flex items-center gap-3">
            {/* Tombol Login Desktop */}
            <a href="#" className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-golkar-yellow text-golkar-dark-gold text-xs font-semibold uppercase tracking-wider hover:bg-golkar-yellow hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <LogIn size={14} /> Login
            </a>
            
            {/* Tombol Hamburger Menu (Hanya muncul di mobile/tablet) */}
            {/* Mengubah state `mobileOpen` menjadi kebalikannya (toggle) saat diklik */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className={`hamburger xl:hidden flex flex-col gap-1.5 p-2 ${mobileOpen ? 'active' : ''}`} aria-label="Menu">
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </div>

      {/* BAGIAN BAWAH: Menu Mobile (Dropdown yang muncul saat hamburger diklik) */}
      {/* Menggunakan `max-h-0` jika tertutup, dan `max-h-[600px]` jika terbuka untuk efek animasi geser */}
      <div className={`xl:hidden overflow-hidden transition-all duration-500 bg-white ${mobileOpen ? 'max-h-[600px] border-t border-gray-100' : 'max-h-0'}`}>
        <div className="px-6 py-4 flex flex-col gap-1">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} onClick={(e) => handleClick(e, item.href)} className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-golkar-dark-gold hover:bg-golkar-yellow/10 rounded-lg transition">
              {item.label}
            </a>
          ))}
          {/* Tombol Login untuk Mobile */}
          <a href="#" className="mt-3 text-center px-4 py-2.5 rounded-full border border-golkar-yellow text-golkar-dark-gold text-xs font-semibold uppercase tracking-wider md:hidden">Login</a>
        </div>
      </div>
    </nav>
  );
}
