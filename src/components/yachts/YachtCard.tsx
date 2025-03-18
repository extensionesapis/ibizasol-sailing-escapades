
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Anchor, Calendar, Navigation } from 'lucide-react';
import { YachtType } from './types';

interface YachtCardProps {
  yacht: YachtType;
  index: number;
}

const YachtCard: React.FC<YachtCardProps> = ({ yacht, index }) => {
  return (
    <div 
      className="animate-on-scroll"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full border-none rounded-xl">
        <div className="relative">
          <div className="h-72 overflow-hidden">
            <img
              src={yacht.imageUrl}
              alt={yacht.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              loading="lazy"
            />
          </div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-ocean-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            {yacht.price}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-24" />
        </div>
        <CardContent className="p-8 bg-white">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              {yacht.type === "Motor Yacht" && <Navigation className="h-5 w-5 text-ocean-600" />}
              {yacht.type === "Sailing Yacht" && <Anchor className="h-5 w-5 text-ocean-600" />}
              {yacht.type === "Catamaran" && <Calendar className="h-5 w-5 text-ocean-600" />}
              <div>
                <h3 className="text-2xl font-bold text-ocean-800">{yacht.name}</h3>
                <p className="text-ocean-600 text-sm font-medium">{yacht.type}</p>
              </div>
            </div>
            <p className="text-gray-600">{yacht.description}</p>
            <a
              href="#contact"
              className="mt-2 inline-block w-full bg-ocean-600 hover:bg-ocean-700 text-white py-3 px-4 rounded-full text-center font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Inquire Now
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default YachtCard;
