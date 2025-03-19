
import React from 'react';
import { useLanguage } from '@/hooks/use-language';

interface HeroContentProps {
  texts: {
    title: Record<string, string>;
    subtitle: Record<string, string>;
  };
}

const HeroContent: React.FC<HeroContentProps> = ({ texts }) => {
  const { language } = useLanguage();
  
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight text-shadow animate-fade-in">
        {texts.title[language]}
      </h1>
      <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {texts.subtitle[language]}
      </p>
    </div>
  );
};

export default HeroContent;
