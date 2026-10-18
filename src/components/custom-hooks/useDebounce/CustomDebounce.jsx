import { useState } from "react";
import useDebounce from "./useDebounce";
import useDebounceHard from "./useDebounceHard";

const CustomDebounce = () => {
  const [search, setSearch] = useState("");

  const debouncedValue = useDebounceHard(search, 500);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h4>Normal: {search}</h4>
      <h4>Debounced: {debouncedValue}</h4>
    </div>
  );
};

export default CustomDebounce;
