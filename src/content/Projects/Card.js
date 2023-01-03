import React from "react";
import style from "./Card.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LinesEllipsis from "react-lines-ellipsis";
import { motion } from "framer-motion";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

function ProjectsList(props) {
  const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

  return (
    <motion.div
      whileHover={{
        scale: 1.04,
      }}
      className={style.card}>
      <h1 className={style.title}>{props.title}</h1>
      <h4>{`(${props.type})`}</h4>
      <div className={style.descWrapper}>
        <ResponsiveEllipsis text={props.desc} maxLine="1" ellipsis="... " />
      </div>
      <div className={style.projectLinks}>
        <span>
          Live URL: Click
          <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
            Here
          </a>
        </span>
        <span>
          Github URL: Click
          <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
            Here
          </a>
        </span>
      </div>
      <div className={style.techStacks}>
        <p>Tech Stack</p>
        <ul>
          {props.techStackLists.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default ProjectsList;
