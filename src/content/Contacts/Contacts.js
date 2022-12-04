import React from "react";
import style from "./Contacts.module.css";
import { motion } from "framer-motion";
import facebookIcon from "../../img/facebook.svg";
import githubIcon from "../../img/github.svg";
import twitterIcon from "../../img/twitter.svg";
import instagramIcon from "../../img/instagram.svg";
import linkedInIcon from "../../img/linkedin.svg";
import gmailIcon from "../../img/gmail.svg";
import HackerRankIcon from "../../img/hackerrank.svg";
import ContactLinks from "./ContactLinks";
import ReactToolTip from "react-tooltip";
import FreeCodeCampIcon from "../../img/freecodecamp.svg";
import BackButton from "../../component/BackButton";

function Contacts() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <BackButton />
      <div className={style.contactSection}>
        <div className={style.contactContainer}>
          <h2>PROFILES</h2>
          <div className={style.contactInfo}>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}>
              <ContactLinks
                links="https://www.facebook.com/profile.php?id=100009021094163"
                icon={facebookIcon}
                tooltip="Facebook"
              />
              <ContactLinks
                links="https://twitter.com/ronald_bn26"
                icon={twitterIcon}
                tooltip="Twitter"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}>
              <ContactLinks
                links="https://www.linkedin.com/in/ronald-babailan/"
                icon={linkedInIcon}
                tooltip="LinkedIn"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}>
              <ContactLinks
                links="https://www.freecodecamp.org/Ronald-Bn"
                icon={FreeCodeCampIcon}
                tooltip="FreecodeCamp"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}>
              <ContactLinks
                links="https://www.hackerrank.com/ronaldbabailan01"
                icon={HackerRankIcon}
                tooltip="HackerRank"
              />
              <ContactLinks
                links="https://github.com/Ronald-Bn"
                icon={githubIcon}
                tooltip="GitHub"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}>
              <ContactLinks
                links="https://mail.google.com/mail/u/0/?fs=1&to=ronaldbabailan0026@gmail.com&tf=cm"
                icon={gmailIcon}
                tooltip="Gmail"
                text="ronaldbabailan0026@gmail.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}>
              <ContactLinks
                links="https://www.instagram.com/macronald26/"
                icon={instagramIcon}
                tooltip="Instagram"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <ReactToolTip />
    </div>
  );
}

export default Contacts;
