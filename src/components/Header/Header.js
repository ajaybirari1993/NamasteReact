import React from "react";
import { LOGO_URL } from "../../utils.js/constant";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </div>
    </div>
  );
};

export default Header;
