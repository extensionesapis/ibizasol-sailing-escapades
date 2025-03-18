
import React, { useEffect, useRef } from 'react';
import { Shield, Anchor, Award, Heart } from 'lucide-react';

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
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={animateRef} className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-ocean-800 mb-6">
              The IbizaSolCharter Experience
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2010, IbizaSolCharter has established itself as the premier luxury yacht charter company in the Balearic Islands. Our passion for the sea and commitment to exceptional service has made us the trusted choice for discerning travelers.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With over a decade of experience navigating these crystal waters, we've perfected the art of creating unforgettable maritime experiences. Our team combines local expertise with luxury hospitality to ensure every voyage exceeds expectations.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Whether you're seeking a romantic sunset cruise, an adventurous day exploring hidden coves, or a week-long luxury escape, our diverse fleet and knowledgeable crew are ready to make your dreams a reality.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-ocean-600 text-white rounded-md font-medium hover:bg-ocean-700 transition-colors shadow-md"
            >
              Contact Our Team
            </a>
          </div>
          
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1596423814108-1e491ebf29f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="IbizaSolCharter team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1622037022824-4a2fb3b0e3d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ibiza coastline"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 animate-on-scroll">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-white p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mx-auto mb-6">{value.icon}</div>
              <h3 className="text-xl font-bold text-ocean-800 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
