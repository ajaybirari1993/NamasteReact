import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
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
