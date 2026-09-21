import { useState } from "react";

const VirtualisedList = ({ list, height, width, itemHeight }) => {
  // how much we want to show in the specified window
  // Math.floor(height / itemHeight) - it gives the total number of items that can come in the window
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);

  const visibleList = list.slice(indices[0], indices[1] + 1);

  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
    console.log(scrollTop);
    setIndices([newStartIndex, newEndIndex]);
  };
  return (
    <div
      style={{
        height,
        width,
        background: "grey",
        overflow: "auto",
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: list.length * itemHeight, position: "relative" }}>
        {visibleList.map((item, index) => (
          <div
            key={item}
            style={{
              height: itemHeight,
              background: "coral",
              borderTop: "5px solid grey",
              position: "absolute",
              top: (indices[0] + index) * itemHeight,
              width: "100%",
              textAlign: "center",
              color: "whitesmoke",
            }}
          >
            {"Item" + item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualisedList;
