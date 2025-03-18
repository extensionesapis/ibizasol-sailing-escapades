
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Fleet from '@/components/Fleet';
import Activities from '@/components/Activities';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
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
  }, []);
  
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <Fleet />
      <Activities />
      <About />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
