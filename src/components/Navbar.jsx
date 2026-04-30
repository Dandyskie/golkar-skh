import { useState, useEffect } from 'react';
import { LogIn } from 'lucide-react';

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
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastScroll = 0;
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 60);
      setHidden(current > 100 && current > lastScroll);
      lastScroll = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white shadow-lg shadow-black/10' : 'bg-white/90 backdrop-blur-md'
    } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-20">
          {/* Logo */}
          <a href="#beranda" onClick={(e) => handleClick(e, '#beranda')} className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden shadow-sm border-2 border-golkar-yellow/40 bg-white flex items-center justify-center">
              <img 
                src="/public/img/golkarlogokntl.png" 
                alt="Logo Golkar" 
                className="w-5 h-5 md:w-10 md:h-10 object-contain"
              />
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gray-400">Dewan Pimpinan Daerah</p>
              <p className="text-sm font-bold tracking-wide uppercase text-golkar-dark-gold">Partai Golkar</p>
               <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gray-400">Sukoharjo</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-5">
            {menuItems.map((item) => (
              <a key={item.href} href={item.href} onClick={(e) => handleClick(e, item.href)} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a href="#" className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-golkar-yellow text-golkar-dark-gold text-xs font-semibold uppercase tracking-wider hover:bg-golkar-yellow hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <LogIn size={14} /> Login
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className={`hamburger xl:hidden flex flex-col gap-1.5 p-2 ${mobileOpen ? 'active' : ''}`} aria-label="Menu">
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`xl:hidden overflow-hidden transition-all duration-500 bg-white ${mobileOpen ? 'max-h-[600px] border-t border-gray-100' : 'max-h-0'}`}>
        <div className="px-6 py-4 flex flex-col gap-1">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} onClick={(e) => handleClick(e, item.href)} className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-golkar-dark-gold hover:bg-golkar-yellow/10 rounded-lg transition">
              {item.label}
            </a>
          ))}
          <a href="#" className="mt-3 text-center px-4 py-2.5 rounded-full border border-golkar-yellow text-golkar-dark-gold text-xs font-semibold uppercase tracking-wider md:hidden">Login</a>
        </div>
      </div>
    </nav>
  );
}
