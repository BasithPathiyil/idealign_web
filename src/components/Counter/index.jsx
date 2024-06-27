import { useInView } from "framer-motion";
import React, { useRef } from "react";
import CountUp from "react-countup";

const Counter = ({ num, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <h2
      ref={ref}
      style={{
        // transform: isInView ? "none" : "translateY(30px)",
        // opacity: isInView ? 1 : 0,
        // transition: "all 0.9s ease .7s",
        color: "white",
      }}
    >
      <CountUp start={0} end={num} duration={3} enableScrollSpy scrollSpyOnce />

      {suffix}
    </h2>
  );
};

export default Counter;
