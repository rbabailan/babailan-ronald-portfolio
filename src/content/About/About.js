import React from "react";
import style from "./About.module.css";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../img/BackIcon.png";
import { motion } from "framer-motion";

function About() {
    const navigate = useNavigate();
    return (
        <div style={{ overflowX: "hidden" }}>
            <div style={{ position: "absolute", zIndex: "1" }}>
                <motion.button
                    initial={{ scale: 0, rotate: 360 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1 }}
                    className={style.backButton} onClick={() => navigate(-1)}>
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
                            <p className={style.aboutPartTitle}>ABOUT</p>
                            <p className={style.aboutPartParagraph}>I started to like coding when I was in Senior High. Then I studied Information Technology from STI </p>
                        </motion.div>
                    </div>
                    <div className={style.skillsPart}>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <p className={style.skillsPartTitle}>SKILLS</p>
                            <p className={style.aboutPartParagraph}>Soft Skills</p>
                            <p className={style.skillsPartParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel imperdiet risus. Proin consequat diam et lacus luctus, id pellentesque augue elementum. Vivamus congue tellus nec nunc scelerisque, ac bibendum nibh pellentesque. Ut euismod erat lectus, nec suscipit velit condimentum eu. Sed neque nunc, malesuada id vehicula eu, euismod id mi.</p>
                            <p className={style.aboutPartParagraph}>Hard Skills</p>
                            <ul className={style.hardSkillsLists} >
                                <li>
                                    PHP
                                </li>
                                <li>
                                    PHP
                                </li>
                                <li>
                                    PHP
                                </li>
                                <li>
                                    PHP
                                </li>
                                <li>
                                    PHP
                                </li>
                                <li>
                                    PHP
                                </li>
                                <li>
                                    PHP
                                </li>
                                <li>
                                    PHP
                                </li>
                                <li>
                                    PHP
                                </li>
                                <li>
                                    PHP
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div >
    );
}

export default About