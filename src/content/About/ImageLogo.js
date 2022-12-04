import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ReactToolTip from "react-tooltip";

function ImageLogo(props) {
  const imgAnimation = {
    whileHover: { scale: 1.2 },
    transition: { duration: 0.25 },
  };

  return (
    <>
      <Link to="/Projects">
        <div
          data-tip={props.tooltip}
          style={{
            width: "48px",
            height: "48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center ",
          }}>
          <motion.img
            variants={imgAnimation}
            whileHover="whileHover"
            transition="transition"
            src={props.icon}
            alt={props.tooltip + "-logo"}
          />
        </div>
        <ReactToolTip />
      </Link>
    </>
  );
}

export default ImageLogo;
