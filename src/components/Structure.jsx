const leaders = [
  { name: 'Dr. H. Ahmad Suryanto, M.Si', role: 'Ketua DPD', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=top' },
  { name: 'Hj. Siti Nurjanah, S.H.', role: 'Wakil Ketua', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop&crop=top' },
  { name: 'Ir. Bambang Wicaksono', role: 'Sekretaris', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=top' },
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

        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <div key={i} className="fade-up group card-hover relative rounded-2xl overflow-hidden shadow-xl h-[320px] sm:h-[400px] lg:h-[500px]" style={{ transitionDelay: `${i * 0.15}s` }}>
              <img 
                src={leader.img} 
                alt={leader.name} 
                className="absolute inset-0 w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out z-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
              <div className="absolute inset-0 bg-golkar-dark-gold/30 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-center z-20 transition-transform duration-500 transform group-hover:-translate-y-2">
                <h3 className="font-[Montserrat] font-bold text-white text-xl md:text-2xl drop-shadow-lg">{leader.name}</h3>
                <p className="text-golkar-yellow text-sm mt-1.5 font-semibold uppercase tracking-wider opacity-90 drop-shadow-md">{leader.role}</p>
                <div className="w-0 h-1 bg-golkar-yellow mx-auto mt-4 group-hover:w-16 transition-all duration-500 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
