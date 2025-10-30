import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 min-h-[70vh] flex flex-col justify-center items-center bg-gradient-to-br from-[#FFEBCD] via-[#F8E8EE] to-[#FFF5EA]">
      {/* Faint floral ornament top left */}
      <div className="absolute left-0 top-0 opacity-30 z-0 pointer-events-none">
        <svg width="160" height="160" fill="none" viewBox="0 0 160 160">
          <ellipse cx="80" cy="80" rx="75" ry="25" fill="#EAD8C2" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="uppercase tracking-[0.16em] font-bold text-amber-600 text-lg md:text-xl mb-2"
        >
          Together with their families
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[2.8rem] sm:text-6xl font-serif text-gray-800 font-extrabold tracking-tight mb-2 drop-shadow-lg"
        >
          Ajay <span className="text-amber-500">&amp;</span> Mrunal
        </motion.h1>
        <div className="flex justify-center mb-2"><span className="inline-block w-20 h-1 rounded-full bg-gradient-to-r from-amber-400 via-rose-200 to-pink-400 opacity-70"></span></div>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mx-auto inline-block px-7 py-5 mt-6 rounded-2xl bg-white/85 border border-amber-200 shadow-md"
        >
          <div className="font-medium text-base text-amber-800 tracking-widest mb-1 uppercase">Wedding Ceremony</div>
          <div className="text-xl font-extrabold text-rose-700 mb-1">Saturday, 7th December 2024</div>
          <div className="text-amber-700 font-semibold">6:00 PM onwards</div>
          <div className="text-gray-700 text-base">Lotus Banquet, Pune</div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 right-0 opacity-20 z-0 pointer-events-none">
        <svg width="190" height="140" fill="none" viewBox="0 0 190 140">
          <ellipse cx="170" cy="70" rx="75" ry="25" fill="#F2C98C" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
