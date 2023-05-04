import React, { useState, useEffect } from "react";
import { m } from "framer-motion";
import style from "./Projects.module.css";
import Card from "./Card";
import { buttons } from "../../data/buttonsData";
import { getTechStack } from "../../services/getTechStack";
import { filterTechStack } from "../../services/filterTechStack";

function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(null);
  const [clicked, isClicked] = useState(0);

  useEffect(() => {
    setFilteredProjects(getTechStack());
  }, []);

  function handlePokemon(e) {
    isClicked = 0;
    let techStack = e.target.value;
    techStack !== "all"
      ? setFilteredProjects(filterTechStack(techStack))
      : setFilteredProjects(getTechStack());
  }

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className={style.projectsDiv}>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={style.projectTitle}>
          <h2>PROJECTS</h2>
          <p>These are the projects I've created.</p>
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className={style.projectbuttonWrapper}>
          {buttons &&
            buttons.map((type, index) => (
              <button key={index} value={type.value} onClick={handlePokemon}>
                {type.name}
              </button>
            ))}
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          key={filteredProjects}
          className={style.projectLists}>
          {filteredProjects &&
            filteredProjects.map((data, index) => (
              <Card
                key={index}
                number={index}
                mImgData={data.mImgData}
                title={data.title}
                type={data.type}
                desc={data.desc}
                liveLink={data.liveLink}
                githubLink={data.githubLink}
                techStackLogos={data.techStackLogos}
              />
            ))}
        </m.div>
      </div>
    </div>
  );
}

export default Projects;
