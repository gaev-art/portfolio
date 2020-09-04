import React from 'react';
import style from './Skill.module.scss';


const Skill = (props) => (
    <div className={style.skill}>
            {props.icon}
        <h3 className={style.title}>{props.title}</h3>
        <span className={style.description}>
            {props.description}
        </span>
    </div>
);

export default Skill;
