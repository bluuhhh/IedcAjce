import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'The Crew', 'Reports', 'Events', 'More'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-900/90 backdrop-blur-lg border-b border-primary-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center w-auto">
            <a href="#" className="flex items-center ">
              <img
                src="https://iedcajce.in/images/mh.png"
                alt="IEDC Logo"
                className="h-10 rounded-lg object-cover shadow-lg "
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-primary-100 hover:text-primary-50 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-100 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-100 text-primary-50 rounded-full hover:from-primary-500/80 hover:to-primary-100/80 transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-primary-100 hover:text-primary-50 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block text-primary-100 hover:text-primary-50 transition-colors duration-300 py-2"
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-100 text-primary-50 rounded-full hover:from-primary-500/80 hover:to-primary-100/80 transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;