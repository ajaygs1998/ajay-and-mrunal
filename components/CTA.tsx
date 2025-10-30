import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
    return (
        <motion.section
            id="pricing"
            className="py-20 sm:py-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="relative isolate overflow-hidden bg-slate-800 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        viewport={{ once: true }}
                    >
                        Ready to celebrate love?
                        <br />
                        Join Ajay & Mrunal's wedding.
                    </motion.h2>
                    <motion.p
                        className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Let's make unforgettable memories together. RSVP to be a special part of our big day!
                    </motion.p>
                    <motion.div
                        className="mt-10 flex items-center justify-center gap-x-6"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.65 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href="#"
                            className="rounded-md bg-white px-5 py-3 text-base font-semibold text-slate-900 shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 transform hover:scale-105"
                        >
                            RSVP Now
                        </a>
                        <a href="#" className="text-base font-semibold leading-6 text-white">
                            View Details <span aria-hidden="true">→</span>
                        </a>
                    </motion.div>
                    <div aria-hidden="true" className="absolute -top-24 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl">
                        <div
                            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#fcb69f] to-[#ffecd2] opacity-20"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default CTA;
