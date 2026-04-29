import { Users, Building2, Award, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, value: '12,450+', label: 'Kader Aktif' },
  { icon: Building2, value: '5', label: 'Kab/Kota' },
  { icon: Award, value: '78', label: 'Kursi DPRD' },
  { icon: TrendingUp, value: '150+', label: 'Program Kerja' },
];

export default function About() {
  return (
    <section id="tentang" className="relative py-24 lg:py-32 overflow-hidden bg-abstract-about">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/10 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="fade-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/20 rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/20">
                <img src="/public/img/bahliljago.png" alt="Ketua DPD Golkar DIY" className="w-full h-[500px] lg:h-[600px] object-cover" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-golkar-dark-gold via-golkar-dark-gold/80 to-transparent p-6">
                  <p className="text-white font-semibold text-lg">Bahlil Lahadalia, S.E.</p>
                  <p className="text-white/70 text-sm">Ketum DPP Partai Golkar</p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <img 
      src="/public/img/golkarlogokntl.png" 
      alt="Logo Golkar" 
      className="w-10 h-10 object-contain"
    />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="fade-right">
            <span className="section-label">Tentang Kami</span>
            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl text-white mt-3 mb-6">
              Suara Golkar<br /><span className="text-white/80">Untuk Rakyat</span>
            </h2>
            <div className="gold-line mb-6" />
            <p className="text-white/80 leading-relaxed mb-4">
              Partai Golkar DPD Kabupaten Sukoharjo berkomitmen membangun masyarakat yang adil, makmur, dan sejahtera. Dengan semangat karya nyata, kami hadir untuk memperjuangkan aspirasi rakyat.
            </p>
            <p className="text-white/60 leading-relaxed mb-10">
              Didukung ribuan kader yang tersebar di seluruh kabupaten dan kota, kami terus bekerja keras memastikan setiap program berdampak nyata bagi kehidupan masyarakat Kabupaten Sukoharjo.
            </p>

            {/* Stats - white bg, yellow text */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center card-hover shadow-md">
                  <stat.icon className="w-6 h-6 text-golkar-dark-gold mx-auto mb-2" />
                  <p className="font-[Montserrat] font-bold text-2xl text-golkar-dark-gold">{stat.value}</p>
                  <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
