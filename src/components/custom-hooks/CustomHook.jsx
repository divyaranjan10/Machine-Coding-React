import { useFetch } from "./useFetch/useFetch";
import { useLocalStorage } from "./useLocalStorage/useLocalStorage";

const CustomHook = () => {
  const [name, setName] = useLocalStorage("name", "dp");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <h2>Hello {name}</h2>
    </div>
  );
};

export default CustomHook;
