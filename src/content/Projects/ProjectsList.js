import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer"
import style from './ProjectsList.module.css';

function ProjectsList(props) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const RightToLeft = {
        initial: { opacity: 0, x: 200 },
        animate: { opacity: 1, x: 0 }
    };

    const LeftToRight = {
        initial: { opacity: 0, x: -200 },
        animate: { opacity: 1, x: 0 }
    };

    useEffect(() => {
        if (inView) {
            controls.start("animate");
            console.log(true);
        }
    }, [controls, inView]);

    return (
        <div className={style.projectsList}>
            <motion.div
                ref={ref}
                variants={LeftToRight}
                initial="initial"
                animate={controls}
                transition={{ duration: 1 }}
                className={style.primaryImg}>
                <img alt={"images"} src={props.img} className={style.img}></img>
            </motion.div>
            <motion.div
                ref={ref}
                variants={RightToLeft}
                initial="initial"
                animate={controls}
                transition={{ duration: 1 }}
                className={style.description}>
                <h1 className={style.title}>{props.title}</h1>
                <p className={style.paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero est aliquam inventore, maxime quae repellat labore laboriosam nemo totam consequuntur provident, sed placeat perspiciatis doloremque temporibus voluptatum fugiat vel iusto.
                </p>
                {props.children}
            </motion.div>
        </div >
    );
}

export default ProjectsList
