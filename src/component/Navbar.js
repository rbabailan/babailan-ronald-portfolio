import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from "./Navbar.module.css";
import menu from "../img/menu.png";


function Navbar() {
    const [toggleNav, setToggleNav] = useState(false);
    const [checkWidth, setCheckWidth] = useState(window.innerWidth);
    // const isActive = () => {
    //     setActive(true);
    //     console.log("set!");
    // }

    const checkFunc = () => {
        console.log(checkWidth);
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
            {
                checkWidth < 768 &&
                <div style={{ position: "absolute", right: 0 }}>
                    <button className={style.menuButton} onClick={toggleNavFunc}>
                        <img clasName={style.menuIcon} src={menu} alt="menu-icon" width="36px" />
                    </button>
                </div>
            }
            <div className={toggleNav ? style.navbarDivMobile : style.navbarDiv}>
                {
                    checkWidth < 768 &&
                    <div>
                        <button onClick={toggleNavFunc}><img src={menu} width="36px" /></button>
                    </div>
                }
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
            </div >
        </>
    );
}

export default Navbar