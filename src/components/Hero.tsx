import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Plasma from './Plasma';
import CardSwap, { Card } from './CardSwap';

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full min-h-screen">
          {/* Left Content - Text */}
          <div className="flex flex-col justify-center">
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

          {/* Right Content - CardSwap */}
          <div className="relative h-full flex items-center justify-center">
            <div style={{ height: '600px', position: 'relative', width: '100%' }}>
              <CardSwap
                width={320}
                height={450}
                cardDistance={40}
                verticalDistance={50}
                delay={4000}
                pauseOnHover={true}
              >
                <Card className="bg-gradient-to-br from-primary-900/90 to-primary-500/90 border-primary-500/30 backdrop-blur-sm overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Innovation Poster"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-primary-50 mb-2">Innovation Summit</h3>
                    <p className="text-primary-100/80 text-sm">Transforming Ideas into Reality</p>
                  </div>
                </Card>
                <Card className="bg-gradient-to-br from-primary-500/90 to-primary-100/90 border-primary-100/30 backdrop-blur-sm overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Startup Poster"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-primary-50 mb-2">Startup Accelerator</h3>
                    <p className="text-primary-100/80 text-sm">From Concept to Market</p>
                  </div>
                </Card>
                <Card className="bg-gradient-to-br from-primary-100/90 to-primary-500/90 border-primary-500/30 backdrop-blur-sm overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Entrepreneurship Poster"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-primary-50 mb-2">Entrepreneur Meet</h3>
                    <p className="text-primary-100/80 text-sm">Building Tomorrow's Leaders</p>
                  </div>
                </Card>
                <Card className="bg-gradient-to-br from-primary-900/90 to-primary-100/90 border-primary-100/30 backdrop-blur-sm overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Tech Innovation Poster"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-primary-50 mb-2">Tech Innovation</h3>
                    <p className="text-primary-100/80 text-sm">AI & Future Technologies</p>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;