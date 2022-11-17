import style from './style.module.css';

function ProjectsList(props) {
    return (
        <div className={style.projectsList}>
            <img alt={"images"} src={props.img} className={style.img}></img>
            <div className={style.description}>
                <h1 className={style.title}>{props.title}</h1>

                <p className={style.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero est aliquam inventore, maxime quae repellat labore laboriosam nemo totam consequuntur provident, sed placeat perspiciatis doloremque temporibus voluptatum fugiat vel iusto.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga molestiae blanditiis iusto ad dicta nostrum velit. Veniam nam, dolorum, necessitatibus, ab iusto cupiditate temporibus quos sunt a eveniet hic!</p>
                {props.children}
            </div>
        </div>
    );
}

export default ProjectsList
