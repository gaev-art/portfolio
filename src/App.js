import React from 'react';
import style from './App.module.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contacts from './components/contacts/Contacts';

function App() {
    return (
        <div className={style.App}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
        </div>
    );
}

export default App;
