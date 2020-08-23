import React from 'react';
import style from './Project.module.css';

const Project = (props) => {


    return (
        <div className={style.project}>
            <div className={style.button}>
                <button>Смотреть</button>
            </div>
            <h3>{props.title}</h3>
            <div className={style.projectDescription}>
                {props.description}
            </div>
        </div>


    );
};

export default Project;
