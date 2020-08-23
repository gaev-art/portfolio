import React from 'react';
import style from './App.module.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';

function App() {
    return (
        <div className={style.App}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>

        </div>
    );
}

export default App;
