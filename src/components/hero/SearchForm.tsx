
import React, { useState } from 'react';
import { Calendar as CalendarIcon, Users, Anchor, Search } from 'lucide-react';
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
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';
import { useLanguage } from '@/hooks/use-language';

interface SearchFormProps {
  texts: {
    date: Record<string, string>;
    selectDate: Record<string, string>;
    guests: Record<string, string>;
    numGuests: Record<string, string>;
    people: Record<string, string>;
    boatType: Record<string, string>;
    selectType: Record<string, string>;
    any: Record<string, string>;
    motorYacht: Record<string, string>;
    sailingYacht: Record<string, string>;
    catamaran: Record<string, string>;
    search: Record<string, string>;
  };
}

const SearchForm: React.FC<SearchFormProps> = ({ texts }) => {
  const [date, setDate] = useState<Date>();
  const [guests, setGuests] = useState<string>('2');
  const [yachtType, setYachtType] = useState<string>('any');
  const { language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ date, guests, yachtType });
    // Booking logic would go here
  };

  return (
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
                <CalendarIcon className="ml-2 h-4 w-4 text-turquoise-500 group-hover:text-turquoise-600" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white" align="start">
              <Calendar
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
  );
};

export default SearchForm;
