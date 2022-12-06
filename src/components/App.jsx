import React, { useState } from "react";

const App = () => {
  const [time, setTime] = useState("TIME");
  const [isInterval, setIsInterval] = useState(false);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button
        style={{ display: isInterval ? "none" : "inline" }}
        onClick={() => {
          setTime(new Date().toLocaleTimeString("en-UK", { hour12: false }));
        }}
      >
        {time === "TIME" ? "Get Time" : "Update Time"}
      </button>
      <button
        style={{ display: time === "TIME" || isInterval ? "none" : "inline" }}
        onClick={() => {
          setIsInterval(true);
          setInterval(() => {
            setTime(new Date().toLocaleTimeString("en-UK", { hour12: false }));
          }, 1000);
        }}
      >
        Update Time Every Sec
      </button>
    </div>
  );
};

export default App;
