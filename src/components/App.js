import React, {useState} from 'react';
import style from './App.module.scss'
import Header from './p1-header/Header';
import Banner from './p2-banner/Banner';
import AboutMe from './p3-about/AboutMe';
import Projects from './p4-projects/Projects';
import Contacts from './p5-contacts/Contacts';
import Footer from './p6-footer/Footer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
import {animateScroll as scroll} from 'react-scroll'


const App = () => {

    const [editMode, setEditMode] = useState(false)


    const btn = editMode ? `${style.show}` : `${style.hide}`


    return (
        <>
            <div>
                <Header/>
                <Banner/>
                <AboutMe/>
                <Projects/>
                <Contacts/>
                <Footer/>
                <div className={style.backToTop}>
                    <div className={btn}>
                        <a onClick={() => scroll.scrollTo(0)}>
                            <FontAwesomeIcon icon={faAngleUp} size='3x' color='#2fb529'/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default App;
