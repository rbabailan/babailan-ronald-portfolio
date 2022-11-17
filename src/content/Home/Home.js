import React from "react";
import style from "./Home.module.css";
import { motion } from 'framer-motion';
import Navbar from "../../component/Navbar";
import ProfilePic from "../../img/ronald.png";
import { Link } from "react-router-dom";

function Home() {
    const animations = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 }
    }

    return (
        <div style={{ overflowX: "hidden" }}>
            <motion.div
                className={style.contentStyle}></motion.div>
            <Navbar />
            <div className={style.flexSB}>
                <motion.div
                    variants={animations}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 1 }}
                    className={style.homeInfo}>
                    <h4 className={style.homeInfoMe}>RONALD BABAILAN</h4>
                    <h4 className={style.homeInfoWork}>Web Developer</h4>
                    <p className={style.homeInfoP}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel imperdiet risus. Proin consequat diam et lacus luctus, id pellentesque augue elementum. Vivamus congue tellus nec nunc scelerisque, ac bibendum nibh pellentesque. Ut euismod erat lectus, nec suscipit velit condimentum eu. Sed neque nunc, malesuada id vehicula eu, euismod id mi.
                    </p>
                    <button className={style.pickMeButton}><Link to="/About">Explore</Link></button>
                </motion.div>
                <div className={style.homeImg}>
                    <motion.img className={style.imgStyle} src={ProfilePic} alt="Babailan Ronald" />
                </div>
            </div>
        </div >
    );
}

export default Home