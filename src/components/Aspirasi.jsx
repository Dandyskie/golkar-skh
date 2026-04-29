import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Aspirasi() {
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ nama: '', email: '', pesan: '' });
  };

  return (
    <section id="aspirasi" className="relative py-24 lg:py-32 overflow-hidden bg-abstract-aspirasi">
      <div className="relative z-10 max-w-3xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <span className="section-label">Suara Anda</span>
          <h2 className="section-title text-3xl md:text-5xl text-white mt-3">Sampaikan Aspirasi</h2>
          <div className="gold-line mx-auto mt-5" />
        </div>
        <form onSubmit={handleSubmit} className="fade-up bg-white rounded-2xl p-8 space-y-5 shadow-lg">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="relative">
              <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Nama Lengkap" required value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm placeholder:text-gray-400 focus:outline-none focus:border-golkar-dark-gold focus:ring-1 focus:ring-golkar-yellow/30 transition" />
            </div>
            <div className="relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="email" placeholder="Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm placeholder:text-gray-400 focus:outline-none focus:border-golkar-dark-gold focus:ring-1 focus:ring-golkar-yellow/30 transition" />
            </div>
          </div>
          <div className="relative">
            <MessageSquare size={16} className="absolute left-4 top-4 text-gray-400" />
            <textarea rows="5" placeholder="Tulis aspirasi Anda..." required value={form.pesan} onChange={(e) => setForm({ ...form, pesan: e.target.value })}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm placeholder:text-gray-400 focus:outline-none focus:border-golkar-dark-gold focus:ring-1 focus:ring-golkar-yellow/30 transition resize-none" />
          </div>
          <button type="submit" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-gold text-white font-semibold text-sm uppercase tracking-wider hover:scale-105 transition-all duration-300 shadow-lg">
            <Send size={16} /> Kirim Aspirasi
          </button>
          {submitted && <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200"><p className="text-emerald-600 text-sm font-medium text-center">✓ Aspirasi berhasil dikirim!</p></div>}
        </form>
      </div>
    </section>
  );
}
