import React, { useState, useRef } from "react";
import style from "./Contacts.module.css";
import { m } from "framer-motion";
import facebookIcon from "../../img/facebook.svg";
import githubIcon from "../../img/github.svg";
import twitterIcon from "../../img/twitter.svg";
import linkedInIcon from "../../img/linkedin.svg";
import ContactLinks from "./ContactLinks";
import emailjs from "@emailjs/browser";

function Contacts() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === "") {
      console.log("name");
      return;
    }

    if (email === "") {
      console.log("email");
    }

    if (message === "") {
      console.log("message");
    }

    emailjs
      .sendForm(
        "service_334q57o",
        "template_jhxrplg",
        form.current,
        "oVvmC_SSiBeA-sAfK"
      )
      .then(
        (result) => {
          if (result.status == 200) {
            form.current.reset();
            console.log("sent");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <m.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.6 }}
        className={style.contactWrapper}>
        <h2>GET IN TOUCH</h2>
        <p>
          You can message me anytime or contact me via my social accounts.
          <br />
          Say "Hi " or ask questions.
        </p>
        <div className={style.row}>
          <div className={style.formWrapper}>
            <form ref={form} onSubmit={sendEmail}>
              <div className={style.formInputWrapper}>
                <div className={style.formInputContent}>
                  <label htmlFor="user_name">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    autoComplete="off"
                    placeholder="Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className={style.formInputContent}>
                  <label htmlFor="user_email">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    autoComplete="off"
                    placeholder="Example@gmail.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <label htmlFor="message">Message</label>
              <textarea
                rows={6}
                name="message"
                autoComplete="off"
                placeholder='wanna say "Hi"?'
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <input
                className={style.submitButton}
                type="submit"
                value="Submit"
              />
            </form>
          </div>
          {/* <div className={style.socialMediaWrapper}>
            <ContactLinks
              link="https://www.facebook.com/profile.php?id=100009021094163"
              icon={facebookIcon}
              tooltip="Facebook"
            />
            <ContactLinks
              link="https://twitter.com/ronaldBn26"
              icon={twitterIcon}
              tooltip="Twitter"
            />
            <ContactLinks
              link="https://www.linkedin.com/in/ronald-babailan/"
              icon={linkedInIcon}
              tooltip="LinkedIn"
            />
            <ContactLinks
              link="https://github.com/Ronald-Bn"
              icon={githubIcon}
              tooltip="GitHub"
            />
          </div> */}
        </div>
      </m.div>
    </div>
  );
}

export default Contacts;
