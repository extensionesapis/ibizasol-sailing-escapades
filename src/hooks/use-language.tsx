
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type LanguageType = 'es' | 'en';
type LanguageContextType = {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string, translations: Record<string, Record<LanguageType, string>>) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  setLanguage: () => {},
  t: () => '',
});

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageType>('es');

  useEffect(() => {
    // Get language from localStorage on initial load
    const storedLanguage = localStorage.getItem('language') as LanguageType;
    if (storedLanguage) {
      setLanguageState(storedLanguage);
    }

    // Listen for custom language change events
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguageState(event.detail as LanguageType);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  const setLanguage = (lang: LanguageType) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    // Dispatch custom event to notify other components
    const event = new CustomEvent('languageChange', { detail: lang });
    window.dispatchEvent(event);
  };

  // Translation helper function
  const t = (key: string, translations: Record<string, Record<LanguageType, string>>): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key; // Fallback to key if translation is missing
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default useLanguage;
