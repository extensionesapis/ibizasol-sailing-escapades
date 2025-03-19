
import React from 'react';
import { Yacht } from './types';
import { Anchor, Users, Ruler, Waves } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    length: {
      es: 'Longitud',
      en: 'Length'
    },
    type: {
      es: 'Tipo',
      en: 'Type'
    },
    motorYacht: {
      es: 'Yate a Motor',
      en: 'Motor Yacht'
    },
    sailingYacht: {
      es: 'Velero',
      en: 'Sailing Yacht'
    },
    catamaran: {
      es: 'Catamarán',
      en: 'Catamaran'
    },
    learnMore: {
      es: 'Más información',
      en: 'Learn more'
    },
    feet: {
      es: 'pies',
      en: 'ft'
    }
  };

  // Translate yacht type
  const getYachtType = (type: string) => {
    switch (type.toLowerCase()) {
      case 'motor yacht':
        return texts.motorYacht[language];
      case 'sailing yacht':
        return texts.sailingYacht[language];
      case 'catamaran':
        return texts.catamaran[language];
      default:
        return type;
    }
  };

  return (
    <div 
      className="animate-on-scroll bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-52 overflow-hidden">
        <img 
          src={yacht.imageUrl} 
          alt={yacht.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex items-center">
          <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mr-3">
            <Anchor className="w-5 h-5 text-turquoise-600" />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">{yacht.name}</h3>
        </div>
      </div>
      
      <div className="p-5">
        <div className="grid grid-cols-3 gap-2 mb-5">
          <div className="flex flex-col items-center p-2 bg-turquoise-50 rounded-lg">
            <Users className="w-5 h-5 text-turquoise-600 mb-1" />
            <span className="text-xs text-gray-500">{texts.guests[language]}</span>
            <span className="font-semibold">{yacht.capacity}</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-turquoise-50 rounded-lg">
            <Ruler className="w-5 h-5 text-turquoise-600 mb-1" />
            <span className="text-xs text-gray-500">{texts.length[language]}</span>
            <span className="font-semibold">{yacht.length} {texts.feet[language]}</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-turquoise-50 rounded-lg">
            <Waves className="w-5 h-5 text-turquoise-600 mb-1" />
            <span className="text-xs text-gray-500">{texts.type[language]}</span>
            <span className="font-semibold text-xs">{getYachtType(yacht.type)}</span>
          </div>
        </div>
        
        <div className="text-sm text-gray-600 mb-5 line-clamp-3">
          {language === 'es' ? yacht.descriptionEs || yacht.description : yacht.description}
        </div>
        
        <a 
          href="#contact" 
          className={cn(
            "block w-full text-center py-3 rounded-lg font-medium transition-colors duration-200",
            "bg-turquoise-100 text-turquoise-800 hover:bg-turquoise-200"
          )}
        >
          {texts.learnMore[language]}
        </a>
      </div>
    </div>
  );
};

export default YachtCard;
