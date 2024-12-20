import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 px-4 py-4">
      <div className="max-w-4xl mx-auto bg-gray-900/90 backdrop-blur-sm rounded-full px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <span className="text-brand-primary font-bold text-xl animate-pulse">PRECISION</span>
          </div>
          
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white-smoke hover:text-brand-primary transition-all duration-300 transform hover:scale-110"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex-1 flex justify-end md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white-smoke">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-4 space-y-2">
            {['Services', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white-smoke block px-3 py-2 hover:text-brand-primary hover:bg-gray-800/50 rounded-lg transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}