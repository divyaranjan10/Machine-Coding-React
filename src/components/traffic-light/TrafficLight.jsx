import { useState, useEffect } from "react";

const TrafficLight = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const lights = [
    { color: "red", timer: 3000 },
    { color: "yellow", timer: 1000 },
    { color: "green", timer: 2000 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % lights.length);
    }, lights[activeIndex].timer);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div>
      <h2 data-testid="title">Traffic Lights</h2>
      <div
        className="traffic-light"
        id="traffic-light"
        data-testid="traffic-light"
      >
        <div
          id="red-light"
          data-testid="red-light"
          className={`circle ${activeIndex === 0 ? "red-on" : ""}`}
        ></div>
        <div
          id="yellow-light"
          data-testid="yellow-light"
          className={`circle ${activeIndex === 1 ? "yellow-on" : ""}`}
        ></div>
        <div
          id="green-light"
          data-testid="green-light"
          className={`circle ${activeIndex === 2 ? "green-on" : ""}`}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
