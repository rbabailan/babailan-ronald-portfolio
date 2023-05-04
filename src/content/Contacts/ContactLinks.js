import React from "react";
import { motion } from "framer-motion";

function ContactLinks({ icon, tooltip, link }) {
  const imgAnimation = {
    whileHover: { scale: 1.2 },
    transition: { duration: 0.25 },
  };

  return (
    <div>
      <a href={link} target="_blank" data-tip={tooltip} rel="noopener">
        <motion.img
          variants={imgAnimation}
          whileHover="whileHover"
          transition="transition"
          src={icon}
          alt={tooltip + "-logo"}
          width="36px"
          height="36px"
        />
      </a>
    </div>
  );
}

export default ContactLinks;
