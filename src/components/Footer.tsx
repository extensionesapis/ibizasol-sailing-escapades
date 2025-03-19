
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Anchor } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-ocean-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Anchor className="w-8 h-8 text-ocean-300" />
              <span className="text-2xl font-bold tracking-tight">
                IbizaSol<span className="text-ocean-300">Charter</span>
              </span>
            </div>
            <p className="text-ocean-100/80 mb-6">
              Luxury yacht charters in Ibiza and Formentera. Explore the Mediterranean in style with our premium fleet and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-ocean-700 flex items-center justify-center hover:bg-ocean-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-ocean-700 flex items-center justify-center hover:bg-ocean-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-ocean-700 flex items-center justify-center hover:bg-ocean-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 sm:mt-0">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Fleet', 'Experiences', 'About', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-ocean-100/80 hover:text-ocean-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 lg:mt-0">
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-ocean-300 flex-shrink-0 mt-1" />
                <span className="text-ocean-100/80">
                  Marina Botafoch, 07800 Ibiza, Balearic Islands, Spain
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-ocean-300 flex-shrink-0" />
                <a href="tel:+34971123456" className="text-ocean-100/80 hover:text-ocean-300 transition-colors">
                  +34 971 123 456
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-ocean-300 flex-shrink-0" />
                <a href="mailto:info@ibizasolcharter.com" className="text-ocean-100/80 hover:text-ocean-300 transition-colors">
                  info@ibizasolcharter.com
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-8 lg:mt-0">
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-ocean-100/80 mb-4">
              Subscribe to our newsletter to receive special offers and updates on new yacht additions.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-ocean-800 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-500 text-white placeholder-ocean-400"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-ocean-500 text-white rounded-md font-medium hover:bg-ocean-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ocean-800 text-center text-ocean-400 text-sm">
          <p>© {new Date().getFullYear()} IbizaSolCharter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
