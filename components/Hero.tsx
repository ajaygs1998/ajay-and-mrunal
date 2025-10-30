import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-32">
        {/* Background Gradients */}
        <div aria-hidden="true" className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2">
            <div className="h-96 w-96 rounded-full bg-gradient-to-tr from-pink-400 to-yellow-300 opacity-30 blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-x-1/4 translate-y-1/4">
            <div className="h-80 w-80 rounded-full bg-gradient-to-br from-[#E0C3FC] to-[#8EC5FC] opacity-20 blur-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mx-auto max-w-2xl text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl mb-4 drop-shadow-lg"
                >
                  Ajay & Mrunal
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <p className="mt-6 text-2xl font-medium leading-10 text-pink-100 ">
                    Together with their families<br/>
                    Request the pleasure of your company to celebrate their wedding
                  </p>
                  <p className="mt-4 text-xl font-normal leading-8 text-slate-100">
                    <span className="block">Saturday, 7th December 2024</span>
                    <span className="block">At 6:00 PM</span>
                    <span className="block">Lotus Banquet, Pune</span>
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="mt-10 flex items-center justify-center gap-x-6"
                >
                  <a
                    href="#"
                    className="rounded-lg bg-gradient-to-tr from-pink-500 to-yellow-400 px-7 py-3 text-lg font-semibold text-white shadow-lg hover:from-yellow-400 hover:to-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400 transition-all duration-200 transform hover:scale-105"
                  >
                    Add to Calendar
                  </a>
                  <a href="#" className="text-lg font-semibold leading-6 text-white hover:text-yellow-200">
                    Venue & Details <span aria-hidden="true">→</span>
                  </a>
                </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 1.3 }}
              className="mt-16 flow-root sm:mt-24"
            >
              <div className="-m-2 rounded-xl bg-white/10 p-2 ring-1 ring-inset ring-white/40 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
                  alt="Ajay and Mrunal Wedding"
                  width={1200}
                  height={600}
                  className="rounded-md shadow-2xl ring-1 ring-white/30"
                />
              </div>
            </motion.div>
        </div>
    </section>
  );
};

export default Hero;
