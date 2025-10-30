import React from 'react';

const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18" />
  </svg>
);

const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
);


const eventDetails = [
  {
    name: 'Date',
    value: 'Monday, 29th December 2025',
    icon: CalendarIcon,
  },
  {
    name: 'Time',
    value: '12:05 PM',
    icon: ClockIcon,
  },
  {
    name: 'Venue',
    value: 'V G Lawns, Chandrapur',
    icon: LocationIcon,
  },
];

const EventDetails: React.FC = () => {
  return (
    <section id="details" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
           <p className="text-base font-semibold leading-7 text-rose-500 tracking-widest uppercase">
            Save the Date
          </p>
          <h2 className="mt-2 text-3xl font-serif font-bold tracking-tight text-gray-800 sm:text-4xl">
            The Wedding Day
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Here are the details for our special day. We would be honored to have you with us.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {eventDetails.map((detail) => (
              <div key={detail.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-800">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-500">
                    <detail.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {detail.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
