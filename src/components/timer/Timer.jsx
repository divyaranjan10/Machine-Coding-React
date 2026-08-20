import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const endTimeRef = useRef(null);

  const convertToMs = (hours, minutes, seconds) => {
    return (
      Number(hours) * 60 * 60 * 1000 +
      Number(minutes) * 60 * 1000 +
      Number(seconds) * 1000
    );
  };

  const handleStart = () => {
    const totalMs = convertToMs(hours, minutes, seconds);

    //base case
    if (totalMs <= 0) return;

    endTimeRef.current = Date.now() + totalMs;
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    endTimeRef.current = null;
  };

  const handleInputChange = (value, type) => {
    // Allow empty input while editing
    if (value === "") {
      if (type === "hours") setHours("");
      if (type === "minutes") setMinutes("");
      if (type === "seconds") setSeconds("");
      return;
    }

    // Only allow digits
    if (!Number.isInteger(Number(value))) return;

    const number = Number(value);

    if (type === "hours" && number <= 99) {
      setHours(value);
    }

    if (type === "minutes" && number <= 59) {
      setMinutes(value);
    }

    if (type === "seconds" && number <= 59) {
      setSeconds(value);
    }
  };

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      const remaining = endTimeRef.current - Date.now();

      //base case
      if (remaining <= 0) {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setIsRunning(false);
        clearInterval(intervalId);
        return;
      }

      const totalSeconds = Math.ceil(remaining / 1000);

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = Math.floor(totalSeconds % 60);

      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 100);

    //cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div>
      <input
        type="text"
        className="border w-10"
        placeholder="HH"
        value={hours}
        onChange={(e) => handleInputChange(e.target.value, "hours")}
      />
      <input
        type="text"
        className="border w-10"
        placeholder="MM"
        value={minutes}
        onChange={(e) => handleInputChange(e.target.value, "minutes")}
      />
      <input
        type="text"
        className="border w-10"
        placeholder="SS"
        value={seconds}
        onChange={(e) => handleInputChange(e.target.value, "seconds")}
      />

      <div>
        <button
          className="bg-gray-200 border border-gray-500 p-1 m-2"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="bg-gray-200 border border-gray-500 p-1 m-2"
          onClick={handlePause}
        >
          Pause
        </button>
        <button
          className="bg-gray-200 border border-gray-500 p-1 m-2"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
