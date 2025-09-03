import React from 'react';
import { Zap, MapPin, Phone, Mail, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const navigationLinks = [
    ['Home', 'About', 'Execom', 'Achievements'],
    ['Reports', 'Blog', 'Events', 'Contact']
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-primary-900 border-t border-primary-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-100 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-50" />
              </div>
              <span className="text-2xl font-bold text-primary-50">IEDC</span>
            </div>

            {/* Description */}
            <p className="text-primary-100/80 leading-relaxed mb-8 max-w-md">
              Innovation and Entrepreneurship Development Cell at Startup Valley Amal Jyothi TBI - 
              Empowering the next generation of innovators and entrepreneurs.
            </p>

            {/* Address */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div className="text-primary-100/80">
                  <p className="font-medium text-primary-50 mb-1">Amal Jyothi College of Engineering</p>
                  <p>Kanjirappally, Kottayam District</p>
                  <p>Kerala, India - 686518</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500" />
                <span className="text-primary-100/80">+91 94968 05712</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500" />
                <span className="text-primary-100/80">iedc@amaljyothi.ac.in</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary-50 mb-6">Quick Links</h3>
            <div className="space-y-3">
              {navigationLinks[0].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-primary-100/80 hover:text-primary-500 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary-50 mb-6">Resources</h3>
            <div className="space-y-3">
              {navigationLinks[1].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-primary-100/80 hover:text-primary-500 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-primary-500/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-primary-100/80 text-sm">Follow us:</span>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 bg-primary-100/10 rounded-full flex items-center justify-center hover:bg-primary-500/20 hover:border-primary-500/50 border border-primary-100/20 transition-all duration-300 transform hover:scale-110"
              >
                <Icon className="w-4 h-4 text-primary-100/80 hover:text-primary-500 transition-colors" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-primary-100/80 text-sm">
              © 2019 MakerHub. All Rights Reserved.
            </p>
            <p className="text-primary-100/60 text-xs mt-1">
              Built with ❤️ for Innovation
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="h-1 bg-gradient-to-r from-primary-500 via-primary-100 to-primary-500"></div>
    </footer>
  );
};

export default Footer;