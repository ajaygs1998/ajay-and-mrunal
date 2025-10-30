import React, { useEffect, useState } from 'react';

interface CountdownProps {
  date: string;
}

const Countdown: React.FC<CountdownProps> = ({ date }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // FIX: Changed type from JSX.Element[] to React.ReactElement[] to resolve "Cannot find namespace 'JSX'" error.
  const timerComponents: React.ReactElement[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft] && timeLeft[interval as keyof typeof timeLeft] !== 0) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center">
        <span className="text-4xl md:text-5xl font-semibold text-rose-800 tracking-tight">
          {String(timeLeft[interval as keyof typeof timeLeft]).padStart(2, '0')}
        </span>
        <span className="text-sm uppercase text-rose-600 tracking-wider">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <div className="grid grid-cols-4 gap-4 max-w-sm mx-auto p-4 rounded-lg bg-white/50 shadow-inner">
      {timerComponents.length ? timerComponents : <span className="col-span-4 text-center text-xl text-rose-800">The day is here!</span>}
    </div>
  );
};

export default Countdown;
