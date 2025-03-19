
import React from 'react';

const FleetHeader: React.FC = () => {
  // Get the language from localStorage
  const language = localStorage.getItem('language') as 'es' | 'en' || 'es';
  
  // Translations
  const texts = {
    title: {
      es: "Descubre Nuestra Flota de Lujo",
      en: "Discover Our Luxury Fleet"
    },
    subtitle: {
      es: "Desde elegantes yates a motor hasta clásicos veleros, explora nuestra cuidadosa selección de opciones premium de alquiler.",
      en: "From sleek motor yachts to classic sailing vessels, explore our carefully curated selection of premium charter options."
    }
  };

  return (
    <div className="text-center mb-16 animate-on-scroll">
      <h2 className="text-3xl md:text-4xl font-bold text-turquoise-800 mb-4">
        {texts.title[language]}
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        {texts.subtitle[language]}
      </p>
    </div>
  );
};

export default FleetHeader;
