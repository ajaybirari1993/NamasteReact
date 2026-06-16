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
    <div className="border border-solid border-[#ccc] rounded-[5px] cursor-pointer hover:scale-[1.01] hover:shadow">
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

export default RestaurantCard;
