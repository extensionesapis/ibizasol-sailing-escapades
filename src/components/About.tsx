
import React, { useEffect, useRef } from 'react';
import { Shield, Anchor, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: <Shield className="w-10 h-10 text-ocean-600" />,
    title: "Safety First",
    description: "All our vessels meet the highest safety standards with experienced, certified crew members.",
  },
  {
    icon: <Anchor className="w-10 h-10 text-ocean-600" />,
    title: "Expert Knowledge",
    description: "Our local captains know every hidden gem around Ibiza and Formentera's coastlines.",
  },
  {
    icon: <Award className="w-10 h-10 text-ocean-600" />,
    title: "Premium Quality",
    description: "We maintain our fleet to the highest standards of luxury and performance.",
  },
  {
    icon: <Heart className="w-10 h-10 text-ocean-600" />,
    title: "Personalized Service",
    description: "Each charter is tailored to your preferences for a truly custom experience.",
  },
];

const About: React.FC = () => {
  const animateRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (animateRef.current) {
      animateObserver.observe(animateRef.current);
    }

    if (valuesRef.current) {
      animateObserver.observe(valuesRef.current);
    }

    return () => {
      if (animateRef.current) {
        animateObserver.unobserve(animateRef.current);
      }
      if (valuesRef.current) {
        animateObserver.unobserve(valuesRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-white to-ocean-50/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-800 mb-4 tracking-tight">
            The <span className="text-ocean-600">IbizaSolCharter</span> Experience
          </h2>
          <Separator className="w-24 h-1 mx-auto bg-ocean-500 my-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the perfect blend of luxury, adventure, and local expertise with our premium yacht charter services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={animateRef} className="animate-on-scroll space-y-8 lg:pr-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in 2010, IbizaSolCharter has established itself as the premier luxury yacht charter company in the Balearic Islands. Our passion for the sea and commitment to exceptional service has made us the trusted choice for discerning travelers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over a decade of experience navigating these crystal waters, we've perfected the art of creating unforgettable maritime experiences. Our team combines local expertise with luxury hospitality to ensure every voyage exceeds expectations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're seeking a romantic sunset cruise, an adventurous day exploring hidden coves, or a week-long luxury escape, our diverse fleet and knowledgeable crew are ready to make your dreams a reality.
              </p>
            </div>
            
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-ocean-600 to-ocean-500 text-white rounded-lg font-medium hover:from-ocean-700 hover:to-ocean-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Our Team
            </a>
          </div>
          
          <div className="relative h-full">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] h-[400px] lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1596423814108-1e491ebf29f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="IbizaSolCharter team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 rounded-2xl overflow-hidden shadow-2xl hidden lg:block transform transition-all duration-500 hover:scale-[1.02] z-20">
              <img
                src="https://images.unsplash.com/photo-1622037022824-4a2fb3b0e3d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ibiza coastline"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -left-6 -top-6 w-32 h-32 rounded-full bg-ocean-100 z-0 hidden lg:block"></div>
            <div className="absolute -right-12 top-1/3 w-24 h-24 rounded-full bg-sand-100 z-0 hidden lg:block"></div>
          </div>
        </div>

        <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-32 animate-on-scroll">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="group bg-white border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ocean-400 to-ocean-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="mb-6 p-4 rounded-full bg-ocean-50 w-16 h-16 flex items-center justify-center mx-auto group-hover:bg-ocean-100 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-ocean-800 mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
