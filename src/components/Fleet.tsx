
import React, { useState, useEffect } from 'react';
import { Anchor, Users, Ruler, Cloud } from 'lucide-react';

// Yacht type definitions
type YachtSize = 'All' | 'Small' | 'Medium' | 'Large';
type YachtType = 'All' | 'Motor' | 'Sailing' | 'Catamaran';

interface Yacht {
  id: number;
  name: string;
  type: Exclude<YachtType, 'All'>;
  size: Exclude<YachtSize, 'All'>;
  length: string;
  capacity: number;
  imageUrl: string;
  price: string;
  description: string;
}

// Sample yacht data
const yachtData: Yacht[] = [
  {
    id: 1,
    name: "Azure Horizon",
    type: "Motor",
    size: "Large",
    length: "75 ft",
    capacity: 12,
    imageUrl: "https://images.unsplash.com/photo-1588093356707-badf8dbcb118?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "€6,500 / day",
    description: "Luxury motor yacht with spacious sundeck, Jacuzzi, and elegant interiors."
  },
  {
    id: 2,
    name: "Ocean Breeze",
    type: "Sailing",
    size: "Medium",
    length: "55 ft",
    capacity: 8,
    imageUrl: "https://images.unsplash.com/photo-1529551739587-e242c564f727?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "€3,200 / day",
    description: "Classic sailing yacht with modern amenities, perfect for authentic Mediterranean experiences."
  },
  {
    id: 3,
    name: "Crystal Seas",
    type: "Catamaran",
    size: "Medium",
    length: "60 ft",
    capacity: 10,
    imageUrl: "https://images.unsplash.com/photo-1605283176567-9e7f16519a05?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "€4,800 / day",
    description: "Spacious catamaran with multiple sunbathing areas and stability for guest comfort."
  },
  {
    id: 4,
    name: "Ibiza Star",
    type: "Motor",
    size: "Small",
    length: "45 ft",
    capacity: 6,
    imageUrl: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "€2,000 / day",
    description: "Sporty motor yacht perfect for day trips to Formentera and coastal cruising."
  },
  {
    id: 5,
    name: "Sunset Voyager",
    type: "Sailing",
    size: "Large",
    length: "80 ft",
    capacity: 14,
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "€5,800 / day",
    description: "Majestic sailing yacht with luxury cabins and professional crew for multi-day charters."
  },
  {
    id: 6,
    name: "Mediterranean Gem",
    type: "Catamaran",
    size: "Small",
    length: "40 ft",
    capacity: 8,
    imageUrl: "https://images.unsplash.com/photo-1612686635542-2264cb0fbb9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "€2,500 / day",
    description: "Compact catamaran offering excellent value with comfortable amenities for day cruising."
  }
];

const Fleet: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<YachtSize>('All');
  const [selectedType, setSelectedType] = useState<YachtType>('All');
  const [filteredYachts, setFilteredYachts] = useState<Yacht[]>(yachtData);
  const [visibleYachts, setVisibleYachts] = useState<Yacht[]>([]);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Apply filters
  useEffect(() => {
    let result = yachtData;
    
    if (selectedSize !== 'All') {
      result = result.filter(yacht => yacht.size === selectedSize);
    }
    
    if (selectedType !== 'All') {
      result = result.filter(yacht => yacht.type === selectedType);
    }
    
    setFilteredYachts(result);
  }, [selectedSize, selectedType]);

  // Animation for visible yachts
  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => {
        setVisibleYachts(filteredYachts);
      }, 300);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [filteredYachts, isIntersecting]);

  // Intersection observer for section animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('fleet');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="fleet" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-800 mb-4">
            Discover Our Luxury Fleet
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From sleek motor yachts to classic sailing vessels, explore our carefully curated selection of premium charter options.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedType('All')}
              className={`px-4 py-2 rounded-md transition-all ${
                selectedType === 'All'
                  ? 'bg-ocean-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Types
            </button>
            <button
              onClick={() => setSelectedType('Motor')}
              className={`px-4 py-2 rounded-md transition-all ${
                selectedType === 'Motor'
                  ? 'bg-ocean-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Motor Yachts
            </button>
            <button
              onClick={() => setSelectedType('Sailing')}
              className={`px-4 py-2 rounded-md transition-all ${
                selectedType === 'Sailing'
                  ? 'bg-ocean-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Sailing Yachts
            </button>
            <button
              onClick={() => setSelectedType('Catamaran')}
              className={`px-4 py-2 rounded-md transition-all ${
                selectedType === 'Catamaran'
                  ? 'bg-ocean-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Catamarans
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedSize('All')}
              className={`px-4 py-2 rounded-md transition-all ${
                selectedSize === 'All'
                  ? 'bg-ocean-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Sizes
            </button>
            <button
              onClick={() => setSelectedSize('Small')}
              className={`px-4 py-2 rounded-md transition-all ${
                selectedSize === 'Small'
                  ? 'bg-ocean-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Small (up to 45ft)
            </button>
            <button
              onClick={() => setSelectedSize('Medium')}
              className={`px-4 py-2 rounded-md transition-all ${
                selectedSize === 'Medium'
                  ? 'bg-ocean-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Medium (45-65ft)
            </button>
            <button
              onClick={() => setSelectedSize('Large')}
              className={`px-4 py-2 rounded-md transition-all ${
                selectedSize === 'Large'
                  ? 'bg-ocean-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Large (65ft+)
            </button>
          </div>
        </div>

        {/* Yacht grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredYachts.map((yacht, index) => (
            <div
              key={yacht.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 opacity-0 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={yacht.imageUrl}
                  alt={yacht.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-ocean-700 text-white px-3 py-1 rounded-md text-sm font-medium">
                  {yacht.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ocean-800 mb-2">{yacht.name}</h3>
                <p className="text-gray-600 mb-4">{yacht.description}</p>
                <div className="flex flex-wrap gap-4 text-gray-700 mb-5">
                  <div className="flex items-center">
                    <Anchor className="w-5 h-5 mr-1 text-ocean-600" />
                    <span>{yacht.type}</span>
                  </div>
                  <div className="flex items-center">
                    <Ruler className="w-5 h-5 mr-1 text-ocean-600" />
                    <span>{yacht.length}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-1 text-ocean-600" />
                    <span>Up to {yacht.capacity}</span>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="inline-block w-full bg-ocean-600 hover:bg-ocean-700 text-white py-3 px-4 rounded-md text-center font-medium transition-colors"
                >
                  Inquire Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredYachts.length === 0 && (
          <div className="text-center py-12">
            <Cloud className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No yachts found</h3>
            <p className="text-gray-500">
              Please try different filter options or <a href="#contact" className="text-ocean-600 hover:text-ocean-700">contact us</a> for custom options.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Fleet;
