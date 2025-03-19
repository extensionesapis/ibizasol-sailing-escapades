
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Martinez",
    location: "New York, USA",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Our day charter aboard the Azure Horizon was the highlight of our Ibiza vacation. The captain and crew were exceptional, taking us to the most beautiful coves and ensuring we had everything we needed. The yacht was immaculate and luxurious. Can't wait to book again next summer!"
  },
  {
    id: 2,
    name: "James Wilson",
    location: "London, UK",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "We celebrated our anniversary with a sunset cruise, and it was absolutely magical. The attention to detail was impressive - from the champagne selection to the carefully planned route to catch the best views. IbizaSolCharter truly delivers a premium experience."
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Our family chartered a catamaran for a week-long exploration of Ibiza and Formentera. The itinerary was perfectly balanced between exciting destinations and relaxing anchoring spots. The crew was amazing with our children, and the chef prepared incredible meals daily."
  },
  {
    id: 4,
    name: "Thomas Bergmann",
    location: "Berlin, Germany",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 4,
    text: "Professional from booking to disembarkation. We had specific requests for our corporate event, and the team accommodated everything perfectly. The yacht was spacious and elegant - exactly what we needed to impress our clients."
  },
  {
    id: 5,
    name: "Olivia Chen",
    location: "Singapore",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    rating: 5,
    text: "The Formentera day trip exceeded all expectations. The captain knew exactly where to take us to avoid crowds while showing us the most beautiful beaches. The water toys were a bonus that made the day even more enjoyable. Absolutely worth every penny!"
  },
];

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentSlide * sliderRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  return (
    <section className="py-20 bg-white text-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            What Our <span className="text-turquoise-400">Guests</span> Say
          </h2>
          <p className="text-lg text-slate-600">
            Discover why our guests keep coming back for unforgettable Mediterranean experiences
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prevSlide}
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-turquoise-50 text-turquoise-500 rounded-full p-3 transition-all duration-300 focus:outline-none shadow-md hover:shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-turquoise-50 text-turquoise-500 rounded-full p-3 transition-all duration-300 focus:outline-none shadow-md hover:shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            ref={sliderRef}
            className="overflow-hidden rounded-2xl shadow-xl"
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full"
                >
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="md:w-1/3 bg-gradient-to-br from-turquoise-100 to-turquoise-50 p-8 flex flex-col items-center justify-center text-center relative">
                        <div className="absolute top-6 left-6 opacity-20">
                          <Quote className="text-turquoise-500 w-16 h-16" />
                        </div>
                        
                        <Avatar className="w-24 h-24 border-4 border-white shadow-lg mb-6 group-hover:scale-105 transition-transform duration-300">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-turquoise-200 text-turquoise-700 text-xl font-bold">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <h4 className="text-xl font-bold mb-1 text-slate-800">{testimonial.name}</h4>
                        <p className="text-sm text-slate-500 mb-4">{testimonial.location}</p>
                        
                        <div className="flex justify-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "w-5 h-5", 
                                i < testimonial.rating 
                                  ? "fill-turquoise-400 text-turquoise-400" 
                                  : "text-gray-200"
                              )}
                            />
                          ))}
                        </div>
                        
                        <Separator className="w-16 bg-turquoise-200 h-0.5 mt-2" />
                      </div>
                      
                      <div className="md:w-2/3 p-10 bg-white flex items-center">
                        <div>
                          <Quote className="w-10 h-10 text-turquoise-100 mb-4 rotate-180" />
                          <p className="text-lg leading-relaxed text-slate-700 italic mb-6">
                            {testimonial.text}
                          </p>
                          <div className="flex items-center">
                            <div className="h-1 w-12 bg-gradient-to-r from-turquoise-400 to-turquoise-200 rounded-full" />
                            <div className="h-1 w-1 bg-turquoise-300 rounded-full ml-1" />
                            <div className="h-1 w-1 bg-turquoise-200 rounded-full ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setCurrentSlide(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={cn(
                  "transition-all duration-300 rounded-full",
                  index === currentSlide 
                    ? "w-10 h-2 bg-gradient-to-r from-turquoise-500 to-turquoise-300" 
                    : "w-2 h-2 bg-gray-200 hover:bg-turquoise-200"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
