import React from "react";
import { motion } from "framer-motion";

function ContactLinks(props) {
  const imgAnimation = {
    whileHover: { scale: 1.2 },
    transition: { duration: 0.25 },
  };

  const text = props.text;

  return (
    <>
      <a href={props.links} target="_blank" data-tip={props.tooltip}>
        <motion.img
          variants={imgAnimation}
          whileHover="whileHover"
          transition="transition"
          src={props.icon}
          alt={props.tooltip + "-logo"}
        />
      </a>
      {text && <p>{props.text}</p>}
    </>
  );
}

export default ContactLinks;
