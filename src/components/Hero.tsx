
import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const translateY = scrollPosition * 0.5; // Parallax effect
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div
        ref={heroRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1565627464556-096cc6b0ab35?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          zIndex: -1,
        }}
      />
      <div className="absolute inset-0 bg-hero-gradient opacity-70" />
      
      <div className="relative h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight text-shadow animate-fade-in">
            Luxury Yacht Charters in Ibiza
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Experience the Mediterranean in unparalleled luxury. Discover hidden coves, pristine beaches, and breathtaking sunsets aboard our premium fleet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href="#fleet"
              className="px-8 py-3 bg-white text-ocean-800 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Our Fleet
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-ocean-600 text-white rounded-md font-medium hover:bg-ocean-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Your Experience
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#fleet" aria-label="Scroll down">
          <ArrowDownCircle className="w-10 h-10 opacity-80 hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
