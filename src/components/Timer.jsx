import { useEffect, useRef, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  const counterRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(counterRef.current);
    };
  }, []);

  function handleStart() {
    clearInterval(counterRef.current);
    counterRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(counterRef.current);
  }

  function handleReset() {
    clearInterval(counterRef.current);
    setCount(0);
  }

  return (
    <div className="timerWrapper">
      <h3>Timer: {count}</h3>
      <div className="timerButtons">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
