import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Yellow gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-golkar-yellow via-golkar-gold to-golkar-yellow" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-white/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-golkar-dark-gold/20 blur-[100px] pointer-events-none" />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay z-[1]" />

      {/* Dot pattern */}
      <div className="absolute inset-0 z-[2] pointer-events-none opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      {/* Person Left 1 */}
      <div className="absolute bottom-0 left-[-10%] sm:left-[-5%] lg:left-[-50px] z-10 animate-hero-img-1">
        <img src="public/img/bahlil-removebg-preview.png" alt="Tokoh 1" className="h-[28vh] sm:h-[45vh] lg:h-[72vh] object-cover object-top person-shadow"
          style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 15%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)' }} />
      </div>

      {/* Person Left 2 */}
      <div className="absolute bottom-0 left-[12%] sm:left-[14%] lg:left-[14%] z-[11] animate-hero-img-2">
        <img src="public/img/Prabowo-removebg-preview.png" alt="Tokoh 2" className="h-[25vh] sm:h-[40vh] lg:h-[65vh] object-cover object-top person-shadow"
          style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 15%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)' }} />
      </div>

      {/* Person Right 1 */}
      <div className="absolute bottom-0 right-[15%] sm:right-[18%] lg:right-[18%] z-[11] animate-hero-img-3">
        <img src="public/img/Jaka-removebg-preview.png" alt="Tokoh 3" className="h-[25vh] sm:h-[40vh] lg:h-[66vh] object-cover object-top person-shadow"
          style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 15%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)' }} />
      </div>

      {/* Person Right 2 */}
      <div className="absolute bottom-0 right-[-5%] sm:right-[1%] lg:right-[1%] z-[11] animate-hero-img-4">
        <img src="public/img/saleh-removebg-preview.png" alt="Tokoh 4" className="h-[26vh] sm:h-[42vh] lg:h-[66vh] object-cover object-top person-shadow"
          style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 15%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)' }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <p className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-white/80 mb-4 text-shadow-sm">
          Dewan Pimpinan Daerah
        </p>
        <h1 className="font-[Montserrat] font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase tracking-wider leading-none mb-6 text-white text-shadow-lg">
          Partai<br />Golkar
        </h1>

        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/40 bg-white/15 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-white">
            Kabupaten Sukoharjo
          </span>
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
        </div>

        <p className="mt-8 text-sm md:text-base text-white font-light max-w-lg mx-auto leading-relaxed">
          Bersatu membangun negeri dengan karya nyata untuk Indonesia yang lebih maju dan sejahtera
        </p>
      </div>

      {/* Scroll indicator */}
      <a href="#tentang" onClick={(e) => { e.preventDefault(); document.querySelector('#tentang')?.scrollIntoView({ behavior: 'smooth' }); }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70 hover:text-white transition">
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <ChevronDown size={20} className="animate-bounce-down" />
      </a>

      {/* Bottom fade to yellow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-golkar-yellow to-transparent z-20 pointer-events-none" />

      <style>{`
        @keyframes heroFadeUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-img-1 { animation: heroFadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards; opacity: 0; }
        .animate-hero-img-2 { animation: heroFadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards; opacity: 0; }
        .animate-hero-img-3 { animation: heroFadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.9s forwards; opacity: 0; }
        .animate-hero-img-4 { animation: heroFadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.1s forwards; opacity: 0; }
      `}</style>
    </section>
  );
}
