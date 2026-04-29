import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* White background for CTA, yellow text */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,215,0,0.15) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <div className="fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-golkar-yellow/15 text-golkar-dark-gold text-xs font-bold uppercase tracking-wider mb-6">
            Bergabung Bersama Kami
          </span>
          <h2 className="font-[Montserrat] font-black text-3xl md:text-5xl lg:text-6xl text-golkar-dark-gold leading-tight mb-6">
            Jadilah Bagian dari<br />Perubahan Nyata
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Bersama Partai Golkar, wujudkan Indonesia yang lebih maju, adil, dan sejahtera. Daftarkan dirimu sebagai kader baru.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#aspirasi" onClick={(e) => { e.preventDefault(); document.querySelector('#aspirasi')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full gradient-gold text-white font-semibold text-sm uppercase tracking-wider hover:scale-105 transition-all duration-300 shadow-xl shadow-golkar-yellow/30">
              Daftar Sekarang <ArrowRight size={16} />
            </a>
            <a href="#tentang" onClick={(e) => { e.preventDefault(); document.querySelector('#tentang')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-golkar-yellow text-golkar-dark-gold font-semibold text-sm uppercase tracking-wider hover:bg-golkar-yellow/10 transition-all duration-300">
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
