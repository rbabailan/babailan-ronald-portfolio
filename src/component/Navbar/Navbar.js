import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import menu from "../../img/MenuIcon.svg";
import exit from "../../img/CloseIcon.svg";

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
        <div style={{ position: "absolute", right: 0, top: 0 }}>
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
        <div>
          <nav>
            <ul>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? style.active : style.link
                  }
                  to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? style.active : style.link
                  }
                  to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? style.active : style.link
                  }
                  to="/projects">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? style.active : style.link
                  }
                  to="/contacts">
                  Contact
                </NavLink>
              </li>
              <li>
                <Link
                  className={style.resumeLink}
                  to="Babailan_Ronald.pdf"
                  target="_blank">
                  resume
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
