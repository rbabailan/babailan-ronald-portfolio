import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import menu from "../img/menu.png";
import exit from "../img/exit.png";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const [checkWidth, setCheckWidth] = useState(window.innerWidth);

  const animations = {
    initial: { opacity: 1, x: "100vw" },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

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
              <img src={exit} width="36px" />
            </button>
          </div>
        )}
        <nav>
          <ul>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/About">About & Skills</Link>
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
