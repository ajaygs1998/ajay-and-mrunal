import React from 'react';

const CTA: React.FC = () => {
    return (
        <section id="pricing" className="py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-slate-800 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
                    <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Ready to dive in?
                        <br />
                        Start your free trial today.
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">
                        Experience the full power of Stellar with a 14-day free trial. No credit card required.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-white px-5 py-3 text-base font-semibold text-slate-900 shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 transform hover:scale-105"
                        >
                            Get started
                        </a>
                        <a href="#" className="text-base font-semibold leading-6 text-white">
                            View pricing <span aria-hidden="true">→</span>
                        </a>
                    </div>

                    <div aria-hidden="true" className="absolute -top-24 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl">
                        <div
                            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#80caff] to-[#4f46e5] opacity-20"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTA;
