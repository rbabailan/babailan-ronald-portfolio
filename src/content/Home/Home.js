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
    exit: { opacity: 0, x: -100 },
  };

  return (
    <motion.div style={{ overflowX: "hidden" }}>
      <motion.div className={style.contentStyle}></motion.div>
      <Navbar />
      <div className={style.flexSB}>
        <motion.div
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6 }}
          className={style.homeInfo}>
          <h4 className={style.homeInfoMe}>RONALD BABAILAN</h4>
          <h4 className={style.homeInfoWork}>Web Developer</h4>
          <p className={style.homeInfoP}>
            I am Web developer that loves to build an apps. I also like to
            explore more web technology tools.
          </p>
          <button className={style.pickMeButton}>
            <a href="Babailan_Ronald_CV.pdf" download="Babailan_Ronald_CV.pdf">
              Download CV
            </a>
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
    </motion.div>
  );
}

export default Home;
