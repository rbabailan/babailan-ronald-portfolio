import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import style from "./ProjectsList.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProjectsList(props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [isLoaded, setIsLoaded] = useState(false);

  const RightToLeft = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };

  const LeftToRight = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    if (inView) {
      setIsLoaded(true);
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <div className={style.projectsList}>
      <motion.div
        ref={ref}
        variants={LeftToRight}
        initial="initial"
        animate={controls}
        transition={{ duration: 1 }}
        className={style.primaryImg}>
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={false}
          transitionTime={500}
          transition={true}
          autoPlay={isLoaded}
          interval={5000}>
          {props.mImgData.map((data, index) => (
            <div key={index}>
              <img src={data.img} alt={data.alt} />
            </div>
          ))}
        </Carousel>
      </motion.div>
      <motion.div
        ref={ref}
        variants={RightToLeft}
        initial="initial"
        animate={controls}
        transition={{ duration: 1 }}
        className={style.description}>
        <h1 className={style.title}>{props.title}</h1>
        <p className={style.paragraph}>{props.desc}</p>
        <div className={style.projectLinks}>
          <span>
            Live URL: Click
            <a href={props.liveLink} target="_blank">
              Here
            </a>
          </span>
          <span>
            Github URL: Click
            <a href={props.githubLink} target="_blank">
              Here
            </a>
          </span>
        </div>
        <div className={style.techStacks}>
          <p>Tech Stack</p>
          <ul>
            {props.techStackLists.map((data, index) => (
              <li key={index}>{data.techLists}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectsList;
