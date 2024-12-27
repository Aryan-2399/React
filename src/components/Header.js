import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const online = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-cont">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-menu">
        <ul>
         <li>
            Online Status: {online? "✅":"🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
        <div className="login-btn">
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {!isLoggedIn ? "Login" : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
};
