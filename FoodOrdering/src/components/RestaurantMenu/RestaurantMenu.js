import React, { useEffect } from "react";
import { REST_MENU } from "../../utils.js/constant";

const RestaurantMenu = () => {
  useEffect(() => {
    // fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(REST_MENU);

    const json = await data.json();
  };

  return (
    <div className="menu">
      <h1>Restaurant Name</h1>
      <div className="rest-menu">Menu</div>
    </div>
  );
};

export default RestaurantMenu;
