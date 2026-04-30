import { Target, Flag, ShieldCheck } from 'lucide-react';

const stats = [
  { value: '5', label: 'Wilayah' },
  { value: '78', label: 'Cabang' },
  { value: '12.4K', label: 'Kader' },
  { value: '45K+', label: 'Anggota' }
];

const cards = [
  {
    icon: Target,
    title: 'VISI',
    desc: 'Terwujudnya masyarakat Indonesia yang bersatu, berdaulat, maju, makmur dan berkeadilan sosial berdasarkan Pancasila.'
  },
  {
    icon: Flag,
    title: 'MISI',
    desc: 'Mewujudkan pemerintahan yang bersih dan berwibawa, serta menggerakkan ekonomi kerakyatan menuju kesejahteraan merata.'
  },
  {
    icon: ShieldCheck,
    title: 'NILAI PENGABDIAN',
    desc: 'Kekaryaan, kebangsaan, dan religiusitas menjadi pilar utama dalam setiap langkah perjuangan demi kemajuan bangsa.'
  }
];

export default function About() {
  return (
    <section id="tentang" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#FFD700] via-[#FFC107] to-[#DAA520]">
      {/* Pattern Overlay Halus */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP: Grid 2 Kolom Kiri Kanan */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* KIRI: Image Area (Person + Flag) */}
          <div className="lg:col-span-5 relative fade-up mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg mx-auto lg:mx-0 h-[260px] sm:h-[350px] lg:h-[650px] flex items-end justify-center">
              
              {/* Tokoh Utama (Cutout PNG) */}
              <img 
                src="/public/img/bahlianjg-removebg-preview.png" 
                alt="Tokoh Golkar" 
                className="relative z-10 w-[80%] lg:w-[130%] max-w-none h-auto object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] scale-100 lg:scale-110 origin-bottom lg:-translate-x-8"
                style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 15%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)' }}
              />

              {/* Gradasi Kuning di Bawah */}
              <div className="absolute bottom-0 left-[-30%] right-[-30%] h-24 lg:h-40 bg-gradient-to-t from-[#FFC107] to-transparent z-20 pointer-events-none" />
            </div>
          </div>

          {/* KANAN: Content / Cards */}
          <div className="lg:col-span-7 fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="mb-10 text-center lg:text-left">
              <span className="text-white font-bold tracking-[0.2em] uppercase text-sm drop-shadow-md">Tentang Kami</span>
              <h2 className="font-[Montserrat] font-black text-4xl sm:text-5xl lg:text-6xl text-white mt-2 leading-tight drop-shadow-lg">
                Gerakan Karya<br />
                <span className="text-gray-900">Untuk Indonesia</span>
              </h2>
            </div>

            <div className="space-y-6">
              {cards.map((card, i) => (
                <div 
                  key={i} 
                  className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-5 border-l-8 border-[#FFD700]"
                >
                  <div className="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-[#FFD700] to-[#DAA520] flex items-center justify-center shadow-lg">
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-[Montserrat] font-bold text-gray-900 text-xl mb-2">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM: Bagian Statistik Horizontal */}
        <div className="mt-20 fade-up" style={{ transitionDelay: '0.4s' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-b-4 border-[#FFD700] group"
              >
                <h4 className="font-[Montserrat] font-black text-4xl sm:text-5xl text-gray-900 group-hover:text-[#DAA520] transition-colors">
                  {stat.value}
                </h4>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs sm:text-sm mt-3">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
