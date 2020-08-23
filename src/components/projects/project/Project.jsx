import React from 'react';
import style from './Project.module.css';

const Project = (props) => {
    return (
        <div className={style.project}>
            <button>Смотреть</button>
            <h3>{props.title}</h3>
            <div className={style.projectDescription}>
                {props.description}
            </div>
        </div>


    );
};

export default Project;
