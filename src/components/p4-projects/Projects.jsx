import React from 'react';
import style from './Projects.module.scss';
import Project from './project/Project';
import Heading from '../../common/components/c1-heading/Heading';
import socialNetwork from '../../assets/images/socialnetwork.jpg'
import todo from '../../assets/images/todolist.jpg'

const Projects = () => {

    const social = {
        backgroundImage: `url(${socialNetwork})`
    }
    const toDo = {
        backgroundImage: `url(${todo})`
    }

    return (
        <div id='projects' className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Heading heading={'Projects'}/>
                <div className={style.projects}>
                    <Project
                        style={social}
                        description={'Technologies used: React, Redux, React-redux, Redux-thunk, Redux-form, Axios, reselect, REST API, Material-UI'}
                        title={'Social Network'}/>
                    <Project
                        style={toDo}
                        description={'Technologies used: React, Redux, TypeScript, React-redux, Redux-thunk, Redux-form, Axios, REST API'}
                        title={'To Do List'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;
