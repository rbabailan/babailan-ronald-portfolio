import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import { motion } from "framer-motion";
import Navbar from "../../component/Navbar";
import ProfilePic from "../../img/ronald.png";
import { Link } from "react-router-dom";

function Home() {
  const animations = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className={style.contentStyle}></div>
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
          <h4 className={style.homeInfoWork}>Reactjs Developer</h4>
          <p className={style.homeInfoP}>
            I am Reactjs developer that loves to build a website. I also like to
            explore more web technology tools.
          </p>
          <button className={style.pickMeButton}>
            <Link to="/Contacts">HIRE ME</Link>
          </button>
        </motion.div>
        <div className={style.homeImg}>
          <motion.img
            className={style.imgStyle}
            src={ProfilePic}
            alt="Babailan Ronald"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
