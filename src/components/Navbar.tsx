
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Anchor } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-3'
          : 'bg-gradient-to-b from-black/50 to-transparent py-6'
      )}
    >
      <div className="container px-4 md:px-6 mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 z-10">
          <Anchor className={cn("w-8 h-8", isScrolled ? "text-ocean-700" : "text-white")} />
          <span className={cn("text-2xl font-bold tracking-tight", 
            isScrolled ? "text-ocean-800" : "text-white")}>
            IbizaSol<span className={isScrolled ? "text-ocean-600" : "text-ocean-300"}>Charter</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Fleet', 'Experiences', 'About', 'Gallery', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                'font-medium transition-colors duration-200 hover:text-ocean-400 link-underline',
                isScrolled ? 'text-ocean-800' : 'text-white'
              )}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className={cn(
              'px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md',
              isScrolled
                ? 'bg-ocean-600 hover:bg-ocean-700 text-white'
                : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
            )}
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className={cn(
            "md:hidden transition-colors z-10", 
            isScrolled ? "text-ocean-800 hover:text-ocean-600" : "text-white hover:text-ocean-300"
          )}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 bg-ocean-900/95 backdrop-blur-md transition-all duration-300 ease-in-out z-40 flex flex-col items-center justify-center',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <nav className="flex flex-col items-center space-y-6 p-8">
          {['Home', 'Fleet', 'Experiences', 'About', 'Gallery', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white text-xl font-medium hover:text-ocean-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 px-8 py-3 bg-white text-ocean-800 rounded-full font-medium hover:bg-opacity-90 transition-colors shadow-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
