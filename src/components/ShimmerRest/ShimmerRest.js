import React from "react";
import "./style.css";

const ShimmerRest = () => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 10 }).map((card, index) => {
        return <div className="shimmer-rest-card" key={index} />;
      })}
    </div>
  );
};

export default ShimmerRest;
