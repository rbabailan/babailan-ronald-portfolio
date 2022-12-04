import BackIcon from "../img/BackIcon.svg";
import { useNavigate } from "react-router-dom";
import style from "./BackButton.module.css";

function BackButton() {
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative" }}>
      <div className={style.BackButtonWrapper}>
        <button className={style.backButton} onClick={() => navigate("/")}>
          <img
            className={style.backIcon}
            src={BackIcon}
            alt="back icon"
            width="36px"
            height="36px"
          />
        </button>
      </div>
    </div>
  );
}

export default BackButton;
