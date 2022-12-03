import React from "react";
import style from "./About.module.css";
import { motion } from "framer-motion";
import List from "./list/list";
import BackButton from "../../component/BackButton";

function About() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", zIndex: "1" }}>
          <BackButton />
        </div>
      </div>
      <div className={style.aboutSection}>
        <div className={style.flexSB}>
          <div className={style.aboutPart}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className={style.hireContainer}>
              <div className={style.aboutPartTitle}>
                <h2>WHY SHOULD YOU HIRE ME?</h2>
              </div>
              <div className={style.aboutPartContents}>
                <p>
                  I started to like coding when I was in Senior High, reason why
                  I pursued to study in my higher education Information
                  Technology. Currently, I'm seeking to obtain full-time
                  position as a web developer and join a company that will take
                  advantage of my skills in web development while I gain
                  expertise in Web Development.
                  <br />
                </p>
              </div>
            </motion.div>
          </div>
          <div className={style.skillsPart}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.6 }}
              className={style.skillsContainer}>
              <h2>SKILLS</h2>
              <p>Tech tools and frameworks that I've used.</p>
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
                  <List
                    title={"Version Control & Others"}
                    text={"Git, GitHub, Vercel, 000webhost"}></List>
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
