import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import menu from "../img/MenuIcon.svg";
import exit from "../img/CloseIcon.svg";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const [checkWidth, setCheckWidth] = useState(window.innerWidth);

  const checkFunc = () => {
    setCheckWidth(window.innerWidth);
  };

  const toggleNavFunc = () => {
    setToggleNav(!toggleNav);
  };

  useEffect(() => {
    window.addEventListener("resize", checkFunc);
  });

  return (
    <>
      {checkWidth < 768 && (
        <div style={{ position: "absolute", right: 0 }}>
          <button className={style.menuButton} onClick={toggleNavFunc}>
            <img
              className={style.menuIcon}
              src={menu}
              alt="menu-icon"
              width="36px"
              height="36px"
            />
          </button>
        </div>
      )}
      <div
        className={
          toggleNav ? style.navbarDiv + " " + style.active : style.navbarDiv
        }>
        {checkWidth < 768 && (
          <div style={{ position: "absolute", right: 0, top: 0 }}>
            <button className={style.menuButton} onClick={toggleNavFunc}>
              <img src={exit} width="36px" alt="close-icon" />
            </button>
          </div>
        )}
        <nav>
          <ul>
            <li>
              <Link to="/About">Why Hire Me?</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/contacts">Profiles</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
