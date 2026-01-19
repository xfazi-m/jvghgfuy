import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <CustomCursor />
      
      {/* Visual Accents */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-white/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-white/5 blur-[100px] rounded-full"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        {/* HERO SECTION */}
        <Hero />
        
        {/* PROJECTS SECTION */}
        <section id="projects" className="reveal-section px-6 md:px-12 py-32">
           <Projects />
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="reveal-section px-6 md:px-12 py-32">
           <Services />
        </section>
        
        {/* CONTACT & CTA SECTION */}
        <section id="contact" className="reveal-section py-40 px-6 md:px-12">
          <div className="glass-panel rounded-ext p-16 md:p-32 text-center max-w-7xl mx-auto border-white/5 hover:border-white/10 relative overflow-hidden">
            <span className="text-[10px] font-bold tracking-[1em] text-neutral-500 uppercase mb-12 block">Ready for Collaboration</span>
            <h2 className="text-6xl md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase italic mb-20">
              LETS SCALE <br /> <span className="text-neutral-600">YOUR VISION</span>.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:hello@xfazi.io"
                className="bg-white text-black px-20 py-8 rounded-full text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_20px_60px_rgba(255,255,255,0.1)]"
              >
                KONTAKT BEZPOŚREDNI
              </a>
              <button
                onClick={() => document.getElementById('chat-trigger')?.click()}
                className="border border-white/20 text-white px-20 py-8 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                KONSULTACJA AI
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;