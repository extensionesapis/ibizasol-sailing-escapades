
import React from 'react';
import YachtCard from './yachts/YachtCard';
import FleetHeader from './yachts/FleetHeader';
import { yachtData } from './yachts/yachtData';

const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <FleetHeader />
        
        {/* Yacht grid with optimized animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {yachtData.map((yacht, index) => (
            <YachtCard 
              key={yacht.id} 
              yacht={yacht} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
