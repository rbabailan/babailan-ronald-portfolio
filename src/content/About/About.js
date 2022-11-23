import React from "react";
import style from "./About.module.css";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../img/BackIcon.png";
import { motion } from "framer-motion";
import List from "./list/list";

function About() {
  const navigate = useNavigate();
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className={style.clipPath}></div>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", zIndex: "1" }}>
          <motion.button
            initial={{ scale: 0, rotate: 360 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className={style.backButton}
            onClick={() => navigate("/")}>
            <img className={style.backIcon} src={BackIcon} alt="back icon" />
          </motion.button>
        </div>
      </div>
      <div className={style.aboutSection}>
        <div className={style.flexSB}>
          <div className={style.aboutPart}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}>
              <div className={style.aboutPartTitle}>
                <h2>ABOUT</h2>
                <p>My Education, Interests, etc.</p>
              </div>
              <div className={style.aboutPartContents}>
                <h2>Introduction</h2>
                <p>
                  I started to like coding when I was in Senior High. Then I
                  studied Information Technology from STI.
                  <br />
                </p>
                <h2>Education</h2>
                <p>2018 - 2022</p>
                <p>Bachelor of Science in Information Technology</p>
                <p>STI College Caloocan</p>
                <h2>Hobbies</h2>
                <p>
                  My most hobby is playing basketball ever since I was High
                  school student. In fact, I was varsity player in high school
                  to senior high.
                  <br />
                </p>
                <p>109 Samson Road corner Caimito Street, Caloocan City 1400</p>
              </div>
            </motion.div>
          </div>
          <div className={style.skillsPart}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}>
              <div className={style.skillsPartTitle}>
                <h2>SKILLS</h2>
                <p>Tech tools and frameworks that I've used.</p>
              </div>
              <div className={style.skillsPartContents}>
                <ul className={style.hardSkillsLists}>
                  <List
                    title={"Front-End Tools"}
                    text={"HTML CSS Javascript"}></List>
                  <List
                    title={"Framework/Library "}
                    text={"React Framer Motion Bootstrap"}></List>
                  <List
                    title={"Database management"}
                    text={"MySQL Firebase MongoDB"}></List>
                  <List
                    title={"Programming languages"}
                    text={"Python Java PHP"}></List>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
