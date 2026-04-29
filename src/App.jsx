import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import About from './components/About';
import Agenda from './components/Agenda';
import Program from './components/Program';
import Gallery from './components/Gallery';
import News from './components/News';
import Structure from './components/Structure';
import TableData from './components/TableData';
import MapSection from './components/MapSection';
import CTA from './components/CTA';
import Aspirasi from './components/Aspirasi';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-golkar-yellow">
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Agenda />
      <Program />
      <Gallery />
      <News />
      <Structure />
      <TableData />
      <MapSection />
      <CTA />
      <Aspirasi />
      <Footer />
    </div>
  );
}

export default App;
