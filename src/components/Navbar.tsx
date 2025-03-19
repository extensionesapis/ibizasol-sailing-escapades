
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/hooks/use-language';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

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

  return (
    <div className="w-full flex justify-center fixed top-0 left-0 z-50 pt-4 md:pt-6 transition-all duration-300">
      <header
        className={cn(
          'w-11/12 max-w-6xl rounded-full transition-colors duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white/30 backdrop-blur-sm border border-white/30'
        )}
        style={{ 
          height: '90px', // Increased height for larger logo
          minHeight: '90px' // Ensure it never gets smaller
        }}
      >
        <div className="px-4 md:px-6 mx-auto flex items-center justify-between h-full">
          {/* Logo - Even larger now */}
          <a href="/" className="flex items-center z-10">
            {isScrolled ? (
              <img 
                src="/lovable-uploads/588c8f79-eeee-47ce-9e79-a289d2c9dcfb.png" 
                alt="IbizaSol Charter Logo - Black" 
                className="h-20 md:h-24 w-auto" // Significantly larger logo
              />
            ) : (
              <img 
                src="/lovable-uploads/bf6342cc-812b-4a0a-b7e8-93eae05c8c0e.png" 
                alt="IbizaSol Charter Logo - White" 
                className="h-20 md:h-24 w-auto" // Significantly larger logo
              />
            )}
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

          {/* Right-aligned items with fixed width to prevent layout shift */}
          <div className="flex items-center z-10" style={{ width: '220px', justifyContent: 'flex-end' }}>
            {/* Language Selector Dropdown - Fixed width */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                "flex items-center gap-1 px-3 py-2 rounded-md transition-colors w-24 justify-center mr-3",
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

            {/* Book Now button - Fixed width */}
            <a
              href="#contact"
              className={cn(
                'hidden sm:flex items-center justify-center px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md w-36',
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
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu - Fixed and improved */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-turquoise-900/95 backdrop-blur-md z-40 flex flex-col justify-start pt-24"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex flex-col items-center p-6 overflow-y-auto max-h-[100vh]" onClick={(e) => e.stopPropagation()}>
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/588c8f79-eeee-47ce-9e79-a289d2c9dcfb.png" 
                  alt="IbizaSol Charter Logo" 
                  className="h-32 w-auto mx-auto" // Even larger logo in mobile menu
                />
              </div>
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
                <div className="flex gap-6 mt-4 w-full justify-center">
                  <button 
                    onClick={() => handleLanguageChange('es')} 
                    className={`flex items-center gap-2 px-5 py-3 rounded-md ${language === 'es' ? 'bg-white/20 text-turquoise-300' : 'text-white'}`}
                  >
                    <span className="text-xl">🇪🇸</span>
                    <span className="text-lg">Español</span>
                  </button>
                  <button 
                    onClick={() => handleLanguageChange('en')} 
                    className={`flex items-center gap-2 px-5 py-3 rounded-md ${language === 'en' ? 'bg-white/20 text-turquoise-300' : 'text-white'}`}
                  >
                    <span className="text-xl">🇬🇧</span>
                    <span className="text-lg">English</span>
                  </button>
                </div>
                
                <a
                  href="#contact"
                  className="mt-8 px-8 py-4 bg-white text-turquoise-800 rounded-full font-medium hover:bg-opacity-90 transition-colors shadow-md w-full max-w-xs text-center text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {language === 'es' ? 'Reservar' : 'Book Now'}
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
