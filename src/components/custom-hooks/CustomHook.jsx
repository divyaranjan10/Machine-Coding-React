import { useCounter } from "./useCounter/useCounter";
import { useFetch } from "./useFetch/useFetch";
import { useLocalStorage } from "./useLocalStorage/useLocalStorage";

const CustomHook = () => {
  const { count, increment, decrement, reset } = useCounter(25);

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CustomHook;
