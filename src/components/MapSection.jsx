import { MapPin } from 'lucide-react';

const regions = [
  { name: 'Kecamatan Sukoharjo', kader: '2,340' },
  { name: 'Kecamatan Tawangsari', kader: '3,120' },
  { name: 'Kecamatan Polokarto', kader: '2,890' },
  { name: 'Kecamatan Gatak', kader: '2,100' },
  { name: 'Kecamatan Bendosari', kader: '2,000' },
];

export default function MapSection() {
  return (
    <section id="peta" className="relative py-24 lg:py-32 overflow-hidden bg-abstract-map">
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="section-label">Jangkauan</span>
          <h2 className="section-title text-3xl md:text-5xl text-white mt-3">Peta Perjuangan</h2>
          <div className="gold-line mx-auto mt-5" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="fade-left relative">
            <div className="aspect-square max-w-lg mx-auto relative">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <path d="M80 80 L320 80 L300 180 L100 180 Z" fill="rgba(255,255,255,0.3)" stroke="#fff" strokeWidth="1.5" className="hover:fill-white/50 transition-all cursor-pointer" />
                <text x="200" y="135" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="600">Sukoharjo</text>
                <circle cx="200" cy="210" r="30" fill="rgba(255,255,255,0.25)" stroke="#fff" strokeWidth="2" className="hover:fill-white/50 transition-all cursor-pointer" />
                <text x="200" y="214" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="600">Tawangsari</text>
                <path d="M100 240 L300 240 L280 340 L120 340 Z" fill="rgba(255,255,255,0.3)" stroke="#fff" strokeWidth="1.5" className="hover:fill-white/50 transition-all cursor-pointer" />
                <text x="200" y="295" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="600">Polokarto</text>
                <path d="M20 180 L95 180 L95 340 L20 280 Z" fill="rgba(255,255,255,0.3)" stroke="#fff" strokeWidth="1.5" className="hover:fill-white/50 transition-all cursor-pointer" />
                <text x="58" y="260" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">Gatak</text>
                <path d="M305 180 L380 180 L380 300 L285 340 L305 240 Z" fill="rgba(255,255,255,0.3)" stroke="#fff" strokeWidth="1.5" className="hover:fill-white/50 transition-all cursor-pointer" />
                <text x="340" y="260" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">Bendosari</text>
              </svg>
            </div>
          </div>

          <div className="fade-right space-y-4">
            {regions.map((region, i) => (
              <div key={i} className="bg-white rounded-xl p-5 flex items-center gap-4 card-hover group shadow-md">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-800 font-semibold text-sm group-hover:text-golkar-dark-gold transition">{region.name}</h4>
                  <p className="text-gray-400 text-xs mt-0.5">{region.kader} kader aktif</p>
                </div>
                <div className="w-16 h-2 bg-golkar-yellow/20 rounded-full overflow-hidden">
                  <div className="h-full gradient-gold rounded-full" style={{ width: `${(parseInt(region.kader.replace(',', '')) / 3200) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
