
import React from 'react';
import YachtCard from './yachts/YachtCard';
import FleetHeader from './yachts/FleetHeader';
import { yachtData } from './yachts/yachtData';
import { useLanguage } from '@/hooks/use-language';

const Fleet: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <section id="fleet" className="bg-gradient-to-b from-white to-blue-50 px-4 py-16 md:py-20">
      <div className="container mx-auto">
        <FleetHeader />
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {yachtData.map((yacht, index) => (
            <YachtCard 
              key={yacht.id} 
              yacht={yacht} 
              index={index}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
