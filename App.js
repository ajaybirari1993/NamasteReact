import React from "react";
import { createRoot } from "react-dom/client";
import resData from "./resData.json";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://static.vecteezy.com/system/resources/previews/015/707/706/non_2x/online-food-app-icon-or-food-shop-location-logo-also-online-restaurant-location-template-free-vector.jpg" />
      </div>
      <div className="nav-items">
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </div>
    </div>
  );
};

const RestaurantCard = ({ name, costForTwo, areaName, cloudinaryImageId }) => {
  const imgUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    cloudinaryImageId;
  return (
    <div className="rest-card">
      <div className="rest-banner-wrapper">
        <img src={imgUrl} />
      </div>
      <h3>{name}</h3>
      <h4>{costForTwo}</h4>
      <p>{areaName}</p>
    </div>
  );
};

const Body = () => {
  const restaurantData = resData;
  console.log(restaurantData);

  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="rest-container">
        {restaurantData.map((restaurant) => {
          const { name, costForTwo, areaName, cloudinaryImageId } =
            restaurant.info;
          return (
            <RestaurantCard
              key={name}
              name={name}
              costForTwo={costForTwo}
              areaName={areaName}
              cloudinaryImageId={cloudinaryImageId}
            />
          );
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Body />
      <p>Footer</p>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
// root.render(HeadingComponent()); ==> using the function call pattern
root.render(<AppLayout />); // ==> using the HTML tag pattern
