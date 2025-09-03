import React from 'react';
import { Users, Lightbulb, Network, Rocket } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Mentoring',
      description: 'Transformative mentorship from industry experts and successful entrepreneurs.',
      gradient: 'from-primary-500 to-primary-100'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Turning bold ideas into reality through cutting-edge technology and creative thinking.',
      gradient: 'from-primary-100 to-primary-500'
    },
    {
      icon: Network,
      title: 'Networking',
      description: 'Dynamic ecosystem of visionary minds, investors, and industry leaders.',
      gradient: 'from-primary-500 to-primary-900'
    },
    {
      icon: Rocket,
      title: 'Incubation',
      description: 'Comprehensive resources and support to grow startups from concept to market.',
      gradient: 'from-primary-100 to-primary-500'
    }
  ];

  return (
    <section className="py-24 bg-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Why Choose{' '}
            <span className="text-primary-500">
              IEDC
            </span>
          </h2>
          <p className="text-xl text-primary-900/70 max-w-3xl mx-auto">
            Discover the pillars of innovation that make IEDC your gateway to entrepreneurial success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-primary-50/80 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-100/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-primary-50" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-primary-900 mb-4">{feature.title}</h3>
                <p className="text-primary-900/70 leading-relaxed">{feature.description}</p>

                {/* Hover Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 border-r-2 border-b-2 border-primary-500 transform rotate-45"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;