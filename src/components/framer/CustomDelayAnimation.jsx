import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CustomDelayAnimation = ({ children, delayInSec, durInSec = 0 }) => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div ref={elementRef}>
      {isInView && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: durInSec, delay: delayInSec }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default CustomDelayAnimation;
