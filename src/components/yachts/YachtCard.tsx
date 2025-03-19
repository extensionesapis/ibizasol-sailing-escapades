
import React from 'react';
import { Yacht } from './types';
import { Anchor, Users, Clock, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

interface YachtCardProps {
  yacht: Yacht;
  index: number;
  language?: 'es' | 'en';
}

const YachtCard: React.FC<YachtCardProps> = ({ yacht, index, language = 'es' }) => {
  // Translations
  const texts = {
    guests: {
      es: 'Invitados',
      en: 'Guests'
    },
    duration: {
      es: 'Duración',
      en: 'Duration'
    },
    viewTour: {
      es: 'Ver detalles',
      en: 'View details'
    }
  };

  return (
    <div 
      className="animate-on-scroll group relative h-[450px] w-full overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:shadow-xl"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute inset-0 h-[250px] overflow-hidden">
        <img 
          src={yacht.imageUrl} 
          alt={yacht.name} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 flex h-[250px] w-full flex-col justify-between rounded-t-3xl bg-white p-6 transition-transform duration-500 group-hover:translate-y-[-10px]">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-800">{yacht.name}</h3>
            <span className="rounded-full bg-turquoise-100 px-3 py-1 text-sm font-semibold text-turquoise-800">
              {yacht.price}
            </span>
          </div>
          
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-turquoise-600" />
              <span className="text-sm text-gray-600">{yacht.capacity} {texts.guests[language]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-turquoise-600" />
              <span className="text-sm text-gray-600">{yacht.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-turquoise-600" />
              <span className="text-sm text-gray-600 truncate">{yacht.route?.split('-')[1]}</span>
            </div>
          </div>
          
          <p className="mt-4 line-clamp-2 text-sm text-gray-600">
            {language === 'es' ? yacht.descriptionEs || yacht.description : yacht.description}
          </p>
        </div>
        
        <Link to={`/tour/${yacht.id}`} className="w-full">
          <Button variant="default" className="mt-4 w-full bg-turquoise-600 hover:bg-turquoise-700">
            {texts.viewTour[language]}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default YachtCard;
