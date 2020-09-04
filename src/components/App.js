import React from 'react';
import Header from './p1-header/Header';
import Banner from './p2-banner/Banner';
import AboutMe from './p3-about/AboutMe';
import Skills from './p4-skills/Skills';
import Projects from './p5-projects/Projects';
import Contacts from './p6-contacts/Contacts';
import Footer from './p7-footer/Footer';


function App() {
    return (
        <>
            <div>
                <Header/>
                <Banner/>
                <AboutMe/>
                <Skills/>
                <Projects/>
                <Contacts/>
                <Footer/>
            </div>
        </>
    );
}

export default App;
