import React, { useState } from "react";
import resData from "../../../resData.json";
import { RestaurantCard } from "../RestaurantCard";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState(resData);

  const filterTopRatedRes = () => {
    const filterRes = restaurantData.filter((rest) => rest.rating >= 4.5);
    console.log(filterRes);

    setRestaurantData(filterRes);
  };

  return (
    <div className="body-container">
      <div className="search">
        <button onClick={filterTopRatedRes}> Top rated</button>
      </div>
      <div className="rest-container">
        {restaurantData.map((restaurant) => {
          const {
            name,
            costForTwo,
            areaName,
            cloudinaryImageId,
            rating,
            ratingCount,
          } = restaurant;
          return (
            <RestaurantCard
              key={name}
              name={name}
              costForTwo={costForTwo}
              areaName={areaName}
              cloudinaryImageId={cloudinaryImageId}
              rating={rating}
              ratingCount={ratingCount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
