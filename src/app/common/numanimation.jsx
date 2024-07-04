'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedNumber = ({ initialValue, finalValue, decimalPlaces }) => {
  const numberRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(numberRef.current, {
      duration: 2, // Adjust duration as needed
      innerHTML: finalValue.toFixed(decimalPlaces), // Format to specified decimal places
      ease: 'power4.out'
    });

    tl.play();

    return () => {
      tl.kill(); // Clean up GSAP animation
    };
  }, [finalValue, decimalPlaces]);

  return (
    <span ref={numberRef}>
      {initialValue.toFixed(decimalPlaces)} {/* Initial value with specified decimal places */}
    </span>
  );
};

export default AnimatedNumber;
