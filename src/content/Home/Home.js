import React from "react";
import style from "./Home.module.css";
import { m } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={style.flexSB}>
      <m.div
        exit={{ opacity: 0, transition: { duration: 0.25 } }}
        className={style.homeInfo}>
        <m.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className={style.name}>
          RONALD BABAILAN
        </m.h2>
        <m.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
          className={style.work}>
          Web Developer
        </m.h4>
        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className={style.tagline}>
          Fueled by a passion for building interactive, responsive websites and
          driven to stay ahead of the curve by exploring the latest technology
          tools!
        </m.p>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className={style.buttonsWrapper}>
          <Link className={style.explore} to="/about">
            Explore
          </Link>
          <Link className={style.contact} to="/contacts">
            Get in Touch
          </Link>
        </m.div>
      </m.div>
    </div>
  );
}

export default Home;
