import React from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const Events: React.FC = () => {
  const events = [
    {
      title: "Startup Pitch Battle 2024",
      date: "Jan 15, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Main Auditorium",
      participants: "200+",
      description: "Battle of brilliant minds where innovative startups compete for funding and mentorship opportunities.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "AI Innovation Workshop",
      date: "Jan 22, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Tech Lab",
      participants: "50+",
      description: "Hands-on workshop exploring cutting-edge AI technologies and their applications in entrepreneurship.",
      image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Investor Connect Summit",
      date: "Feb 5, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Convention Center",
      participants: "300+",
      description: "Connect with leading investors, VCs, and industry experts to fuel your entrepreneurial journey.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Upcoming{' '}
            <span className="text-primary-500">
              Events
            </span>
          </h2>
          <p className="text-xl text-primary-900/70 max-w-4xl mx-auto">
            A lineup of transformative events where innovation, passion, and bold ideas collide to create the future of entrepreneurship
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <article 
              key={index}
              className="group bg-primary-50/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            >
              {/* Event Image */}
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent"></div>
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-500 to-primary-100 text-primary-50 px-3 py-1 rounded-full text-sm font-semibold">
                  {event.date}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-primary-500 transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-primary-900/70 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-primary-900/60 text-sm">
                    <Calendar className="w-4 h-4 text-primary-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-900/60 text-sm">
                    <MapPin className="w-4 h-4 text-primary-500" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-900/60 text-sm">
                    <Users className="w-4 h-4 text-primary-500" />
                    <span>{event.participants} Expected</span>
                  </div>
                </div>

                {/* Register Button */}
                <button className="w-full bg-gradient-to-r from-primary-500/20 to-primary-100/20 border border-primary-500/50 text-primary-900 py-3 rounded-xl hover:from-primary-500 hover:to-primary-100 hover:border-transparent hover:text-primary-50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-500/25 flex items-center justify-center gap-2">
                  Register Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-100 text-primary-50 rounded-full text-lg font-semibold hover:from-primary-500/80 hover:to-primary-100/80 transition-all duration-300 transform hover:scale-105">
            See All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;