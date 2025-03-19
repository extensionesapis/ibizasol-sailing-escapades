
import React from 'react';
import { Sunset, Map, GlassWater, PartyPopper, Sailboat, Route } from 'lucide-react';

interface Activity {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  color: string;
}

const activities: Activity[] = [
  {
    title: "Day Cruises",
    description: "Explore the stunning coastline of Ibiza and discover hidden coves and pristine beaches only accessible by boat.",
    icon: Sailboat,
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-turquoise-600 to-turquoise-400",
  },
  {
    title: "Sunset Tours",
    description: "Experience the legendary Ibiza sunset from the water, with champagne and canapés as the sky transforms into breathtaking colors.",
    icon: Sunset,
    image: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-sunset-500 to-sunset-300",
  },
  {
    title: "Formentera Trips",
    description: "Cruise to the paradise island of Formentera with its Caribbean-like turquoise waters and white sand beaches.",
    icon: Map,
    image: "https://images.unsplash.com/photo-1586500036065-8d2414e29243?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-cyan-500 to-cyan-300",
  },
  {
    title: "Water Sports",
    description: "Enjoy a range of water activities including jet skis, paddleboarding, snorkeling, and wakeboarding with all equipment provided.",
    icon: GlassWater,
    image: "https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-blue-500 to-blue-300",
  },
  {
    title: "Private Events",
    description: "Host your special occasion on the water, from intimate celebrations to corporate events, with bespoke catering options.",
    icon: PartyPopper,
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-purple-500 to-purple-300",
  },
  {
    title: "Custom Itineraries",
    description: "Create your dream sailing experience with a fully customized itinerary tailored to your preferences.",
    icon: Route,
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-green-600 to-green-400",
  },
];

const Activities: React.FC = () => {
  // Get the language from localStorage
  const language = localStorage.getItem('language') as 'es' | 'en' || 'es';
  
  // Translations
  const texts = {
    title: {
      es: 'Experiencias Inolvidables',
      en: 'Unforgettable Experiences'
    },
    subtitle: {
      es: 'Descubre la magia de las aguas de Ibiza y Formentera a través de nuestras experiencias seleccionadas, cada una diseñada para crear recuerdos que duran toda la vida.',
      en: 'Discover the magic of Ibiza and Formentera\'s waters through our curated experiences, each designed to create memories that last a lifetime.'
    },
    learnMore: {
      es: 'Saber más',
      en: 'Learn more'
    }
  };
  
  // Activity translations
  const activityTranslations = {
    "Day Cruises": {
      es: "Cruceros Diurnos",
      en: "Day Cruises"
    },
    "Sunset Tours": {
      es: "Tours al Atardecer",
      en: "Sunset Tours"
    },
    "Formentera Trips": {
      es: "Viajes a Formentera",
      en: "Formentera Trips"
    },
    "Water Sports": {
      es: "Deportes Acuáticos",
      en: "Water Sports"
    },
    "Private Events": {
      es: "Eventos Privados",
      en: "Private Events"
    },
    "Custom Itineraries": {
      es: "Itinerarios Personalizados",
      en: "Custom Itineraries"
    }
  };
  
  const descriptionTranslations = {
    "Explore the stunning coastline of Ibiza and discover hidden coves and pristine beaches only accessible by boat.": {
      es: "Explora la impresionante costa de Ibiza y descubre calas escondidas y playas vírgenes solo accesibles en barco.",
      en: "Explore the stunning coastline of Ibiza and discover hidden coves and pristine beaches only accessible by boat."
    },
    "Experience the legendary Ibiza sunset from the water, with champagne and canapés as the sky transforms into breathtaking colors.": {
      es: "Experimenta el legendario atardecer de Ibiza desde el agua, con champán y canapés mientras el cielo se transforma en colores impresionantes.",
      en: "Experience the legendary Ibiza sunset from the water, with champagne and canapés as the sky transforms into breathtaking colors."
    },
    "Cruise to the paradise island of Formentera with its Caribbean-like turquoise waters and white sand beaches.": {
      es: "Navega hasta la isla paradisíaca de Formentera con sus aguas turquesas tipo Caribe y playas de arena blanca.",
      en: "Cruise to the paradise island of Formentera with its Caribbean-like turquoise waters and white sand beaches."
    },
    "Enjoy a range of water activities including jet skis, paddleboarding, snorkeling, and wakeboarding with all equipment provided.": {
      es: "Disfruta de una variedad de actividades acuáticas como motos de agua, paddleboard, snorkel y wakeboard con todo el equipo incluido.",
      en: "Enjoy a range of water activities including jet skis, paddleboarding, snorkeling, and wakeboarding with all equipment provided."
    },
    "Host your special occasion on the water, from intimate celebrations to corporate events, with bespoke catering options.": {
      es: "Celebra tu ocasión especial en el agua, desde celebraciones íntimas hasta eventos corporativos, con opciones de catering a medida.",
      en: "Host your special occasion on the water, from intimate celebrations to corporate events, with bespoke catering options."
    },
    "Create your dream sailing experience with a fully customized itinerary tailored to your preferences.": {
      es: "Crea tu experiencia de navegación soñada con un itinerario totalmente personalizado según tus preferencias.",
      en: "Create your dream sailing experience with a fully customized itinerary tailored to your preferences."
    }
  };

  return (
    <section id="experiences" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-turquoise-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-turquoise-800 mb-4">
            {texts.title[language]}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {texts.subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="relative group rounded-xl overflow-hidden shadow-lg h-96 bg-white transition-all duration-300 hover:shadow-xl animate-fade-in transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activityTranslations[activity.title][language]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-90" />
              </div>
              
              <div className="absolute w-full bottom-0 p-6 text-white z-10">
                <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center bg-gradient-to-r ${activity.color} shadow-md`}>
                  <activity.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-turquoise-200 transition-colors">
                  {activityTranslations[activity.title][language]}
                </h3>
                <p className="text-white/90 mb-5 transition-opacity group-hover:opacity-100">
                  {descriptionTranslations[activity.description][language]}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-medium text-white group-hover:text-turquoise-200 transition-colors"
                >
                  {texts.learnMore[language]}
                  <svg
                    className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
