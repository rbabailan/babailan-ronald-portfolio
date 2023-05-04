import React from "react";
import style from "./Card.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LinesEllipsis from "react-lines-ellipsis";
import { m } from "framer-motion";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

const ProjectLink = ({ link, icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={style.projectLink}>
      <i className={icon}></i>
    </a>
  );
};

const CardAnimation = ({ number, children }) => {
  return (
    <m.div
      initial={{ opacity: 0, x: -100 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          delay: number * 0.15,
        },
      }}
      whileHover={{
        scale: 1.04,
        transition: {
          type: "spring",
          delay: 0,
        },
      }}
      className={style.card}>
      {children}
    </m.div>
  );
};

export default function ProjectsList({
  title,
  desc,
  type,
  githubLink,
  liveLink,
  techStackLogos,
  number,
}) {
  const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);
  return (
    <CardAnimation number={number}>
      <h1 className={style.title}>{title}</h1>
      <h4>{`(${type})`}</h4>
      <div className={style.descWrapper}>
        <ResponsiveEllipsis text={desc} maxLine="1" ellipsis="..." />
      </div>
      <div className={style.techStacks}>
        {techStackLogos && (
          <ul>
            {techStackLogos.map((data, index) => (
              <li key={index}>
                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center ",
                  }}>
                  <img src={data} alt={data} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={style.projectLinks}>
        <ProjectLink link={githubLink} icon="fa-brands fa-github" />
        <ProjectLink
          link={liveLink}
          icon="fa-solid fa-arrow-up-right-from-square"
        />
      </div>
    </CardAnimation>
  );
}
