import { useRef, useState } from "react";

const ProgressBarsQ = () => {
  // create a state that will maintain the bars
  const [bars, setBars] = useState([]);
  // to know the active bar
  const [activeBar, setActiveBar] = useState(null);

  // a better approach than Date.now() would be using useRef() because it will give different and unique number everytime, so it's safe.
  const idRef = useRef(0);

  const handleAdd = () => {
    idRef.current += 1;

    const newBar = {
      //   id: Date.now(),
      id: idRef.current,
      completed: false,
    };

    setBars((prevBars) => [...prevBars, newBar]);

    //for the first time
    if (activeBar === null) {
      setActiveBar(newBar.id);
    }
  };

  const handleAnimationEnd = (id) => {
    if (id !== activeBar) return;

    setBars((prevBars) =>
      prevBars.map((bar) =>
        bar.id === id ? { ...bar, completed: true } : bar,
      ),
    );

    const currentIndex = bars.findIndex((bar) => bar.id === id);

    const nextBar = bars[currentIndex + 1];

    //if the nextbar exists
    if (nextBar) {
      setActiveBar(nextBar.id);
    } else {
      setActiveBar(null);
    }
  };

  return (
    <div className="main-container">
      <button className="progress-btn" onClick={handleAdd}>
        Add
      </button>

      <div className="progress-bars-list">
        {bars.map((bar) => (
          <div className="progress-bar-container" key={bar.id}>
            <div
              className={`progress-bar ${bar.id === activeBar ? "active" : ""} ${bar.completed ? "completed" : ""}`}
              onAnimationEnd={() => handleAnimationEnd(bar.id)}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBarsQ;
