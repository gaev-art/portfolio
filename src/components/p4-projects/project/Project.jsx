import React from 'react';
import style from './Project.module.scss';
import Button from '../../../common/components/c2-button/Button';

const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <div className={style.projectInfo}>
                    <h3 className={style.projectTitle}>{props.title}</h3>
                    <span className={style.projectDescription}>{props.description}</span>
                    <Button href={'/#'} value={'view'}/>
                </div>
            </div>


        </div>


    );
};

export default Project;
