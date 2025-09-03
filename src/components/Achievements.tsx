import React from 'react';
import { TrendingUp } from 'lucide-react';

const Achievements: React.FC = () => {
  const metrics = [
    { number: '75+', label: 'Products Launched' },
    { number: '85+', label: 'Startups Incubated' },
    { number: '80+', label: 'Mentoring Sessions' },
    { number: '100+', label: 'Success Stories' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-500/20 to-primary-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-100/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-50 mb-6">
            Excellence in{' '}
            <span className="text-primary-100">
              Action
            </span>
            <br />
            Innovation in{' '}
            <span className="text-primary-500">
              Motion
            </span>
          </h2>
          <p className="text-xl text-primary-100/80 max-w-3xl mx-auto">
            Our track record speaks volumes about our commitment to fostering innovation and entrepreneurship
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative bg-primary-50/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-100/30 hover:border-primary-500/50 transition-all duration-300 transform hover:scale-105"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-primary-100/10 to-primary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-primary-50 mb-3">
                  {metric.number}
                </div>
                <div className="text-primary-100/80 font-medium">{metric.label}</div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 via-primary-100/20 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-100 text-primary-50 rounded-full text-lg font-semibold hover:from-primary-500/80 hover:to-primary-100/80 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-primary-500/25">
            Know More
            <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;