import { useEffect, useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("counter");

    return savedCount !== null ? Number(savedCount) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem("counter", count);
  }, [count]);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  function reset() {
    setCount(initialValue);
  }

  return {
    count,
    increment,
    decrement,
    reset,
  };
}
