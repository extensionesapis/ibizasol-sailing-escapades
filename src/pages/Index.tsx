
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Fleet from '@/components/Fleet';
import Activities from '@/components/Activities';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  
  useEffect(() => {
    // Optimized animation for elements that should animate when they enter the viewport
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // Only add the class if the element is intersecting and doesn't already have the class
          if (entry.isIntersecting && !entry.target.classList.contains('animate-active')) {
            entry.target.classList.add('animate-active');
          }
        });
      }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px' // Start animation slightly before element is in view
      });
      
      elements.forEach((element) => {
        observer.observe(element);
      });
      
      return () => {
        elements.forEach((element) => {
          observer.unobserve(element);
        });
      };
    };
    
    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      animateOnScroll();
    });

    // Check if language is set in localStorage
    const storedLanguage = localStorage.getItem('language') as 'es' | 'en';
    if (!storedLanguage) {
      localStorage.setItem('language', 'es'); // Default to Spanish
    } else {
      setLanguage(storedLanguage);
    }
    
    // Listen for language change events
    const handleLanguageChange = (event: CustomEvent) => {
      const newLanguage = event.detail as 'es' | 'en';
      setLanguage(newLanguage);
    };
    
    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Hero key={`hero-${language}`} />
      <Fleet key={`fleet-${language}`} />
      <Activities key={`activities-${language}`} />
      <About />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
