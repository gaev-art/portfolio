import React from 'react';
import containerStyle from '../../common/styles/container.module.scss';
import style from './Projects.module.scss';
import Project from './project/Project';
import Heading from '../../common/components/c1-heading/Heading';
import socialNetwork from './social-network-background.jpg'

const Projects = () => {

    const social = {
        backgroundImage: `url(${socialNetwork})`
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${containerStyle.container} ${style.projectsContainer}`}>
                <Heading heading={'Projects'}/>
                <div className={style.projects}>
                    <Project
                        style={social}
                        description={'Technologies used: React, Redux, React-redux, Redux-thunk, Redux-form, Axios, reselect, SCSS, REST API'}
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
