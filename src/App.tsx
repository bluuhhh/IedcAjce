import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Events from './components/Events';
import Faculty from './components/Faculty';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Features />
      <About />
      <Achievements />
      <Blog />
      <Events />
      <Faculty />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;