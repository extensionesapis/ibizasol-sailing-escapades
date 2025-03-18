
import React from 'react';
import { Card, CardContent } from './ui/card';

// Yacht type definitions
interface Yacht {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
  price: string;
  description: string;
}

// Sample yacht data
const yachtData: Yacht[] = [
  {
    id: 1,
    name: "Azure Horizon",
    type: "Motor Yacht",
    imageUrl: "https://images.unsplash.com/photo-1588093356707-badf8dbcb118?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "€6,500 / day",
    description: "Luxury motor yacht with spacious sundeck, Jacuzzi, and elegant interiors."
  },
  {
    id: 2,
    name: "Ocean Breeze",
    type: "Sailing Yacht",
    imageUrl: "https://images.unsplash.com/photo-1529551739587-e242c564f727?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "€3,200 / day",
    description: "Classic sailing yacht with modern amenities, perfect for authentic Mediterranean experiences."
  },
  {
    id: 3,
    name: "Crystal Seas",
    type: "Catamaran",
    imageUrl: "https://images.unsplash.com/photo-1605283176567-9e7f16519a05?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "€4,800 / day",
    description: "Spacious catamaran with multiple sunbathing areas and stability for guest comfort."
  },
  {
    id: 4,
    name: "Ibiza Star",
    type: "Motor Yacht",
    imageUrl: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "€2,000 / day",
    description: "Sporty motor yacht perfect for day trips to Formentera and coastal cruising."
  },
  {
    id: 5,
    name: "Sunset Voyager",
    type: "Sailing Yacht",
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "€5,800 / day",
    description: "Majestic sailing yacht with luxury cabins and professional crew for multi-day charters."
  },
  {
    id: 6,
    name: "Mediterranean Gem",
    type: "Catamaran",
    imageUrl: "https://images.unsplash.com/photo-1612686635542-2264cb0fbb9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "€2,500 / day",
    description: "Compact catamaran offering excellent value with comfortable amenities for day cruising."
  }
];

const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-800 mb-4">
            Discover Our Luxury Fleet
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From sleek motor yachts to classic sailing vessels, explore our carefully curated selection of premium charter options.
          </p>
        </div>

        {/* Yacht grid - improved card design without detailed characteristics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {yachtData.map((yacht, index) => (
            <div
              key={yacht.id}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full border-none">
                <div className="relative">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={yacht.imageUrl}
                      alt={yacht.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-ocean-800 px-3 py-1 rounded-md text-sm font-bold shadow-md">
                    {yacht.price}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-24" />
                </div>
                <CardContent className="p-6 bg-white relative">
                  <div className="flex flex-col gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-ocean-800">{yacht.name}</h3>
                      <p className="text-ocean-600 text-sm font-medium">{yacht.type}</p>
                    </div>
                    <p className="text-gray-600 mt-2">{yacht.description}</p>
                    <a
                      href="#contact"
                      className="mt-4 inline-block w-full bg-ocean-600 hover:bg-ocean-700 text-white py-3 px-4 rounded-md text-center font-medium transition-colors"
                    >
                      Inquire Now
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
