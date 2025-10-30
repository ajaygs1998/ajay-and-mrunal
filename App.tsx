import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Features />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
