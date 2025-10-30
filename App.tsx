import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import EventDetails from './components/EventDetails';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-rose-50 text-gray-700 font-sans antialiased selection:bg-rose-300 selection:text-rose-900">
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Story />
          <EventDetails />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
