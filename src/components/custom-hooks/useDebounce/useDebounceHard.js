import { useCallback, useState } from "react";

const useDebounceHard = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const debouncedFunc = useCallback(debounce(setDebouncedValue, delay), []);

  debouncedFunc(value);

  return debouncedValue;
};

function debounce(cb, delay) {
  let timerId;
  return function (...args) {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

export default useDebounceHard;
