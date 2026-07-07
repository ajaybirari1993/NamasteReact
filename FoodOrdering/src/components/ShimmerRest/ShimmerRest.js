import React from "react";

const ShimmerRest = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 ">
      {Array.from({ length: 10 }).map((card, index) => {
        return (
          <div
            className="h-[300px] w-[300px] bg-[#ccc] border border-solid border-[#ccc] rounded-[5px]"
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ShimmerRest;
