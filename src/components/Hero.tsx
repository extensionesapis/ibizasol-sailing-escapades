import React, { useEffect, useRef } from 'react';
import HeroContent from './hero/HeroContent';
import SearchForm from './hero/SearchForm';
import ScrollIndicator from './hero/ScrollIndicator';
import { heroTexts } from './hero/hero-translations';
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
  return <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div ref={heroRef} className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: "url('/lovable-uploads/f44293e7-da37-4e6c-a85f-d9a87ee61074.png')",
      zIndex: -1
    }} />
      <div className="absolute inset-0 bg-gradient-to-r from-turquoise-900/70 to-turquoise-500/30 opacity-70" />
      
      <div className="relative h-screen flex items-center justify-center px-4 bg-teal-700">
        <div className="flex flex-col space-y-8 w-full">
          <HeroContent texts={heroTexts} />
          <SearchForm texts={heroTexts} />
        </div>
      </div>
      
      <ScrollIndicator />
    </section>;
};
export default Hero;