import { Clock, ArrowUpRight } from 'lucide-react';

const newsItems = [
  { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop', category: 'Organisasi', date: '28 Apr 2026', title: 'Golkar Sukoharjo Gelar Musda ke-XII, Siap Menangkan Pemilu 2029', excerpt: 'Musyawarah Daerah ke-12 Partai Golkar Sukoharjo berhasil menetapkan kepengurusan baru...' },
  { img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&h=300&fit=crop', category: 'Politik', date: '25 Apr 2026', title: 'Kader Golkar Dorong Percepatan Pembangunan Infrastruktur Sukoharjo', excerpt: 'Fraksi Golkar DPRD Sukoharjo mengajukan proposal percepatan pembangunan jalan...' },
  { img: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=500&h=300&fit=crop', category: 'Sosial', date: '20 Apr 2026', title: 'Golkar Peduli Salurkan 1000 Paket Sembako di Sukoharjo', excerpt: 'Program Golkar Peduli kembali menyalurkan bantuan kepada masyarakat terdampak...' },
];

export default function News() {
  return (
    <section id="berita" className="relative py-24 lg:py-32 overflow-hidden bg-abstract-news">
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="section-label">Informasi</span>
          <h2 className="section-title text-3xl md:text-5xl text-white mt-3">Kabar Terkini</h2>
          <div className="gold-line mx-auto mt-5" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news, i) => (
            <article key={i} className="fade-up bg-white rounded-2xl overflow-hidden group card-hover shadow-md" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md gradient-gold text-white text-[10px] font-bold uppercase tracking-wider">{news.category}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3"><Clock size={12} /><span>{news.date}</span></div>
                <h3 className="font-semibold text-gray-800 group-hover:text-golkar-dark-gold transition-colors leading-snug mb-3">{news.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{news.excerpt}</p>
                <a href="#" className="inline-flex items-center gap-1 text-golkar-dark-gold text-xs font-semibold uppercase tracking-wider hover:gap-2 transition-all">Baca Selengkapnya <ArrowUpRight size={14} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
