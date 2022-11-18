import { useNavigate } from "react-router-dom";
import BackIcon from "../../img/BackIcon.png";
import { motion } from "framer-motion";
import style from "./Projects.module.css";
import chasyPhotos from "../../img/chasy.png";
import ProjectsList from "./ProjectsList";
import ProjectsListReverse from "./ProjectsListReverse";

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
                    className={style.backButton} onClick={() => navigate("/")}>
                    <img className={style.backIcon} src={BackIcon} alt="back icon" />
                </motion.button>
            </div>
            <div className={style.projectsDiv}>
                <div className={style.projectTitle}>
                    <h2>PROJECTS</h2>
                    <p>These are the projects I've created.</p>
                </div>
                <ProjectsList img={chasyPhotos} title={"Mobile Facebook Clone"}>
                    <p className={style.techStack}>Tech Stack</p>
                    <ul>
                        <li>Reactjs</li>
                        <li>Material UI</li>
                        <li>Firebase</li>
                    </ul>
                </ProjectsList>
                <ProjectsListReverse img={chasyPhotos} title={"Chasy Products"}>
                    <p className={style.techStack}>Tech Stack</p>
                    <ul>
                        <li>HTML</li>
                        <li>HTML</li>
                        <li>HTML</li>
                        <li>HTML</li>
                        <li>HTML</li>
                        <li>HTML</li>
                    </ul>
                </ProjectsListReverse>
                <ProjectsList img={chasyPhotos} title={"Chasy Products"}>
                    <p className={style.techStack}>Tech Stack</p>
                    <ul>
                        <li>HTML</li>
                        <li>HTML</li>
                        <li>HTML</li>
                        <li>HTML</li>
                        <li>HTML</li>
                        <li>HTML</li>
                    </ul>
                </ProjectsList>
                <ProjectsListReverse img={chasyPhotos} title={"Chasy Products"}>
                    <p className={style.techStack}>Tech Stack</p>
                    <ul>
                        <li>HTML</li>
                        <li>HTML</li>
                        <li>HTML</li>
                        <li>HTML</li>
                        <li>HTML</li>
                        <li>HTML</li>
                    </ul>
                </ProjectsListReverse>
                <ProjectsList img={chasyPhotos}
                    title={"Web Admin Panel"}
                    desc={"This is connected to our mobile ordering system. This web panel manage the orders in the mobile ordering system."}>
                    <p className={style.techStack}>Tech Stack</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Javascript</li>
                        <li>Php</li>
                        <li>Firebase</li>
                    </ul>
                </ProjectsList>
                <ProjectsListReverse img={chasyPhotos} title={"Mobile Ordering System"}
                    desc={"This is connected to our mobile ordering system. This web panel manage the orders in the mobile ordering system."}>
                    <p className={style.techStack}>Tech Stack</p>
                    <ul>
                        <li>Android Studio</li>
                        <li>Java</li>
                        <li>Adobe XD</li>
                        <li>Firebase</li>
                    </ul>
                </ProjectsListReverse>

            </div>
        </div>
    );
}

export default Projects;
