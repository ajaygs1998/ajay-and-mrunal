import React from 'react';
import Countdown from './Countdown';

const Hero: React.FC = () => {
  const weddingDate = '2025-12-29T12:05:00';

  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
      {/* Background Gradients */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2">
          <div className="h-96 w-96 rounded-full bg-gradient-to-tr from-rose-300 to-amber-200 opacity-40 blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 translate-x-1/4 translate-y-1/4">
          <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-violet-300 to-rose-300 opacity-20 blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-rose-500 tracking-widest uppercase">
            We're Getting Married
          </p>
          <h1 className="mt-4 text-4xl font-serif font-bold tracking-tight text-gray-800 sm:text-6xl">
            Ajay & Mrunalini
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join us to celebrate the beginning of our forever. We can't wait to share our special day with you.
          </p>
          
          <div className="mt-12">
            <Countdown date={weddingDate} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
