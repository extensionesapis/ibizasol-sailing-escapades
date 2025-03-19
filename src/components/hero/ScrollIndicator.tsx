
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
      <a href="#fleet" aria-label="Scroll down">
        <ArrowDownCircle className="w-10 h-10 opacity-80 hover:opacity-100 transition-opacity" />
      </a>
    </div>
  );
};

export default ScrollIndicator;
