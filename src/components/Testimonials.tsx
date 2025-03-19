
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

  // Auto-scroll to current slide when it changes
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentSlide * sliderRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  return (
    <section className="py-24 bg-gradient-to-b from-ocean-900 via-ocean-800 to-ocean-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-turquoise-500/10 blur-[100px]"></div>
          <div className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full bg-ocean-400/10 blur-[120px]"></div>
          <div className="absolute top-[40%] right-[15%] w-64 h-64 rounded-full bg-sunset-300/5 blur-[80px]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-turquoise-400/20 to-turquoise-300/10 text-turquoise-200 text-sm font-medium mb-4 backdrop-blur-sm border border-turquoise-400/10">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise-300 to-turquoise-100">Clients</span> Say
          </h2>
          <p className="text-lg text-ocean-100/80 leading-relaxed">
            Discover why our guests keep coming back for unforgettable Mediterranean experiences
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Control buttons */}
          <div className="absolute -left-5 md:-left-12 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={prevSlide}
              className="group bg-black/10 hover:bg-black/20 text-white rounded-full p-3 transition-all duration-300 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-turquoise-400/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-7 h-7 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="absolute -right-5 md:-right-12 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={nextSlide}
              className="group bg-black/10 hover:bg-black/20 text-white rounded-full p-3 transition-all duration-300 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-turquoise-400/20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-7 h-7 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Testimonial slider */}
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
                  <Card className="border-0 shadow-2xl overflow-hidden bg-transparent">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden">
                        {/* Left section - Avatar and info */}
                        <div className="md:w-2/5 bg-gradient-to-br from-turquoise-900/60 to-ocean-900/60 p-8 md:p-10 flex flex-col justify-center items-center text-center relative backdrop-blur-md">
                          <div className="absolute top-0 left-0 w-full h-full opacity-20">
                            <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                              <path fill="#40CFC5" d="M41.9,-65.7C54.3,-58.5,64.2,-46.8,71.1,-33C78,-19.1,81.9,-3.1,78.8,11.1C75.7,25.4,65.6,37.9,53.9,48.4C42.3,58.9,29.1,67.3,13.9,71.7C-1.3,76.1,-18.5,76.5,-32.5,69.7C-46.5,62.9,-57.4,48.9,-65.2,33.7C-73,18.6,-77.7,2.3,-74.2,-12.1C-70.7,-26.5,-59,-39,-46,-49.1C-32.9,-59.3,-18.5,-67.1,-2.1,-64.2C14.2,-61.3,29.5,-72.9,41.9,-65.7Z" transform="translate(100 100)" />
                            </svg>
                          </div>
                          
                          <div className="relative z-10 mb-8 mt-4">
                            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/20 shadow-xl mx-auto mb-6 transform transition-transform duration-500 hover:scale-105">
                              <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h4 className="text-2xl font-bold mb-1">{testimonial.name}</h4>
                            <p className="text-sm text-ocean-100/80 mb-4">{testimonial.location}</p>
                            <div className="flex justify-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={cn(
                                    "w-5 h-5", 
                                    i < testimonial.rating 
                                      ? "fill-sand-400 text-sand-400" 
                                      : "text-gray-500/30"
                                  )}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Right section - Quote */}
                        <div className="md:w-3/5 p-8 md:p-12 bg-white/10 backdrop-blur-md flex items-center">
                          <div>
                            <Quote className="w-12 h-12 mb-6 text-turquoise-400/30 rotate-180" />
                            <p className="text-lg leading-relaxed mb-8 italic text-white/90">
                              "{testimonial.text}"
                            </p>
                            <div className="w-10 h-1 bg-gradient-to-r from-turquoise-400 to-transparent rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots navigation */}
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
                    : "w-2 bg-white/30 hover:bg-white/50"
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
