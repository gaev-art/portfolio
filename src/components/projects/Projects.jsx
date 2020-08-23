import React from 'react';
import containerStyle from '../../common/styles/container.module.css';
import style from './Projects.module.css';
import Project from './project/Project';

const Projects = (props) => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${containerStyle.container} ${style.projectsContainer}`}>
                <h2 className={style.heading}>Проекты</h2>
                <div className={style.projects}>
                    <Project
                        description={'Описание проекта'}
                        title={'Social Network'}/>
                    <Project
                        description={'Описание проекта'}
                        title={'To do list'}/>
                    <Project
                        description={'Описание проекта'}
                        title={'Counter'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;
