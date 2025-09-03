import React from 'react';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    { icon: Award, text: "Kerala's first BIRAC BioNEST", color: "text-primary-500" },
    { icon: Users, text: "Multi-crore initiatives", color: "text-primary-500" },
    { icon: Globe, text: "Government of India recognition", color: "text-primary-500" },
    { icon: TrendingUp, text: "Established in 2006", color: "text-primary-500" }
  ];

  return (
    <section className="py-24 bg-primary-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-100/50 to-primary-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-8">
              We collaborate with leaders to{' '}
              <span className="text-primary-500">
                revolutionize
              </span>
            </h2>
            
            <div className="prose prose-lg text-primary-900/80 mb-8">
              <p className="text-xl leading-relaxed mb-6">
                The Innovation and Entrepreneurship Development Cell (IEDC) at Startup Valley Amal Jyothi TBI 
                has been at the forefront of innovation since its establishment in 2006.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                With recognition from the Government of India and the distinction of being Kerala's first 
                BIRAC BioNEST, we have spearheaded multi-crore initiatives that have transformed countless 
                dreams into reality.
              </p>
              <p className="text-lg leading-relaxed">
                Our mission is clear: to guide students from being followers to becoming pioneers, 
                fostering an ecosystem where bold ideas flourish and entrepreneurial spirits soar.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 rounded-full bg-primary-100/80 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                      <IconComponent className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="text-primary-900/80 font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-primary-500/20 via-primary-100/20 to-primary-500/20 rounded-3xl p-8 backdrop-blur-sm border border-primary-500/30">
              <div className="grid grid-cols-2 gap-4 h-64">
                <div className="bg-gradient-to-br from-primary-500/30 to-primary-100/30 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-primary-900">
                    <div className="text-3xl font-bold mb-2">2006</div>
                    <div className="text-sm opacity-80">Established</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary-100/30 to-primary-500/30 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-primary-900">
                    <div className="text-3xl font-bold mb-2">₹5Cr+</div>
                    <div className="text-sm opacity-80">Initiatives</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary-500/30 to-primary-100/30 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-primary-900">
                    <div className="text-3xl font-bold mb-2">1st</div>
                    <div className="text-sm opacity-80">BIRAC BioNEST</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary-100/30 to-primary-500/30 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-primary-900">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-sm opacity-80">Startups Guided</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-100/20 rounded-full blur-xl animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;