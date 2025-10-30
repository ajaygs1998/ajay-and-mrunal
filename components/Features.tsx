import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    name: 'Haldi',
    date: 'Friday, 6th December 2024',
    time: '11:00 AM',
    venue: 'Ajay Residence, Pune',
    color: 'bg-yellow-100 border-yellow-300',
    icon: '💛',
    desc: 'A joyful, traditional haldi ceremony with family and friends.'
  },
  {
    name: 'Mehendi',
    date: 'Friday, 6th December 2024',
    time: '4:00 PM',
    venue: 'Ajay Residence, Pune',
    color: 'bg-green-50 border-green-200',
    icon: '🌿',
    desc: "A festive evening for beautiful henna designs and music."
  },
  {
    name: 'Sangeet',
    date: 'Friday, 6th December 2024',
    time: '7:30 PM',
    venue: 'Mrunal Residence, Pune',
    color: 'bg-pink-50 border-pink-200',
    icon: '🎶',
    desc: "Dance and musical evening to celebrate together!"
  },
  {
    name: 'Wedding',
    date: 'Saturday, 7th December 2024',
    time: '6:00 PM',
    venue: 'Lotus Banquet, Pune',
    color: 'bg-amber-50 border-amber-300',
    icon: '💍',
    desc: "The auspicious wedding ceremony. Join us for blessings and celebration."
  },
  {
    name: 'Reception',
    date: 'Sunday, 8th December 2024',
    time: '8:00 PM',
    venue: 'The Grand Lawn, Pune',
    color: 'bg-purple-50 border-purple-200',
    icon: '🥂',
    desc: "Greet the newlyweds and celebrate with good food, drinks, and music!"
  }
];

const Events: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#FFF4EC] via-[#F6E0F8] to-[#F9FFE9] min-h-[40vh]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-serif font-bold text-rose-800 mb-1"
          >Wedding Events</motion.h2>
          <div className="mx-auto w-16 h-1 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-300 rounded-full mb-2"></div>
          <p className="text-xl text-gray-600">You’re warmly invited to all of our celebrations!</p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:gap-6 md:justify-center md:flex-wrap">
          {events.map((event, idx) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.18 + 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className={`flex-1 min-w-[260px] max-w-[340px] rounded-2xl p-6 shadow-md border ${event.color} backdrop-blur-xl`}
            >
              <div className="text-3xl pb-2">{event.icon}</div>
              <div className="font-serif text-2xl font-bold text-gray-800 mb-1">{event.name}</div>
              <div className="text-lg text-amber-600 font-semibold mb-1">{event.date}</div>
              <div className="text-base text-rose-700 font-medium mb-1">{event.time}</div>
              <div className="text-base text-pink-900 font-medium mb-2">{event.venue}</div>
              <div className="text-gray-600 text-sm italic">{event.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
