import style from './style.module.css';

function List({ title, text }) {
    return (
        <>
            <div className={style.line}></div>
            <li className={style.container}>
                {title}
                <small className={style.text}>{text}</small>
            </li>
        </>
    );
}

export default List;
