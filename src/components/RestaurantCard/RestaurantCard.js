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
    <div className="rest-card">
      <div className="rest-banner-wrapper">
        <img src={imgUrl} />
      </div>
      <h3>{name}</h3>
      <h4>{costForTwo}</h4>
      <p>{areaName}</p>
      <p>
        {rating} ({ratingCount})
      </p>
    </div>
  );
};

export default RestaurantCard;
