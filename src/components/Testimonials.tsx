import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

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
    <section className="py-24 bg-white text-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-turquoise-500 text-sm font-medium mb-4">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            What Our <span className="text-turquoise-500">Clients</span> Say
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Discover why our guests keep coming back for unforgettable Mediterranean experiences
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -left-5 md:-left-12 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={prevSlide}
              className="group bg-white shadow-lg hover:shadow-xl text-slate-700 rounded-full p-3 transition-all duration-300 border border-gray-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-7 h-7 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="absolute -right-5 md:-right-12 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={nextSlide}
              className="group bg-white shadow-lg hover:shadow-xl text-slate-700 rounded-full p-3 transition-all duration-300 border border-gray-100"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-7 h-7 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div 
            ref={sliderRef}
            className="overflow-hidden rounded-3xl"
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
                  <Card className="border border-gray-100 shadow-md overflow-hidden bg-white">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden">
                        <div className="md:w-2/5 bg-gray-50 p-8 md:p-10 flex flex-col justify-center items-center text-center relative">
                          <div className="relative z-10 mb-8 mt-4">
                            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto mb-6 transform transition-transform duration-500 hover:scale-105">
                              <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h4 className="text-2xl font-bold mb-1 text-slate-800">{testimonial.name}</h4>
                            <p className="text-sm text-slate-500 mb-4">{testimonial.location}</p>
                            <div className="flex justify-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={cn(
                                    "w-5 h-5", 
                                    i < testimonial.rating 
                                      ? "fill-turquoise-400 text-turquoise-400" 
                                      : "text-gray-300"
                                  )}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="md:w-3/5 p-8 md:p-12 bg-white flex items-center">
                          <div>
                            <Quote className="w-12 h-12 mb-6 text-turquoise-100 rotate-180" />
                            <p className="text-lg leading-relaxed mb-8 text-slate-700">
                              "{testimonial.text}"
                            </p>
                            <div className="w-10 h-1 bg-turquoise-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
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
                  "h-2 rounded-full transition-all duration-300",
                  index === currentSlide 
                    ? "w-8 bg-turquoise-400" 
                    : "w-2 bg-gray-200 hover:bg-gray-300"
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
