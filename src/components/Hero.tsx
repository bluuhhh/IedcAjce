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
        <div className="flex items-center h-full min-h-screen pt-16">
          {/* Left Content - Text */}
          <div className="flex-1 max-w-2xl pr-8 lg:pr-16">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-50 mb-6 leading-tight">
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
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-100 mb-8 sm:mb-12 max-w-2xl leading-relaxed">
              Got an idea? Let's make it happen! Join us in the transformative adventure to unleash your potential turning ideas into powerful innovations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-primary-100 text-primary-50 rounded-full text-base sm:text-lg font-semibold hover:from-primary-500/80 hover:to-primary-100/80 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-primary-500/25">
                Explore
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary-500/50 text-primary-50 rounded-full text-base sm:text-lg font-semibold hover:border-primary-500 hover:bg-primary-500/10 transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Events
              </button>
            </div>
          </div>

          {/* Right Content - CardSwap aligned with headline */}
          <div className="hidden lg:flex flex-1 relative h-full items-start justify-end pt-8">
            <div style={{ height: '600px', position: 'relative', width: '450px' }}>
              <CardSwap
                width={350}
                height={220}
                cardDistance={40}
                verticalDistance={45}
                delay={4000}
                pauseOnHover={true}
              >
                <Card className="bg-gradient-to-br from-primary-900/90 to-primary-500/90 border-primary-500/30 backdrop-blur-sm overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Innovation Poster"
                    className="w-full h-full object-cover object-center scale-150"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-primary-50 mb-2">Innovation Summit</h3>
                    <p className="text-primary-100/90 text-sm">Transforming Ideas</p>
                  </div>
                </Card>
                <Card className="bg-gradient-to-br from-primary-500/90 to-primary-100/90 border-primary-100/30 backdrop-blur-sm overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Startup Poster"
                    className="w-full h-full object-cover object-center scale-150"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-primary-50 mb-2">Startup Accelerator</h3>
                    <p className="text-primary-100/90 text-sm">Concept to Market</p>
                  </div>
                </Card>
                <Card className="bg-gradient-to-br from-primary-100/90 to-primary-500/90 border-primary-500/30 backdrop-blur-sm overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Entrepreneurship Poster"
                    className="w-full h-full object-cover object-center scale-150"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-primary-50 mb-2">Entrepreneur Meet</h3>
                    <p className="text-primary-100/90 text-sm">Tomorrow's Leaders</p>
                  </div>
                </Card>
                <Card className="bg-gradient-to-br from-primary-900/90 to-primary-100/90 border-primary-100/30 backdrop-blur-sm overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Tech Innovation Poster"
                    className="w-full h-full object-cover object-center scale-150"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-primary-50 mb-2">Tech Innovation</h3>
                    <p className="text-primary-100/90 text-sm">AI & Future Tech</p>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>

          {/* Mobile CardSwap - Below text on smaller screens */}
          <div className="lg:hidden w-full mt-12">
            <div className="flex justify-center">
              <div style={{ height: '400px', position: 'relative', width: '300px' }}>
                <CardSwap
                  width={250}
                  height={160}
                  cardDistance={25}
                  verticalDistance={30}
                  delay={4000}
                  pauseOnHover={true}
                >
                  <Card className="bg-gradient-to-br from-primary-900/90 to-primary-500/90 border-primary-500/30 backdrop-blur-sm overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Innovation Poster"
                      className="w-full h-full object-cover object-center scale-150"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-primary-50 mb-1">Innovation Summit</h3>
                      <p className="text-primary-100/90 text-xs">Transforming Ideas</p>
                    </div>
                  </Card>
                  <Card className="bg-gradient-to-br from-primary-500/90 to-primary-100/90 border-primary-100/30 backdrop-blur-sm overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Startup Poster"
                      className="w-full h-full object-cover object-center scale-150"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-primary-50 mb-1">Startup Accelerator</h3>
                      <p className="text-primary-100/90 text-xs">Concept to Market</p>
                    </div>
                  </Card>
                  <Card className="bg-gradient-to-br from-primary-100/90 to-primary-500/90 border-primary-500/30 backdrop-blur-sm overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Entrepreneurship Poster"
                      className="w-full h-full object-cover object-center scale-150"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-primary-50 mb-1">Entrepreneur Meet</h3>
                      <p className="text-primary-100/90 text-xs">Tomorrow's Leaders</p>
                    </div>
                  </Card>
                  <Card className="bg-gradient-to-br from-primary-900/90 to-primary-100/90 border-primary-100/30 backdrop-blur-sm overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Tech Innovation Poster"
                      className="w-full h-full object-cover object-center scale-150"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-primary-50 mb-1">Tech Innovation</h3>
                      <p className="text-primary-100/90 text-xs">AI & Future Tech</p>
                    </div>
                  </Card>
                </CardSwap>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;