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
            src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Innovation Summit Poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent" />
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
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Startup Accelerator Poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent" />
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
            src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Entrepreneur Meet Poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent" />
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
            src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Tech Innovation Poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent" />
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
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Funding Workshop Poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent" />
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
            src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Pitch Competition Poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent" />
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
      {/* Plasma decorative background */}
      <div className="absolute inset-0">
        <Plasma
          color="#3F72AF"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.18}
          mouseInteractive={true}
        />
      </div>

      {/* Background InfiniteScroll:
          - occupies full viewport height (100vh)
          - anchored from center -> right on md+ using md:left-[40%]
          - soft left-edge fade via mask so the scroller visually merges with text
          - pointer-events-none so the text above stays interactive */}
      <div
        className="absolute top-0 left-0 right-0 h-screen z-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="h-full w-full md:absolute md:top-0 md:bottom-0 md:right-0 md:left-[40%] lg:left-[38%]"
          style={{
            // left-edge soft fade (tweak the black stop % to taste)
            maskImage: 'linear-gradient(to left, black 55%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 55%, rgba(0,0,0,0) 100%)',
            opacity: 0.95,
            filter: 'saturate(0.98) contrast(0.94)'
          }}
        >
          <InfiniteScroll
            items={posterItems}
            width="100%"
            maxHeight="100vh"     // <-- increased height: fills viewport vertically
            itemMinHeight={200}   // slightly taller items for a fuller look
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={0.28}
            autoplayDirection="down"
            pauseOnHover={true}
            negativeMargin="-0.8em"
          />
        </div>
      </div>

      {/* Foreground content (text + CTAs) — stays above the scroller */}
      <div className="relative z-20 h-full min-h-screen flex items-center px-6 md:px-10 lg:px-14">
        {/* Left text block — fixed position in flow so layout doesn't change */}
        <div className="flex-1 max-w-2xl pr-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-50 mb-6 leading-tight">
            Empowering{' '}
            <span className="text-primary-500">Innovation</span>
            <br />
            Inspiring{' '}
            <span className="text-primary-100">Entrepreneurs</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-primary-100 mb-12 max-w-2xl leading-relaxed">
            Got an idea? Let's make it happen! Join us in the transformative adventure to unleash your potential and turn ideas into powerful innovations.
          </p>

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

        {/* optional spacer to preserve visual balance */}
        <div className="flex-1 hidden lg:block" />
      </div>
    </section>
  );
};

export default Hero;
