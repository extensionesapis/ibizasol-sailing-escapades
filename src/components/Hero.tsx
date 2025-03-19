import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownCircle, Calendar, Users, Anchor, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';
import { useLanguage } from '@/hooks/use-language';

const texts = {
  title: {
    es: 'Alquiler de Yates de Lujo en Ibiza',
    en: 'Luxury Yacht Charters in Ibiza'
  },
  subtitle: {
    es: 'Experimente el Mediterráneo con un lujo sin igual. Descubra calas escondidas, playas vírgenes y atardeceres impresionantes a bordo de nuestra flota premium.',
    en: 'Experience the Mediterranean in unparalleled luxury. Discover hidden coves, pristine beaches, and breathtaking sunsets aboard our premium fleet.'
  },
  date: {
    es: 'Fecha',
    en: 'Date'
  },
  selectDate: {
    es: 'Seleccionar fecha',
    en: 'Select date'
  },
  guests: {
    es: 'Personas',
    en: 'Guests'
  },
  numGuests: {
    es: 'Número de personas',
    en: 'Number of guests'
  },
  people: {
    es: 'personas',
    en: 'people'
  },
  boatType: {
    es: 'Tipo de barco',
    en: 'Boat type'
  },
  selectType: {
    es: 'Seleccionar tipo',
    en: 'Select type'
  },
  any: {
    es: 'Cualquiera',
    en: 'Any'
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
  search: {
    es: 'Buscar',
    en: 'Search'
  }
};

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [date, setDate] = useState<Date>();
  const [guests, setGuests] = useState<string>('2');
  const [yachtType, setYachtType] = useState<string>('any');
  const { language } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const translateY = scrollPosition * 0.5; // Parallax effect
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ date, guests, yachtType });
    // Booking logic would go here
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div
        ref={heroRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/f44293e7-da37-4e6c-a85f-d9a87ee61074.png')",
          zIndex: -1,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-turquoise-900/70 to-turquoise-500/30 opacity-70" />
      
      <div className="relative h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight text-shadow animate-fade-in">
            {texts.title[language]}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {texts.subtitle[language]}
          </p>
          
          <div className="bg-white/20 backdrop-blur-md p-4 md:p-8 rounded-2xl border border-white/30 max-w-4xl mx-auto animate-fade-in shadow-lg" style={{ animationDelay: '0.4s' }}>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
              <div className="space-y-2 md:col-span-3">
                <label className="text-white text-sm font-medium">
                  {texts.date[language]}
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full bg-white/90 border-0 text-turquoise-800 justify-between hover:bg-white group">
                      {date ? format(date, 'PPP', { locale: language === 'es' ? es : enUS }) : 
                        texts.selectDate[language]}
                      <Calendar className="ml-2 h-4 w-4 text-turquoise-500 group-hover:text-turquoise-600" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2 md:col-span-3">
                <label className="text-white text-sm font-medium">
                  {texts.guests[language]}
                </label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="w-full bg-white/90 border-0 text-turquoise-800 hover:bg-white">
                    <SelectValue placeholder={texts.numGuests[language]} />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {texts.people[language]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2 md:col-span-3">
                <label className="text-white text-sm font-medium">
                  {texts.boatType[language]}
                </label>
                <Select value={yachtType} onValueChange={setYachtType}>
                  <SelectTrigger className="w-full bg-white/90 border-0 text-turquoise-800 hover:bg-white">
                    <SelectValue placeholder={texts.selectType[language]} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">{texts.any[language]}</SelectItem>
                    <SelectItem value="motor">{texts.motorYacht[language]}</SelectItem>
                    <SelectItem value="sailing">{texts.sailingYacht[language]}</SelectItem>
                    <SelectItem value="catamaran">{texts.catamaran[language]}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-3 flex items-end">
                <Button 
                  type="submit" 
                  className="w-full bg-turquoise-600 hover:bg-turquoise-700 text-white font-medium shadow-md hover:shadow-lg h-10 flex items-center justify-center gap-2 backdrop-blur-none border border-turquoise-400/30">
                  <Search className="w-4 h-4" />
                  {texts.search[language]}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#fleet" aria-label="Scroll down">
          <ArrowDownCircle className="w-10 h-10 opacity-80 hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
