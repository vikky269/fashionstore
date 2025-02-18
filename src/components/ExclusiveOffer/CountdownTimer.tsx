import React, { useEffect, useState } from "react";

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-04-28T00:00:00").getTime()
    
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds:0 }
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center lg:justify-start gap-4 mb-6">
      <div className="bg-white rounded-lg shadow p-4 text-center">
        <p className="text-xl font-bold text-[#1A1A1A]">{String(timeLeft.days).padStart(2, '0')}</p>
        <p className="text-sm text-[#1A1A1A]">Days</p>
      </div>
      <div className="bg-white rounded-lg shadow p-4 text-center">
        <p className="text-xl font-bold text-[#1A1A1A]">{String(timeLeft.hours).padStart(2, '0')}</p>
        <p className="text-sm text-[#1A1A1A]">Hours</p>
      </div>
      <div className="bg-white rounded-lg shadow p-4 text-center">
        <p className="text-xl font-bold text-[#1A1A1A]">{String(timeLeft.minutes).padStart(2, '0')}</p>
        <p className="text-sm text-[#1A1A1A]">Mins</p>
      </div>
      <div className="bg-white rounded-lg shadow p-4 text-center">
        <p className="text-xl font-bold text-[#1A1A1A]">{String(timeLeft.seconds).padStart(2, '0')}</p>
        <p className="text-sm text-[#1A1A1A]">secs</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
