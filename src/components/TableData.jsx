import { Search } from 'lucide-react';
import { useState } from 'react';

const kaderData = [
  { no: 1, nama: 'H. Ahmad Suryanto', jabatan: 'Ketua DPD', wilayah: 'Sukoharjo', status: 'Aktif' },
  { no: 2, nama: 'Hj. Siti Nurjanah', jabatan: 'Wakil Ketua', wilayah: 'Sukoharjo', status: 'Aktif' },
  { no: 3, nama: 'Ir. Bambang W.', jabatan: 'Sekretaris', wilayah: 'Sukoharjo', status: 'Aktif' },
  { no: 4, nama: 'Drs. Agus Prabowo', jabatan: 'Bendahara', wilayah: 'Sukoharjo', status: 'Aktif' },
  { no: 5, nama: 'Ratna Dewi K.', jabatan: 'Kadiv Kaderisasi', wilayah: 'Sukoharjo', status: 'Aktif' },
  { no: 6, nama: 'H. Wahyu Pratama', jabatan: 'Kadiv Pemenangan', wilayah: 'Sukoharjo', status: 'Aktif' },
  { no: 7, nama: 'Sri Mulyani, S.Pd.', jabatan: 'Anggota DPRD', wilayah: 'Sukoharjo', status: 'Aktif' },
  { no: 8, nama: 'Eko Prasetyo, S.H.', jabatan: 'Anggota DPRD', wilayah: 'Sukoharjo', status: 'Non-aktif' },
];

export default function TableData() {
  const [search, setSearch] = useState('');
  const filtered = kaderData.filter((k) => k.nama.toLowerCase().includes(search.toLowerCase()) || k.wilayah.toLowerCase().includes(search.toLowerCase()));

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-abstract-table">
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="section-label">Data Kader</span>
          <h2 className="section-title text-3xl md:text-5xl text-white mt-3">Tabel Anggota</h2>
          <div className="gold-line mx-auto mt-5" />
        </div>

        <div className="fade-up max-w-md mx-auto mb-8">
          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Cari nama atau wilayah..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-golkar-gold/30 text-gray-800 text-sm placeholder:text-gray-400 focus:outline-none focus:border-golkar-dark-gold focus:ring-1 focus:ring-golkar-dark-gold/20 transition shadow-sm" />
          </div>
        </div>

        <div className="fade-up overflow-x-auto bg-white rounded-2xl shadow-md">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-golkar-yellow/20">
                <th className="text-left py-4 px-4 text-golkar-dark-gold font-semibold text-xs uppercase tracking-wider">No</th>
                <th className="text-left py-4 px-4 text-golkar-dark-gold font-semibold text-xs uppercase tracking-wider">Nama</th>
                <th className="text-left py-4 px-4 text-golkar-dark-gold font-semibold text-xs uppercase tracking-wider hidden md:table-cell">Jabatan</th>
                <th className="text-left py-4 px-4 text-golkar-dark-gold font-semibold text-xs uppercase tracking-wider hidden sm:table-cell">Wilayah</th>
                <th className="text-left py-4 px-4 text-golkar-dark-gold font-semibold text-xs uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((k) => (
                <tr key={k.no} className="border-b border-gray-100 hover:bg-golkar-yellow/5 transition">
                  <td className="py-3.5 px-4 text-gray-400">{k.no}</td>
                  <td className="py-3.5 px-4 text-gray-800 font-medium">{k.nama}</td>
                  <td className="py-3.5 px-4 text-gray-500 hidden md:table-cell">{k.jabatan}</td>
                  <td className="py-3.5 px-4 text-gray-500 hidden sm:table-cell">{k.wilayah}</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${k.status === 'Aktif' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-500'}`}>{k.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && <p className="text-center text-gray-400 py-8 text-sm">Tidak ada data ditemukan</p>}
        </div>
      </div>
    </section>
  );
}
