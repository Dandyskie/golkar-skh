import { Globe, Mail, MapPin, Phone } from 'lucide-react';

const quickLinks = ['Beranda', 'Tentang', 'Agenda', 'Program', 'Galeri', 'Berita'];

export default function Footer() {
  return (
    <footer id="kontak" className="relative pt-20 pb-8 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img 
      src="/public/img/golkarlogokntl.png" 
      alt="Logo Golkar" 
      className="w-10 h-10 object-contain"
    />
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400">DPD</p>
                <p className="text-sm font-bold text-golkar-dark-gold uppercase">Partai Golkar</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">Dewan Pimpinan Daerah Partai Golkar Kabupaten Sukoharjo. Bersatu membangun negeri.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-golkar-dark-gold font-semibold text-sm uppercase tracking-wider mb-5">Tautan</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="text-gray-400 text-sm hover:text-golkar-dark-gold transition">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-golkar-dark-gold font-semibold text-sm uppercase tracking-wider mb-5">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm"><MapPin size={14} className="mt-0.5 shrink-0" /> Jl. Wadyo Pranoto, Bendosari 55271</li>
              <li className="flex items-center gap-2 text-gray-400 text-sm"><Phone size={14} className="shrink-0" /> (0274) 123-456</li>
              <li className="flex items-center gap-2 text-gray-400 text-sm"><Mail size={14} className="shrink-0" /> info@golkarskh.or.id</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 text-xs">&copy; 2026 DPD Partai Golkar Sukoharjo by Edutech Digital Solution. Hak cipta dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-300 text-xs hover:text-golkar-dark-gold transition">Kebijakan Privasi</a>
            <a href="#" className="text-gray-300 text-xs hover:text-golkar-dark-gold transition">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
