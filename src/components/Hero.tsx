import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Plasma from './Plasma';
import InfiniteScroll from './InfiniteScroll';

const Hero: React.FC = () => {
  const posterItems = [
    {
      content: (
        <div className="w-full h-full relative overflow-hidden rounded-2xl">
          <img 
            src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Innovation Summit Poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent"></div>
          <div className="absolute bottom-3 left-3 right-3">
            <h4 className="text-base font-bold text-primary-50 mb-1">Innovation Summit 2024</h4>
            <p className="text-primary-100/90 text-sm">Transforming Ideas into Reality</p>
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="w-full h-full relative overflow-hidden rounded-2xl">
          <img 
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Startup Accelerator Poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent"></div>
          <div className="absolute bottom-3 left-3 right-3">
            <h4 className="text-base font-bold text-primary-50 mb-1">Startup Accelerator</h4>
            <p className="text-primary-100/90 text-sm">From Concept to Market</p>
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="w-full h-full relative overflow-hidden rounded-2xl">
          <img 
            src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Entrepreneur Meet Poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent"></div>
          <div className="absolute bottom-3 left-3 right-3">
            <h4 className="text-base font-bold text-primary-50 mb-1">Entrepreneur Meet</h4>
            <p className="text-primary-100/90 text-sm">Building Tomorrow's Leaders</p>
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="w-full h-full relative overflow-hidden rounded-2xl">
          <img 
            src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Tech Innovation Poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent"></div>
          <div className="absolute bottom-3 left-3 right-3">
            <h4 className="text-base font-bold text-primary-50 mb-1">Tech Innovation Lab</h4>
            <p className="text-primary-100/90 text-sm">AI & Future Technologies</p>
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="w-full h-full relative overflow-hidden rounded-2xl">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Funding Workshop Poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent"></div>
          <div className="absolute bottom-3 left-3 right-3">
            <h4 className="text-base font-bold text-primary-50 mb-1">Funding Workshop</h4>
            <p className="text-primary-100/90 text-sm">Securing Investment</p>
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="w-full h-full relative overflow-hidden rounded-2xl">
          <img 
            src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Pitch Competition Poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent"></div>
          <div className="absolute bottom-3 left-3 right-3">
            <h4 className="text-base font-bold text-primary-50 mb-1">Pitch Battle 2024</h4>
            <p className="text-primary-100/90 text-sm">Compete for Glory</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-primary-900">
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

      <div className="relative z-10 h-full min-h-screen flex items-center">
        {/* Left Content - Text positioned at far left */}
        <div className="flex-1 max-w-2xl pl-4 sm:pl-6 lg:pl-8 pr-8">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-50 mb-6 leading-tight">
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
          <p className="text-lg md:text-xl lg:text-2xl text-primary-100 mb-12 max-w-2xl leading-relaxed">
            Got an idea? Let's make it happen! Join us in the transformative adventure to unleash your potential turning ideas into powerful innovations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
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

        {/* Right Content - InfiniteScroll positioned at far right */}
        <div className="relative flex items-center justify-center w-full overflow-hidden overscroll-none border-t-2 border-b-2 border-t-dotted border-b-dotted border-transparent pr-4 sm:pr-6 lg:pr-8" style={{ height: '600px', maxWidth: '400px' }}>
          <InfiniteScroll
            items={posterItems}
            width="24rem"
            maxHeight="600px"
            itemMinHeight={180}
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={0.3}
            autoplayDirection="down"
            pauseOnHover={true}
            negativeMargin="-0.8em"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;