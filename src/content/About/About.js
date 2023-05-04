import React from "react";
import style from "./About.module.css";
import { m } from "framer-motion";
import List from "./List";
import {
  WebTools,
  ProgLang,
  VCAndOthers,
  DatabaseAndWH,
} from "../../data/LogosData";

function About() {
  return (
    <div className={style.flexSB}>
      <m.div exit={{ opacity: 0 }} className={style.aboutWrapper}>
        <m.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          KNOW ME BETTER.
        </m.h2>
        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className={style.introduction}>
          I started to like coding when I was in Senior High, reason why I
          pursued to study in my higher education Information Technology.
          Currently, I'm seeking to obtain full-time position as a web developer
          and join a company that will take advantage of my skills in web
          development while I gain expertise in Web Development.
        </m.p>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={style.educationWrapper}>
          <h4>EDUCATION</h4>
          <p>Bachelor of Science in Information Technology</p>
          <p>STI Caloocan College</p>
          <p>Aug 25, 2022</p>
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className={style.skillsWrapper}>
          <h4>SKILLS</h4>
          <p>Tech tools and frameworks that I've used.</p>
          <ul>
            <List title={"Web Technologies Tools"} ImageLogos={WebTools} />
            <List title={"Programming languages"} ImageLogos={ProgLang} />
            <List
              title={"Database/Web Hosting Services"}
              ImageLogos={DatabaseAndWH}
            />
            <List title={"Version Control & Others"} ImageLogos={VCAndOthers} />
          </ul>
        </m.div>
      </m.div>
    </div>
  );
}

export default About;
