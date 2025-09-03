import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const Blog: React.FC = () => {
  const featuredPost = {
    title: "The Complete AI Strategy Guide for Modern Entrepreneurs",
    excerpt: "Discover how artificial intelligence is reshaping the entrepreneurial landscape and learn actionable strategies to leverage AI in your startup journey.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800"
  };

  const posts = [
    {
      title: "AI-Powered Growth: Scaling Your Startup",
      excerpt: "Learn how successful startups are using AI to accelerate growth and optimize operations.",
      date: "Dec 12, 2024",
      readTime: "5 min read"
    },
    {
      title: "Building AI-First Operating Models",
      excerpt: "Transform your business operations with AI-driven decision making and automation.",
      date: "Dec 10, 2024",
      readTime: "6 min read"
    },
    {
      title: "Innovation Engines: Creating Tomorrow's Solutions",
      excerpt: "Explore how innovation hubs are fostering the next generation of breakthrough technologies.",
      date: "Dec 8, 2024",
      readTime: "4 min read"
    }
  ];

  return (
    <section className="py-24 bg-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Insights for{' '}
            <span className="text-primary-500">
              Impact
            </span>
          </h2>
          <p className="text-xl text-primary-900/70 max-w-3xl mx-auto">
            Stay ahead with the latest trends, strategies, and insights from the world of innovation and entrepreneurship
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <article className="group relative bg-primary-50/80 rounded-3xl overflow-hidden border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 via-primary-100/20 to-primary-500/20 relative overflow-hidden">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-primary-900/60 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4 group-hover:text-primary-500 transition-colors">
                  {featuredPost.title}
                </h3>
                
                <p className="text-primary-900/70 text-lg leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <button className="flex items-center gap-2 text-primary-500 hover:text-primary-500/80 font-semibold group-hover:gap-3 transition-all duration-300">
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          </div>

          {/* Side Posts */}
          <div className="space-y-6">
            {posts.map((post, index) => (
              <article 
                key={index}
                className="group bg-primary-50/60 rounded-2xl p-6 border border-primary-500/20 hover:border-primary-500/50 hover:bg-primary-50/80 transition-all duration-300"
              >
                <div className="flex items-center gap-4 text-sm text-primary-900/50 mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h4 className="text-lg font-bold text-primary-900 mb-3 group-hover:text-primary-500 transition-colors">
                  {post.title}
                </h4>
                
                <p className="text-primary-900/70 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <button className="flex items-center gap-2 text-primary-500 hover:text-primary-500/80 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                  Read More
                  <ArrowRight className="w-3 h-3" />
                </button>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-100 text-primary-50 rounded-full text-lg font-semibold hover:from-primary-500/80 hover:to-primary-100/80 transition-all duration-300 transform hover:scale-105">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;