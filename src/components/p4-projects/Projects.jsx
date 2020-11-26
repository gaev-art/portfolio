import React from 'react'
import style from './Projects.module.scss'
import Project from './project/Project'
import Heading from '../../common/components/c1-heading/Heading'
import socialNetwork from '../../assets/images/socialnetwork.jpg'
import todo from '../../assets/images/todolist.jpg'
import snap_chat from '../../assets/images/chat-1.jpg'

const Projects = () => {

  const social = {
    backgroundImage: `url(${socialNetwork})`
  }
  const toDo = {
    backgroundImage: `url(${todo})`
  }
  const chat = {
    backgroundImage: `url(${snap_chat})`
  }

  return (
    <div id='projects' className={style.projectsBlock}>
      <div className={style.projectsContainer}>
        <Heading heading={'Projects'}/>
        <div className={style.projects}>
          <Project
            style={social}
            href={'https://gaev-art.github.io/My-Social-Network/'}
            description={'Technologies used: React, Redux, React-redux, Redux-thunk, Redux-form, Axios, reselect, REST API, Material-UI'}
            title={'Social Network'}/>
          <Project
            style={chat}
            href={'https://gaev-art.github.io/chat/#/'}
            description={'Technologies used: Back-End: NodeJS, Express, WebSockets, MongoDB; Front-End: React, Redux, TypeScript, React-redux, Redux-thunk, Redux-form, SASS'}
            title={'Chat'}/>
          <Project
            style={toDo}
            href={'https://gaev-art.github.io/to-do-list/'}
            description={'Technologies used: React, Redux, TypeScript, React-redux, Redux-thunk, Redux-form, Axios, REST API, SASS'}
            title={'To Do List'}/>
        </div>
      </div>
    </div>
  )
}

export default Projects
