import React, { useState, useEffect } from "react";

function CounterAnimation({ targetNumber }) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const animateCounter = (timestamp) => {
      const timeElapsed = timestamp - startTime;
      const progress = Math.min(1, timeElapsed / duration);
      const animatedValue = Math.ceil(progress * targetNumber);

      setCurrentValue(animatedValue);

      if (timeElapsed < duration) {
        animationFrameId = requestAnimationFrame(animateCounter);
      }
    };

    const startTime = performance.now();
    const duration = 2000; // Duration of animation in milliseconds

    animationFrameId = requestAnimationFrame(animateCounter);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetNumber]);

  return <span className="count me-2">{currentValue}</span>;
}

export default CounterAnimation;
