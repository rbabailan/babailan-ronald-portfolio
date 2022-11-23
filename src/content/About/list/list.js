import style from "./style.module.css";

function List({ title, text }) {
  return (
    <>
      <li className={style.skillLists}>
        <p>{title}</p>
        <div className={style.line}></div>
        <small className={style.text}>{text}</small>
      </li>
    </>
  );
}

export default List;
