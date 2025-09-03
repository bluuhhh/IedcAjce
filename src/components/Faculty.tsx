import React from 'react';
import { Phone, Linkedin, Mail } from 'lucide-react';

const Faculty: React.FC = () => {
  const facultyMembers = [
    {
      name: "Prof. Dr. Sherin Sam Jose",
      title: "Director & Nodal Officer",
      phone: "9496805712",
      email: "sherin@amaljyothi.ac.in",
      linkedin: "#",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Innovation Strategy & Startup Mentoring"
    },
    {
      name: "Dr. Rajesh Kumar",
      title: "Program Coordinator",
      phone: "9496805713",
      email: "rajesh@amaljyothi.ac.in",
      linkedin: "#",
      image: "https://images.pexels.com/photos/5212319/pexels-photo-5212319.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Technology Transfer & IP Management"
    },
    {
      name: "Prof. Priya Nair",
      title: "Industry Relations Head",
      phone: "9496805714",
      email: "priya@amaljyothi.ac.in",
      linkedin: "#",
      image: "https://images.pexels.com/photos/5212316/pexels-photo-5212316.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Corporate Partnerships & Funding"
    },
    {
      name: "Dr. Arun Thomas",
      title: "Research & Development Lead",
      phone: "9496805715",
      email: "arun@amaljyothi.ac.in",
      linkedin: "#",
      image: "https://images.pexels.com/photos/5212318/pexels-photo-5212318.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Product Development & Market Research"
    }
  ];

  return (
    <section className="py-24 bg-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Meet Our{' '}
            <span className="text-primary-500">
              Leaders
            </span>
          </h2>
          <p className="text-xl text-primary-900/70 max-w-3xl mx-auto">
            Visionary faculty and nodal officers driving innovation and entrepreneurship at IEDC
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-primary-50/80 backdrop-blur-sm rounded-3xl p-6 border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500/20 to-primary-100/20 p-1">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-primary-500 transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary-500 font-medium mb-2">{member.title}</p>
                <p className="text-primary-900/70 text-sm mb-6">{member.specialization}</p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <a 
                    href={`tel:${member.phone}`}
                    className="flex items-center justify-center gap-2 text-primary-900/60 hover:text-primary-900 transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4 text-primary-500" />
                    <span>{member.phone}</span>
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-2 text-primary-900/60 hover:text-primary-900 transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4 text-primary-500" />
                    <span className="truncate">{member.email}</span>
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="mt-4 pt-4 border-t border-primary-500/20">
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-500/80 transition-colors text-sm font-medium"
                  >
                    <Linkedin className="w-4 h-4" />
                    Connect
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-primary-100/10 to-primary-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-100 text-primary-50 rounded-full text-lg font-semibold hover:from-primary-500/80 hover:to-primary-100/80 transition-all duration-300 transform hover:scale-105">
            Meet the Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faculty;