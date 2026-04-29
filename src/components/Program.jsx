import { GraduationCap, HeartHandshake, Sprout, Landmark, ShieldCheck, Briefcase } from 'lucide-react';

const programs = [
  { icon: GraduationCap, title: 'Golkar Cerdas', desc: 'Program beasiswa dan pelatihan untuk meningkatkan kualitas pendidikan masyarakat Sukoharjo.' },
  { icon: HeartHandshake, title: 'Golkar Peduli', desc: 'Bakti sosial, bantuan bencana, dan program kesehatan untuk masyarakat yang membutuhkan.' },
  { icon: Sprout, title: 'Golkar Hijau', desc: 'Gerakan penghijauan dan pelestarian lingkungan di seluruh wilayah Sukoharjo.' },
  { icon: Landmark, title: 'Golkar Membangun', desc: 'Advokasi pembangunan infrastruktur dan fasilitas publik yang merata.' },
  { icon: ShieldCheck, title: 'Golkar Bersih', desc: 'Komitmen pemerintahan yang bersih, transparan, dan akuntabel.' },
  { icon: Briefcase, title: 'Golkar Mandiri', desc: 'Pemberdayaan UMKM dan penciptaan lapangan kerja bagi generasi muda.' },
];

export default function Program() {
  return (
    <section id="program" className="relative py-24 lg:py-32 overflow-hidden bg-abstract-program">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="section-label">Program Unggulan</span>
          <h2 className="section-title text-3xl md:text-5xl text-white mt-3">Program Aksi Nyata</h2>
          <div className="gold-line mx-auto mt-5" />
          <p className="text-white/70 mt-5 max-w-xl mx-auto text-sm">Enam program strategis untuk membangun Yogyakarta yang maju, berkeadilan, dan berkelanjutan.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <div key={i} className="fade-up bg-white rounded-2xl p-7 group card-hover cursor-pointer shadow-md" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="w-14 h-14 gradient-gold rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <prog.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-[Montserrat] font-bold text-lg text-gray-800 mb-3 group-hover:text-golkar-dark-gold transition-colors">{prog.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{prog.desc}</p>
              <div className="mt-5 w-0 group-hover:w-full h-0.5 gradient-gold transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
