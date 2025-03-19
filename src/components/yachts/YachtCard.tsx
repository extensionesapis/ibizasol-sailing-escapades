
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Anchor, Calendar, Navigation, Users, Ruler, Wind } from 'lucide-react';
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
      <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full border-none rounded-xl">
        <div className="relative">
          <div className="h-72 overflow-hidden">
            <img
              src={yacht.imageUrl}
              alt={yacht.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-ocean-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            {yacht.price}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-32" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-2xl font-semibold tracking-tight">{yacht.name}</h3>
            <p className="text-white/80 text-sm">{yacht.type}</p>
          </div>
        </div>
        <CardContent className="p-6 bg-white">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Ruler className="h-4 w-4 text-ocean-600" />
                <span>10.5m Length</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-ocean-600" />
                <span>Up to 8 Guests</span>
              </div>
              <div className="flex items-center gap-2">
                {yacht.type === "Motor Yacht" && <Navigation className="h-4 w-4 text-ocean-600" />}
                {yacht.type === "Sailing Yacht" && <Wind className="h-4 w-4 text-ocean-600" />}
                {yacht.type === "Catamaran" && <Anchor className="h-4 w-4 text-ocean-600" />}
                <span>{yacht.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-ocean-600" />
                <span>Available Now</span>
              </div>
            </div>
            <p className="text-gray-600 line-clamp-2">{yacht.description}</p>
            <a
              href="#contact"
              className="mt-2 inline-block w-full bg-ocean-600 hover:bg-ocean-700 text-white py-3 px-4 rounded-lg text-center font-medium transition-colors shadow-md hover:shadow-lg"
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
