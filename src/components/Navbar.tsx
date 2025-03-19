
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Anchor, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'es' | 'en'>('es');

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

  const handleLanguageChange = (lang: 'es' | 'en') => {
    setLanguage(lang);
    // Store the language preference in localStorage
    localStorage.setItem('language', lang);
    
    // Force re-render of all components by dispatching a custom event
    // instead of reloading the page
    const event = new CustomEvent('languageChange', { detail: lang });
    window.dispatchEvent(event);
  };

  // Check for stored language preference on component mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as 'es' | 'en';
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  return (
    <div className="w-full flex justify-center fixed top-0 left-0 z-50 pt-4 md:pt-6 transition-all duration-300">
      <header
        className={cn(
          'w-11/12 max-w-6xl rounded-full py-3 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white/30 backdrop-blur-sm border border-white/30'
        )}
      >
        <div className="px-4 md:px-6 mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-1 md:gap-2 z-10">
            <Anchor className={cn("w-6 h-6 md:w-8 md:h-8", isScrolled ? "text-turquoise-600" : "text-white")} />
            <span className={cn("text-xl md:text-2xl font-bold tracking-tight", 
              isScrolled ? "text-turquoise-800" : "text-white")}>
              IbizaSol<span className={isScrolled ? "text-turquoise-500" : "text-turquoise-300"}>Charter</span>
            </span>
          </a>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
            {['Home', 'Fleet', 'Experiences', 'About', 'Gallery'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={cn(
                  'font-medium transition-colors duration-200 hover:text-turquoise-400 link-underline',
                  isScrolled ? 'text-turquoise-800' : 'text-white'
                )}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right-aligned items */}
          <div className="flex items-center space-x-2 md:space-x-4 z-10">
            {/* Language Selector Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                "flex items-center gap-1 px-2 py-1 md:px-3 md:py-1 rounded-md transition-colors",
                isScrolled ? "text-turquoise-800 hover:bg-turquoise-100" : "text-white hover:bg-white/20"
              )}>
                <Globe className="h-4 w-4" />
                <span>{language === 'es' ? 'ES' : 'EN'}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-md">
                <DropdownMenuItem onClick={() => handleLanguageChange('es')} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    <span className="text-lg mr-1">🇪🇸</span>
                    <span>Español</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('en')} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    <span className="text-lg mr-1">🇬🇧</span>
                    <span>English</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="#contact"
              className={cn(
                'hidden sm:inline-block px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md',
                isScrolled
                  ? 'bg-turquoise-500 hover:bg-turquoise-600 text-white'
                  : 'bg-white/60 text-turquoise-800 hover:bg-white/70 border border-white/50'
              )}
            >
              {language === 'es' ? 'Reservar' : 'Book Now'}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={cn(
              "md:hidden transition-colors z-10", 
              isScrolled ? "text-turquoise-800 hover:text-turquoise-600" : "text-white hover:text-turquoise-300"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Improved Styling */}
        <div
          className={cn(
            'md:hidden fixed inset-0 bg-turquoise-900/95 backdrop-blur-md transition-all duration-300 ease-in-out z-40',
            isMobileMenuOpen 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          )}
        >
          <div className="h-full flex flex-col items-center justify-center p-6">
            <nav className="flex flex-col items-center space-y-6 w-full">
              {['Home', 'Fleet', 'Experiences', 'About', 'Gallery', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-xl font-medium hover:text-turquoise-300 transition-colors w-full text-center py-3 border-b border-turquoise-700/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              
              {/* Language Selector for Mobile - Improved */}
              <div className="flex gap-4 mt-4 w-full justify-center">
                <button 
                  onClick={() => handleLanguageChange('es')} 
                  className={`flex items-center gap-1 px-4 py-2 rounded-md ${language === 'es' ? 'bg-white/20 text-turquoise-300' : 'text-white'}`}
                >
                  <span className="text-lg">🇪🇸</span>
                  <span>Español</span>
                </button>
                <button 
                  onClick={() => handleLanguageChange('en')} 
                  className={`flex items-center gap-1 px-4 py-2 rounded-md ${language === 'en' ? 'bg-white/20 text-turquoise-300' : 'text-white'}`}
                >
                  <span className="text-lg">🇬🇧</span>
                  <span>English</span>
                </button>
              </div>
              
              <a
                href="#contact"
                className="mt-8 px-8 py-3 bg-white text-turquoise-800 rounded-full font-medium hover:bg-opacity-90 transition-colors shadow-md w-full max-w-xs text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {language === 'es' ? 'Reservar' : 'Book Now'}
              </a>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
