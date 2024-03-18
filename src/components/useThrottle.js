import { useEffect, useRef, useState } from "react";

const useThrottle = (value, delay) => {
  const [throttledValue, setThrottledValue] = useState(value);

  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) {
      setTimeout(() => {
        setThrottledValue(value);
        timerRef.current = null;
      }, delay);
    }
  }, [value, delay]);

  return throttledValue;
};

function throttle(func, delay) {
  let flag = true;
  return function (...args) {
    if (flag) {
      func.apply(this, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

export { useThrottle, throttle };
