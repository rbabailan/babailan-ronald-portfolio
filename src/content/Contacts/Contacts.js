import React, { useRef } from "react";
import style from "./Contacts.module.css";
import AnimatedPage from "../../component/AnimatedPage";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import BackIcon from "../../img/BackIcon.png";
import emailjs from '@emailjs/browser';
import facebookIcon from "../../img/facebook.svg";
import githubIcon from "../../img/github.svg";
import twitterIcon from "../../img/twitter.svg";
import instagramIcon from "../../img/instagram.svg";
import linkedInIcon from "../../img/linkedin.svg";


function Contacts() {
    const navigate = useNavigate();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_3cte6f7', 'template_jhxrplg', form.current, 'oVvmC_SSiBeA-sAfK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div style={{ overflowX: "hidden" }}>
            <div style={{ position: "absolute", zIndex: "1" }}>
                <motion.button
                    initial={{ scale: 0, rotate: 360 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1 }}
                    className={style.backButton} onClick={() => navigate("/")}>
                    <img className={style.backIcon} src={BackIcon} alt="back icon" />
                </motion.button>
            </div>
            <AnimatedPage>
                <div className={style.contactSection}>
                    <div className={style.flexSB}>
                        <div className={style.contactInfo}>
                            <div style={{ width: "fit-content", margin: "0 auto" }}>
                                <h2>Social Accounts</h2>
                                <a className={style.socialLinks} href="" target="_blank">
                                    <div>
                                        <img src={githubIcon} width="32px" />
                                        <span>@Ronald-Bn</span>
                                    </div>
                                </a>
                                <a className={style.socialLinks} href="https://twitter.com/ronald_bn26" target="_blank">
                                    <div>
                                        <img src={twitterIcon} />
                                        <span>@ronald_bn26</span>
                                    </div>
                                </a>
                                <a className={style.socialLinks} href="https://github.com/Ronald-Bn" target="_blank">
                                    <div>
                                        <img src={linkedInIcon} />
                                        <span>@ronald-babailan</span>
                                    </div>
                                </a>
                                <a className={style.socialLinks} href="https://www.instagram.com/macronald26/" target="_blank">
                                    <div>
                                        <img src={instagramIcon} />
                                        <span>@macronald26</span>
                                    </div>
                                </a>
                                <a className={style.socialLinks} href="https://www.facebook.com/profile.php?id=100009021094163" target="_blank">
                                    <div>
                                        <img src={facebookIcon} />
                                        <span>@Ronald Babailan</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className={style.formContact}>
                            <div style={{ width: "80%", maxWidth: "500px", margin: "0 auto" }}>
                                <h2>Wanna hire me?</h2>
                                <form ref={form} onSubmit={sendEmail}>
                                    <label>Name</label>
                                    <input type="text" name="user_name" />
                                    <label>Email</label>
                                    <input type="email" name="user_email" />
                                    <label>Message</label>
                                    <textarea rows={6} name="message" />
                                    <input type="submit" value="Send" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedPage >
        </div >
    );
}

export default Contacts