import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import CountUp from 'react-countup';

const Odometer = ({ endValue }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev < endValue ? prev + 1 : endValue));
    }, 100);
    return () => clearInterval(interval);
  }, [endValue]);

  const props = useSpring({
    number: value,
    from: { number: 0 },
    config: { tension: 210, friction: 20 },
  });

  return (
    <div style={{ fontSize: '2em', fontFamily: 'monospace' }}>
      <animated.div>{props.number.interpolate((num) => Math.floor(num))}</animated.div>
    </div>
  );
};

export default Odometer;
