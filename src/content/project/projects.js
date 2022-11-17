import ProjectsList from "./projectsList";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../img/BackIcon.png";
import { motion } from "framer-motion";
import style from "./projects.module.css";
import chasyPhotos from "../../img/chasy.png";

function Projects() {
    const navigate = useNavigate();
    return (
        <div>
            <div className={style.clipPath}></div>
            <div style={{ position: "absolute", zIndex: "1" }}>
                <motion.button
                    initial={{ scale: 0, rotate: 360 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1 }}
                    className={style.backButton} onClick={() => navigate("/")}>
                    <img className={style.backIcon} src={BackIcon} alt="back icon" />
                </motion.button>
            </div>
            <div className={style.projectsDiv}>
                <h2>PROJECTS</h2>
                <ProjectsList img={chasyPhotos} title={"Chasy Products"}>
                </ProjectsList>
                <ProjectsList img={chasyPhotos} text={"cqweigbcqwecqwe"} title={"Chasy Products"}></ProjectsList>
                <ProjectsList img={chasyPhotos} text={"cqweigbcqwecqwe"} title={"Chasy Products"}></ProjectsList>
            </div>
        </div>
    );
}

export default Projects;
