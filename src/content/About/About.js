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
            <div style={{ position: "absolute", zIndex: "1" }}>
                <motion.button
                    initial={{ scale: 0, rotate: 360 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1 }}
                    className={style.backButton}
                    onClick={() => navigate("/")}
                >
                    <img className={style.backIcon} src={BackIcon} alt="back icon" />
                </motion.button>
            </div>

            <div className={style.clipPath}></div>
            <div className={style.aboutSection}>
                <div className={style.flexSB}>
                    <div className={style.aboutPart}>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className={style.aboutPartTitle}>
                                <h2>ABOUT</h2>
                                <p>My Education, Interests, etc.</p>
                            </div>
                            <h2>Introduction</h2>
                            <p className={style.aboutPartParagraph}>
                                I started to like coding when I was in Senior High. Then I
                                studied Information Technology from STI.
                                <br />
                            </p>
                            <h2>Hobbies</h2>
                            <p className={style.aboutPartParagraph}>
                                My most hobby is playing basketball ever since I was High school
                                student. In fact, I was varsity player in high school to senior
                                high.
                                <br />
                            </p>
                            <List title={"Introduction"} text={<p className={style.aboutPartParagraph}>
                                2018 – 2022
                                <br />
                                Bachelor of Science in Information Technology
                                <br />
                                STI College Caloocan,
                                <br />
                                109 Samson Road corner Caimito Street, Caloocan City 1400
                                <br />
                            </p>} />

                        </motion.div>
                    </div>
                    <div className={style.skillsPart}>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className={style.skillsPartTitle}>
                                <h2>SKILLS</h2>
                                <p style={{ textAlign: "center" }}>
                                    Tech tools and frameworks that I've used.
                                </p>
                            </div>
                            <p className={style.aboutPartParagraph}>Soft Skills</p>
                            <p className={style.skillsPartParagraph}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                vel imperdiet risus. Proin consequat diam et lacus luctus, id
                                pellentesque augue elementum. Vivamus congue tellus nec nunc
                                scelerisque, ac bibendum nibh pellentesque. Ut euismod erat
                                lectus, nec suscipit velit condimentum eu. Sed neque nunc,
                                malesuada id vehicula eu, euismod id mi.
                            </p>
                            <p className={style.aboutPartParagraph}>Hard Skills</p>
                            <div className={style.line}></div>
                            <ul className={style.hardSkillsLists}>
                                <List
                                    title={"Programming languages"}
                                    text={"HTML CSS JAVASCRIPT C# JAVA SQL"}
                                ></List>
                                <List
                                    title={"Framework/Library "}
                                    text={"React Sass Nextjs Jsonwebtoken Nodejs Babeljs etc."}
                                ></List>
                                <List
                                    title={"Database management"}
                                    text={"MySQL Firebase MongoDB"}
                                ></List>
                            </ul>
                        </motion.div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default About;
