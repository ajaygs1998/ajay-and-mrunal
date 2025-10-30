import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Events from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-100 text-slate-900 antialiased selection:bg-amber-200 selection:text-rose-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Events />
      </main>
      <Footer />
    </div>
  );
};

export default App;
