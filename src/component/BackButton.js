import BackIcon from "../img/BackIcon.png";
import { useNavigate } from "react-router-dom";
import style from "./BackButton.module.css";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button className={style.backButton} onClick={() => navigate("/")}>
      <img
        className={style.backIcon}
        src={BackIcon}
        alt="back icon"
        width="36px"
        height="36px"
      />
    </button>
  );
}

export default BackButton;
