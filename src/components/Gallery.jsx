import { Play } from 'lucide-react';

const galleryItems = [
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop', title: 'Musyawarah Daerah 2025', type: 'image' },
  { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop', title: 'Pelatihan Kader Muda', type: 'image' },
  { src: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&h=400&fit=crop', title: 'Bakti Sosial Merapi', type: 'video' },
  { src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop', title: 'Deklarasi Kemenangan', type: 'image' },
  { src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop', title: 'Rapat Pimpinan Daerah', type: 'image' },
  { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop', title: 'Konsolidasi Partai', type: 'video' },
];

export default function Gallery() {
  return (
    <section id="galeri" className="relative py-24 lg:py-32 overflow-hidden bg-abstract-gallery">
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="section-label">Dokumentasi</span>
          <h2 className="section-title text-3xl md:text-5xl text-white mt-3">Galeri Kegiatan</h2>
          <div className="gold-line mx-auto mt-5" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <div key={i} className="fade-up group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer card-hover shadow-lg" style={{ transitionDelay: `${i * 0.08}s` }}>
              <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-golkar-dark-gold via-golkar-dark-gold/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.type === 'video' && (
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-3 shadow-lg">
                    <Play className="w-6 h-6 text-golkar-dark-gold ml-0.5" fill="currentColor" />
                  </div>
                )}
                <p className="text-white font-semibold text-sm text-center px-4">{item.title}</p>
              </div>
              <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-white/80 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-wider text-golkar-dark-gold">
                {item.type === 'video' ? 'Video' : 'Foto'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
