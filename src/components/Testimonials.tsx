
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
    <section className="py-20 bg-gradient-to-br from-ocean-900 to-ocean-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-cyan-400 blur-3xl"></div>
        <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/3 w-72 h-72 rounded-full bg-teal-300 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            What Our <span className="text-turquoise-300">Clients</span> Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-turquoise-400 to-ocean-500 mx-auto mb-6"></div>
          <p className="text-lg text-ocean-100/90">
            Discover why our guests keep coming back for unforgettable yacht experiences
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Control buttons */}
          <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={prevSlide}
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full p-3 md:p-4 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={nextSlide}
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full p-3 md:p-4 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Testimonial slider */}
          <div 
            ref={sliderRef}
            className="overflow-hidden rounded-2xl"
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
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 bg-gradient-to-br from-ocean-700/80 to-ocean-900/80 p-8 flex flex-col justify-center items-center text-center relative">
                          <Quote className="absolute top-6 left-6 w-12 h-12 text-white/10" />
                          <div className="relative z-10">
                            <div className="w-24 h-24 mb-6 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
                              <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h4 className="text-xl font-bold mb-1">{testimonial.name}</h4>
                            <p className="text-sm text-ocean-100/80 mb-4">{testimonial.location}</p>
                            <div className="flex justify-center mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={cn(
                                    "w-5 h-5", 
                                    i < testimonial.rating 
                                      ? "fill-yellow-400 text-yellow-400" 
                                      : "text-gray-400"
                                  )}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="md:w-2/3 p-8 md:p-10 flex items-center">
                          <div>
                            <Quote className="w-12 h-12 mb-6 text-ocean-300/30 rotate-180" />
                            <p className="text-lg md:text-xl leading-relaxed mb-8 italic">
                              "{testimonial.text}"
                            </p>
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
          <div className="flex justify-center mt-10 gap-3">
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
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentSlide 
                    ? "bg-turquoise-400 scale-125 shadow-[0_0_8px_rgba(64,207,197,0.6)]" 
                    : "bg-white/30 hover:bg-white/50"
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
