import React from 'react';
import style from './Project.module.scss';
import Button from '../../../common/components/c2-button/Button';

const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.image}>
                <Button value={'Смотреть'}/>
            </div>
            <h3 className={style.projectTitle} >{props.title}</h3>
            <div className={style.projectDescription}>
                {props.description}
            </div>
        </div>


    );
};

export default Project;
