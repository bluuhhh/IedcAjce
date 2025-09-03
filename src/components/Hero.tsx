import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Plasma from './Plasma';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary-900">
      {/* Plasma Background */}
      <div className="absolute inset-0">
        <Plasma 
          color="#3F72AF"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.3}
          mouseInteractive={true}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-50 mb-6 leading-tight text-left">
            Empowering{' '}
            <span className="text-primary-500">
              Innovation
            </span>
            <br />
            Inspiring{' '}
            <span className="text-primary-100">
              Entrepreneurs
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-100 mb-12 max-w-3xl leading-relaxed text-left">
            Got an idea? Let's make it happen! Join us in the transformative adventure to unleash your potential turning ideas into powerful innovations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-start items-start">
            <button className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-100 text-primary-50 rounded-full text-lg font-semibold hover:from-primary-500/80 hover:to-primary-100/80 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-primary-500/25">
              Explore
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 border-2 border-primary-500/50 text-primary-50 rounded-full text-lg font-semibold hover:border-primary-500 hover:bg-primary-500/10 transition-all duration-300 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;