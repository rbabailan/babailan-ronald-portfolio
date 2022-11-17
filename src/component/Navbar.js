import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={style.navbarDiv}>
            <div>
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
        </div>
    );
}

export default Navbar