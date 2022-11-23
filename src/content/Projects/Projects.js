import { useNavigate } from "react-router-dom";
import BackIcon from "../../img/BackIcon.png";
import { motion } from "framer-motion";
import style from "./Projects.module.css";
import ProjectsList from "./ProjectsList";
import projectsData from "../../data/projectsData";

function Projects() {
  const navigate = useNavigate();
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className={style.clipPath}></div>
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
      <div className={style.projectsDiv}>
        <div className={style.projectTitle}>
          <h2>PROJECTS</h2>
          <p>These are the projects I've created.</p>
        </div>
        {projectsData.map((data, index) => {
          return (
            <ProjectsList
              key={index}
              mImgData={data.mImgData}
              title={data.title}
              desc={data.desc}
              liveLink={data.liveLink}
              githubLink={data.githubLink}
              techStackLists={data.techStackLists}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
