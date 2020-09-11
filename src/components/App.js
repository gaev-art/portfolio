import React, {useState} from 'react';
import Header from './p1-header/Header';
import Banner from './p2-banner/Banner';
import AboutMe from './p3-about/AboutMe';
import Projects from './p4-projects/Projects';
import Contacts from './p5-contacts/ui/Contacts';
import Footer from './p6-footer/Footer';
import {animateScroll as scroll} from 'react-scroll'
import ScrollToTop from './p7-scrollToTop/ScrollToTop';


const App = () => {

    const [editMode, setEditMode] = useState(false)

    const scrollSite = () => {
        if (window.scrollY >= 100) {
            setEditMode(true)
        } else {
            setEditMode(false)
        }
    }

    const onClickHandler = () => {
        scroll.scrollTo(0)
        setEditMode(false)
    }


    return (
        <>
            <div onWheel={scrollSite}>
                <Header/>
                <Banner/>
                <AboutMe/>
                <Projects/>
                <Contacts/>
                <Footer/>
                <ScrollToTop
                    editMode={editMode}
                    onClickHandler={onClickHandler}/>
            </div>
        </>
    )
};

export default App;
