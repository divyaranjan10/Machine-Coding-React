import { useRef, useState } from "react";

const TimerCred = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    // if null simply return, otherwise carry forward
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        return prev + 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTimer(0);
    intervalRef.current = null;
  };

  return (
    <div>
      <div>{timer}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default TimerCred;
