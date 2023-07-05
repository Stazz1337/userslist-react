import React, { useState, useEffect } from 'react';

const Watch = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='watch' style={{ color: 'orange' }}>
      {currentTime}
    </div>
  );
};

export default Watch;
