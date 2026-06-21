import React from "react";
import { BASE_IMAGE_URL } from "../../utils.js/constant";

const RestaurantCard = ({
  name,
  costForTwo,
  areaName,
  cloudinaryImageId,
  rating,
  ratingCount,
}) => {
  const imgUrl = BASE_IMAGE_URL + cloudinaryImageId;

  return (
    <div className="border border-solid border-[#ccc] rounded-[5px] cursor-pointer hover:scale-[1.01] hover:shadow h-full">
      <div className="rest-banner-wrapper p-1">
        <img className="h-[150px] w-[100%] rounded-[5px]" src={imgUrl} />
      </div>
      <h3 className="m-1.5">{name}</h3>
      <h4 className="m-1.5">{costForTwo}</h4>
      <p className="m-1.5">{areaName}</p>
      <p className="m-1.5">
        {rating} ({ratingCount})
      </p>
    </div>
  );
};

// Higher Order Component
export const withDealLabel = (RestaurantCard) => {
  return (rest) => {
    return (
      <div>
        <div className="bg-black text-white p-1.5 rounded-sm absolute z-[2]">
          {rest.deal.header} {rest.deal?.subHeader}
        </div>
        <RestaurantCard {...rest} />
      </div>
    );
  };
};

export default RestaurantCard;
