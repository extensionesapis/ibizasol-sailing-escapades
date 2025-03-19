
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Anchor, Calendar, Navigation, Users, Ruler, Wind } from 'lucide-react';
import { YachtType } from './types';

interface YachtCardProps {
  yacht: YachtType;
  index: number;
}

const YachtCard: React.FC<YachtCardProps> = ({ yacht, index }) => {
  // Get the language from localStorage
  const language = localStorage.getItem('language') as 'es' | 'en' || 'es';
  
  // Translations
  const texts = {
    length: {
      es: "Longitud",
      en: "Length"
    },
    guests: {
      es: "Hasta 8 invitados",
      en: "Up to 8 Guests"
    },
    available: {
      es: "Disponible Ahora",
      en: "Available Now"
    },
    inquire: {
      es: "Solicitar Información",
      en: "Inquire Now"
    }
  };
  
  // Yacht type translations
  const yachtTypeTranslations = {
    "Motor Yacht": {
      es: "Yate a Motor",
      en: "Motor Yacht"
    },
    "Sailing Yacht": {
      es: "Velero",
      en: "Sailing Yacht"
    },
    "Catamaran": {
      es: "Catamarán",
      en: "Catamaran"
    }
  };

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
          <div className="absolute top-4 right-4 bg-turquoise-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            {yacht.price}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-32" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-2xl font-semibold tracking-tight">{yacht.name}</h3>
            <p className="text-white/80 text-sm">{yachtTypeTranslations[yacht.type][language]}</p>
          </div>
        </div>
        <CardContent className="p-6 bg-white">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Ruler className="h-4 w-4 text-turquoise-600" />
                <span>10.5m {texts.length[language]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-turquoise-600" />
                <span>{texts.guests[language]}</span>
              </div>
              <div className="flex items-center gap-2">
                {yacht.type === "Motor Yacht" && <Navigation className="h-4 w-4 text-turquoise-600" />}
                {yacht.type === "Sailing Yacht" && <Wind className="h-4 w-4 text-turquoise-600" />}
                {yacht.type === "Catamaran" && <Anchor className="h-4 w-4 text-turquoise-600" />}
                <span>{yachtTypeTranslations[yacht.type][language]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-turquoise-600" />
                <span>{texts.available[language]}</span>
              </div>
            </div>
            <p className="text-gray-600 line-clamp-2">{yacht.description}</p>
            <a
              href="#contact"
              className="mt-2 inline-block w-full bg-turquoise-500 hover:bg-turquoise-600 text-white py-3 px-4 rounded-lg text-center font-medium transition-colors shadow-md hover:shadow-lg"
            >
              {texts.inquire[language]}
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default YachtCard;
