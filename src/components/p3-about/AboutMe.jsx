import React, {useState} from 'react';
import style from './AboutMe.module.scss';
import photo from '../../assets/images/photo-2.jpg'
// import photo from '../../assets/images/photo.jpg'
import Heading from '../../common/components/c1-heading/Heading';
import {faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const Stars = (props) => {

    const starElements = new Array(Number(props.stars))
    const halfStarElements = new Array(Number(props.halfStar))


    const star = []
    const halfStar = []

    for (const [index] of starElements.entries()) {
        star.push(<FontAwesomeIcon key={index} icon={faStar} color={'gold'}/>)
    }
    for (const [index] of halfStarElements.entries()) {
        halfStar.push(<FontAwesomeIcon key={index} icon={faStarHalfAlt} color='gold'/>)
    }

    return (
        <div style={{padding:"5px"}}>
            {star}{halfStar}
        </div>

    );
}


const AboutMe = () => {

    const [filter, setFilter] = useState('skill');
    const [column, setColumn] = useState('skill');

    const onSkillFilterClick = () => {
        setFilter('skill')
        setColumn('skill')
    };
    const onExperienceFilterClick = () => {
        setFilter('experience')
        setColumn('experience')
    };
    const onEducationFilterClick = () => {
        setFilter('education')
        setColumn('education')
    };

    const classForSkill = filter === 'skill' ? `${style.active}` : `${style.rowItem}`;
    const classForExperience = filter === 'experience' ? `${style.active}` : `${style.rowItem}`;
    const classForEducation = filter === 'education' ? `${style.active}` : `${style.rowItem}`;


    return <div id='about' className={style.main}>
        <div className={style.mainContainer}>
            <div className={style.photo}>
                <img className={style.ph} src={photo} alt=''/>
            </div>
            <div className={style.greeting}>
                <Heading heading={'About Me'}/>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words which don't look even slightly
                    believable. If you are going to use a passage of Lorem Ipsum by injected humour, or randomised words
                    which don't look even slightly believable. If you are going to use a passage of Lorem IpsumThere are
                    many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words which don't look even slightly
                    believable.</p>
                <div className={style.table}>
                    <ul className={style.row}>
                        <li className={classForSkill} onClick={onSkillFilterClick}>My skills</li>
                        <li className={classForExperience} onClick={onExperienceFilterClick}>Experience</li>
                        <li className={classForEducation}
                            onClick={onEducationFilterClick}>Education &amp; Certification
                        </li>
                    </ul>
                    <div className={style.column}>
                        {column === 'skill'
                            ? <div className={style.contentColumn}>
                                <ul className={style.contentSkills}>
                                    <div>
                                        <li>
                                            JavaScript
                                            <Stars stars={'4'} halfStar={'1'}/>
                                        </li>
                                        <li>
                                            ReactJS
                                            <Stars stars={'5'} halfStar={'0'}/>
                                        </li>
                                        <li>
                                            TypeScript
                                            <Stars stars={'3'} halfStar={'1'}/>
                                        </li>
                                        <li>
                                            Redux
                                            <Stars stars={'5'} halfStar={'0'}/>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            HTML
                                            <Stars stars={'5'} halfStar={'0'}/>
                                        </li>
                                        <li>
                                            CSS3, SASS
                                            <Stars stars={'5'} halfStar={'0'}/>
                                        </li>
                                        <li>
                                            Rest API, Json, CRUD API
                                            <Stars stars={'4'} halfStar={'1'}/>
                                        </li>
                                        <li>
                                            Git & GitHub
                                            <br/>
                                            <Stars stars={'4'} halfStar={'0'}/>

                                        </li>
                                    </div>
                                </ul>
                            </div> : ''}
                        {column === 'experience'
                            ? <div className={style.contentColumn}>
                                <ul>
                                    <li>Freelance - May 2020</li>
                                </ul>
                            </div> : ''}
                        {column === 'education'
                            ? <div className={style.contentColumn}>
                                <ul>
                                    <li>
                                        <a style={{color: '#2fb529'}} href="https://it-incubator.by/">IT-INCUBATOR </a>
                                        <span>
                                            (ReactJS, Redux,Rest API, TypeScript) - Belarus, Minsk
                                        </span>

                                        <br/>
                                        February 2020
                                    </li>
                                    <li>Home study (HTML, CSS, JS) - Belarus, Minsk <br/> September 2019
                                    </li>
                                </ul>
                            </div> : ''}
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default AboutMe;


