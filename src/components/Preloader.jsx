import { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Memulai proses fade out setelah 2 detik
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Menghapus komponen sepenuhnya setelah animasi fade out selesai
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2800); // 2000ms + 800ms durasi transisi

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-800 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background gradient elegan */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700] via-[#E6C200] to-[#DAA520]" />

      {/* Efek gelombang/cahaya halus di background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.4)_0%,transparent_50%)] animate-[spin_15s_linear_infinite]" />
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 mb-6 rounded-full overflow-hidden bg-white shadow-2xl flex items-center justify-center border-4 border-white animate-[scaleIn_0.8s_ease-out_forwards]">
          <img
            src="/public/img/golkarlogokntl.png"
            alt="Logo Partai Golkar"
            className="w-20 h-20 sm:w-28 sm:h-28 object-contain animate-[pulse_2s_infinite]"
          />
        </div>

        {/* Teks */}
        <div className="text-center overflow-hidden">
          <p className="font-[Montserrat] font-bold text-lg sm:text-xl text-[#001233] tracking-[0.3em] uppercase opacity-0 translate-y-4 animate-[slideUp_0.8s_ease-out_0.3s_forwards]">
            Dewan Pimpinan Daerah
          </p>
          <h1 className="font-[Montserrat] font-black text-3xl sm:text-5xl text-white tracking-widest mt-2 opacity-0 translate-y-4 animate-[slideUp_0.8s_ease-out_0.5s_forwards] drop-shadow-md">
            PARTAI GOLKAR
          </h1>
          <p className="font-[Inter] text-sm text-[#001233] tracking-[0.2em] uppercase mt-4 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
            Kabupaten Sukoharjo
          </p>
        </div>
      </div>

      {/* Custom Keyframes untuk Tailwind JIT */}
      <style>{`
        @keyframes scaleIn {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes slideUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
