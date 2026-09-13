import { useState } from "react";

const SearchOptions = () => {
  const [selected, setSelected] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [highlightedOption, setHighlightedOption] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);

  const availableOptions = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Grape",
    "Lemon",
    "Mango",
    "Orange",
    "Papaya",
    "Pineapple",
    "Strawberry",
    "Watermelon",
  ];

  const filteredOptions = availableOptions
    .filter((options) =>
      options.toLowerCase().includes(inputValue.toLowerCase()),
    )
    .filter((option) => !selected.includes(option));

  // ArrowDown → increase index, but don't go beyond last item.
  // ArrowUp → decrease index, but don't go below 0.
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const item = filteredOptions[highlightedOption];

      if (item) handleSelect(item);
    }

    if (e.key === "ArrowDown") {
      if (filteredOptions.length === 0) return;
      setHighlightedOption((prev) =>
        Math.min(prev + 1, filteredOptions.length - 1),
      );
    }

    if (e.key === "ArrowUp") {
      setHighlightedOption((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleSelect = (item) => {
    setSelected((prev) => [...prev, item]);
    setInputValue("");
    setHighlightedOption(-1);
    setIsFocused(false);
  };

  const removeFromSelected = (tag) => {
    setSelected((prev) =>
      prev.filter((item) => {
        return item !== tag;
      }),
    );
  };

  return (
    <div className="dropdown-wrapper">
      {/* TODO: Render selected tags */}
      <div className="m-3">
        {selected.map((tag) => (
          <span key={tag} className="bg-red-200 py-1 px-2 m-1 rounded-lg">
            <span>{tag}</span>
            <button
              className="ml-3 bg-white p-1 rounded-lg"
              onClick={() => removeFromSelected(tag)}
            >
              X
            </button>
          </span>
        ))}
      </div>

      <input
        data-testid="search-input"
        placeholder="Search fruits..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setIsFocused(true);
          setHighlightedOption(0);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
        onFocus={() => {
          setIsFocused(true);
          setHighlightedOption(0);
        }}
        onBlur={() => setIsFocused(false)}
      />

      {isFocused && (
        <div className="bg-blue-50 p-2 rounded-sm">
          {filteredOptions.length === 0 ? (
            <div>No options available</div>
          ) : (
            filteredOptions.map((item, index) => (
              <div
                key={item + index}
                onMouseDown={() => handleSelect(item)}
                className={highlightedOption === index ? "bg-amber-300" : ""}
                onMouseEnter={() => setHighlightedOption(index)}
              >
                {item}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchOptions;
