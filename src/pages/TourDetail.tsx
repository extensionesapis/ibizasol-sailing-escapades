
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { yachtData } from '@/components/yachts/yachtData';
import { ArrowLeft, Users, Clock, Route, Anchor, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TourDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  
  const tour = yachtData.find(yacht => yacht.id.toString() === id);
  
  const texts = {
    notFound: {
      es: 'Tour no encontrado',
      en: 'Tour not found'
    },
    back: {
      es: 'Volver',
      en: 'Back'
    },
    highlights: {
      es: 'Destacados',
      en: 'Highlights'
    },
    details: {
      es: 'Detalles',
      en: 'Details'
    },
    capacity: {
      es: 'Capacidad',
      en: 'Capacity'
    },
    duration: {
      es: 'Duración',
      en: 'Duration'
    },
    route: {
      es: 'Ruta',
      en: 'Route'
    },
    boat: {
      es: 'Embarcación',
      en: 'Boat'
    },
    bookNow: {
      es: 'Reservar ahora',
      en: 'Book now'
    }
  };
  
  if (!tour) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">{texts.notFound[language]}</h1>
          <Link to="/" className="mt-4 inline-block">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {texts.back[language]}
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-[50vh] w-full">
          <img 
            src={tour.imageUrl} 
            alt={tour.name} 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
            <Link to="/#fleet" className="mb-4 inline-flex items-center text-white">
              <ArrowLeft className="mr-2 h-5 w-5" />
              {texts.back[language]}
            </Link>
            <h1 className="text-4xl font-bold text-white md:text-5xl">{tour.name}</h1>
            <div className="mt-2 inline-flex items-center rounded-full bg-turquoise-500/80 px-4 py-1 text-white backdrop-blur-sm">
              <span className="text-xl font-bold">{tour.price}</span>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700">
                  {language === 'es' ? tour.descriptionEs || tour.description : tour.description}
                </p>
              </div>
              
              {/* Highlights */}
              <div className="mt-12">
                <h2 className="flex items-center text-2xl font-bold text-gray-800">
                  <Sparkles className="mr-2 h-6 w-6 text-turquoise-500" />
                  {texts.highlights[language]}
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {(language === 'es' ? tour.highlightsEs : tour.highlights)?.map((highlight, index) => (
                    <div key={index} className="flex items-start rounded-lg bg-turquoise-50 p-4">
                      <div className="mr-4 rounded-full bg-turquoise-100 p-2">
                        <Sparkles className="h-5 w-5 text-turquoise-600" />
                      </div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="sticky top-24 rounded-xl bg-gray-50 p-6 shadow-sm">
                <h3 className="mb-6 text-xl font-bold text-gray-800">{texts.details[language]}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center border-b border-gray-200 pb-3">
                    <Users className="mr-3 h-5 w-5 text-turquoise-600" />
                    <div>
                      <span className="block text-sm text-gray-500">{texts.capacity[language]}</span>
                      <span className="font-medium">{tour.capacity} {texts.capacity[language] === 'Capacidad' ? 'personas' : 'people'}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-200 pb-3">
                    <Clock className="mr-3 h-5 w-5 text-turquoise-600" />
                    <div>
                      <span className="block text-sm text-gray-500">{texts.duration[language]}</span>
                      <span className="font-medium">{tour.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-200 pb-3">
                    <Route className="mr-3 h-5 w-5 text-turquoise-600" />
                    <div>
                      <span className="block text-sm text-gray-500">{texts.route[language]}</span>
                      <span className="font-medium">{tour.route}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center pb-3">
                    <Anchor className="mr-3 h-5 w-5 text-turquoise-600" />
                    <div>
                      <span className="block text-sm text-gray-500">{texts.boat[language]}</span>
                      <span className="font-medium">{tour.type}</span>
                    </div>
                  </div>
                </div>
                
                <a href="#contact">
                  <Button className="mt-6 w-full bg-turquoise-600 hover:bg-turquoise-700">
                    {texts.bookNow[language]}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TourDetail;
