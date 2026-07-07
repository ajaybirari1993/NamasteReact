import React, { useRef, useState, useEffect } from "react";

const About = () => {
  const count = useRef(1);
  const [color, setColor] = useState("red");

  useEffect(() => {
    console.log("count updated", count.current);
  }, [count.current]);

  const incCount = () => {
    count.current++;
    console.log("incCount", count.current);
  };

  const changeColor = () => {
    setColor((color) => (color === "blue" ? "red" : "blue"));
    console.log("changeColor", color);
  };

  return (
    <div>
      <div>This is About Page</div>

      <button
        onClick={incCount}
        className="p-2 m-2 bg-black text-white border border-solid border-[#ccc] rounded-sm"
      >
        inc count
      </button>
      <button
        onClick={changeColor}
        className="p-2 m-2 bg-black text-white border border-solid border-[#ccc] rounded-sm"
      >
        change color
      </button>
    </div>
  );
};

export default About;
