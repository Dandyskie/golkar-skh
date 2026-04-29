import { MapPin, Clock, ArrowRight } from 'lucide-react';

const agendaItems = [
  { date: '15', month: 'Mei', title: 'Musyawarah Daerah Partai Golkar Sukoharjo', location: 'Gedung DPRD Sukoharjo, Sukoharjo', time: '08:00 - 17:00 WIB', category: 'Musyawarah' },
  { date: '22', month: 'Mei', title: 'Pelatihan Kader Muda Golkar', location: 'Hotel Sunan Solo', time: '09:00 - 15:00 WIB', category: 'Pelatihan' },
  { date: '01', month: 'Jun', title: 'Bakti Sosial & Donor Darah', location: 'Alun-Alun Sukoharjo', time: '07:00 - 12:00 WIB', category: 'Sosial' },
  { date: '10', month: 'Jun', title: 'Rapat Koordinasi Pemenangan', location: 'Kantor DPD Golkar Sukoharjo', time: '13:00 - 16:00 WIB', category: 'Rapat' },
];

export default function Agenda() {
  return (
    <section id="agenda" className="relative py-24 lg:py-32 overflow-hidden bg-abstract-agenda">
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-white/10 blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="section-label">Kegiatan</span>
          <h2 className="section-title text-3xl md:text-5xl text-white mt-3">Agenda Terdekat</h2>
          <div className="gold-line mx-auto mt-5" />
        </div>

        <div className="grid gap-4 max-w-4xl mx-auto">
          {agendaItems.map((item, i) => (
            <div key={i} className="fade-up bg-white rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 card-hover group shadow-md"
              style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="flex-shrink-0 w-20 h-20 gradient-gold rounded-xl flex flex-col items-center justify-center">
                <span className="font-[Montserrat] font-black text-2xl text-white leading-none">{item.date}</span>
                <span className="text-white/80 text-xs font-semibold uppercase">{item.month}</span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-golkar-yellow/20 text-golkar-dark-gold text-[10px] font-semibold uppercase tracking-wider mb-2">{item.category}</span>
                <h3 className="text-gray-800 font-semibold text-base mb-2 group-hover:text-golkar-dark-gold transition-colors">{item.title}</h3>
                <div className="flex flex-wrap gap-4 text-gray-400 text-xs">
                  <span className="flex items-center gap-1"><MapPin size={12} /> {item.location}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {item.time}</span>
                </div>
              </div>
              <ArrowRight size={18} className="text-gray-300 group-hover:text-golkar-dark-gold group-hover:translate-x-1 transition-all flex-shrink-0 hidden sm:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
