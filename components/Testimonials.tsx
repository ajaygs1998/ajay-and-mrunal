import React from 'react';

const testimonials = [
  {
    body: 'Stellar has completely transformed our development process. We ship features faster and with more confidence than ever before.',
    author: {
      name: 'Jane Doe',
      handle: 'CEO at Innovate Co.',
      imageUrl: 'https://picsum.photos/seed/person1/100/100',
    },
  },
  {
    body: 'The performance and scalability are unmatched. Our user engagement has skyrocketed since we made the switch.',
    author: {
      name: 'John Smith',
      handle: 'CTO at Tech Solutions',
      imageUrl: 'https://picsum.photos/seed/person2/100/100',
    },
  },
  {
    body: 'An incredible toolset with amazing support. The team is always responsive and helpful. Highly recommended!',
    author: {
      name: 'Samantha Ray',
      handle: 'Lead Developer at Future Works',
      imageUrl: 'https://picsum.photos/seed/person3/100/100',
    },
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-slate-800/20"></div>
         <div aria-hidden="true" className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
          <div
            className="ml-[max(50%,38rem)] aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#80caff] to-[#4f46e5]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What our users say</h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            Hear from the growing community of developers and teams building their best work on Stellar.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-6 text-slate-300 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.author.name} className="rounded-2xl bg-slate-800/50 p-6 shadow-lg ring-1 ring-slate-700/50">
              <blockquote className="text-slate-300">
                <p>{`“${testimonial.body}”`}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                <div>
                  <div className="font-semibold text-white">{testimonial.author.name}</div>
                  <div className="text-slate-400">{testimonial.author.handle}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
