import React, { useState } from "react";
import { Button } from "react-bootstrap";
import menuItems from "./MenuItems";


const AuthNavbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="authNavbar-container">
      <nav className="navbar">
        <a href="/">
          {" "}
          <img src="/assets/Logo.png" alt="profile" className="navbar-logo" />
        </a>

        <div className="menu-icon" onClick={handleClick}>
          <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div className="menu-row">
          <ul className={active ? "nav-menu active" : "nav-menu"}>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url} className={item.cName}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="nav-buttons">
            <Button className="nav-creditsBtn">5 Credits Remaining</Button>
            <Button className="nav-letterBtn">Create Letter</Button>
            <img
              src="/assets/Avatar.png"
              alt="profile"
              className="nav-profile"
            />
          </div>
        </div>

        {/* <img src="/assets/Avatar.png" alt="profile"/> */}
      </nav>
    </div>
  );
};

export default AuthNavbar;
