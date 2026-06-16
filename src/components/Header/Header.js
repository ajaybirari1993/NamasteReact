import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils.js/constant";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center border border-solid border-[#ccc] rounded py-1.5 px-3 ">
      <div className="height">
        <img className="h-[50px] w-[100px]" src={LOGO_URL} />
      </div>
      <div className="flex flex-row py-1.5 px-2 items-center">
        <li className="flex flex-row py-1.5 px-3 list-none text-base">
          <Link className="no-underline" to="/">
            Home
          </Link>
        </li>
        <li className="flex flex-row py-1.5 px-3 list-none text-base">
          <Link className="no-underline" to="/about">
            About us
          </Link>
        </li>
        <li className="flex flex-row py-1.5 px-3 list-none text-base">
          <Link className="no-underline" className="" to="/contact">
            Contact us
          </Link>
        </li>
        <li className="flex flex-row py-1.5 px-3 list-none text-base">
          <Link className="no-underline" to="/cart">
            Cart
          </Link>
        </li>
        <li className="flex flex-row py-1.5 px-3 list-none text-base">
          <button
            className="bg-[#8a2be2] rounded-[4px] p-1.5 text-white border-none cursor-pointer hover:bg-[#9852d8] hover:scale-[1.01]"
            onClick={handleLogin}
          >
            {isLogin ? "Login" : "Logout"}
          </button>
        </li>
      </div>
    </div>
  );
};

export default Header;
