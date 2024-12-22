import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
      <div className="header">
        <div className="logo-cont">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-menu">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
          <div className="login-btn">
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{!isLoggedIn? 'Login': 'Logout'}</button>
          </div>
        </div>
      </div>
    );
  };