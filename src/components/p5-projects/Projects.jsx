import React from 'react';
import containerStyle from '../../common/styles/container.module.scss';
import style from './Projects.module.scss';
import Project from './project/Project';
import Heading from '../../common/components/c1-heading/Heading';

const Projects = (props) => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${containerStyle.container} ${style.projectsContainer}`}>
                <Heading heading={'Projects'}/>
                <div className={style.projects}>
                    <Project
                        description={'Description'}
                        title={'Social Network'}/>
                    {/*<Project*/}
                    {/*    description={'Description'}*/}
                    {/*    title={'To Do List'}/>*/}

                </div>
            </div>
        </div>
    );
};

export default Projects;
