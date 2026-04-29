const leaders = [
  { name: 'Dr. H. Ahmad Suryanto, M.Si', role: 'Ketua DPD', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=350&fit=crop&crop=top' },
  { name: 'Hj. Siti Nurjanah, S.H.', role: 'Wakil Ketua', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=350&fit=crop&crop=top' },
  { name: 'Ir. Bambang Wicaksono', role: 'Sekretaris', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=350&fit=crop&crop=top' },
  { name: 'Drs. Agus Prabowo, M.M.', role: 'Bendahara', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=350&fit=crop&crop=top' },
  { name: 'Ratna Dewi Kusuma, S.Sos.', role: 'Ketua Bidang Kaderisasi', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=350&fit=crop&crop=top' },
  { name: 'H. Wahyu Pratama, S.E.', role: 'Ketua Bidang Pemenangan', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=350&fit=crop&crop=top' },
];

export default function Structure() {
  return (
    <section id="struktur" className="relative py-24 lg:py-32 overflow-hidden bg-abstract-structure">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-white/10 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="section-label">Kepengurusan</span>
          <h2 className="section-title text-3xl md:text-5xl text-white mt-3">Struktur Organisasi</h2>
          <div className="gold-line mx-auto mt-5" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader, i) => (
            <div key={i} className="fade-up bg-white rounded-2xl overflow-hidden group card-hover shadow-md relative" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="relative h-64 overflow-hidden">
                <img src={leader.img} alt={leader.name} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <div className="absolute inset-0 bg-golkar-dark-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5 text-center -mt-12 relative z-10 transition-transform duration-500">
                <div className="w-14 h-14 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-white group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  <span className="font-[Montserrat] font-black text-white text-lg">{leader.name.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-sm group-hover:text-golkar-dark-gold transition-colors">{leader.name}</h3>
                <p className="text-golkar-dark-gold text-xs mt-1.5 font-semibold opacity-80 group-hover:opacity-100 transition-opacity">{leader.role}</p>
                <div className="w-0 h-0.5 gradient-gold mx-auto mt-4 group-hover:w-10 transition-all duration-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
