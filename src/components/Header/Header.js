import React, { useState } from "react";
import { LOGO_URL } from "../../utils.js/constant";
import "./style.css";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
        <li>
          <button className="login-btn" onClick={handleLogin}>
            {isLogin ? "Login" : "Logout"}
          </button>
        </li>
      </div>
    </div>
  );
};

export default Header;
