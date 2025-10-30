import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-32">
        {/* Background Gradients */}
        <div aria-hidden="true" className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2">
            <div className="h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 opacity-20 blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-x-1/4 translate-y-1/4">
            <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 opacity-10 blur-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Build Your Next Idea <span className="text-cyan-400">Faster</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-400">
                    Stellar provides the building blocks and tools to help you ship your projects faster. Focus on your product, not the boilerplate.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="#"
                        className="rounded-md bg-cyan-500 px-5 py-3 text-base font-semibold text-white shadow-lg hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 transition-all duration-200 transform hover:scale-105"
                    >
                        Get started for free
                    </a>
                    <a href="#" className="text-base font-semibold leading-6 text-white hover:text-slate-300">
                        Learn more <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
            
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-slate-800/20 p-2 ring-1 ring-inset ring-slate-700/50 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  src="https://picsum.photos/seed/webapp/1200/600"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-slate-700/50"
                />
              </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
