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
        <div style={{padding: '5px'}}>
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
                <p>Hi, my name is Gaev Artsiom, I am a front-end developer from Minsk.
                    To my personal qualities I can include: responsibility, dedication and punctuality.
                    Always open to exploring new technologies.
                    I quickly find a common language with people, I easily join the new team.
                    I love and know how to work in a team.
                    In my free time I go in for sports: orienteering, cycling tourism, I go to the gym.
                    I solve problems on Codewars.
                    I am ready to work hard to develop in the IT field.</p>
                <div className={style.table}>
                    <ul className={style.row}>
                        <li className={classForSkill} onClick={onSkillFilterClick}>My skills</li>
                        <li className={classForExperience} onClick={onExperienceFilterClick}>Experience</li>
                        <li className={classForEducation} onClick={onEducationFilterClick}>Education</li>
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
                                            <Stars stars={'4'} halfStar={'0'}/>
                                        </li>
                                        <li>
                                            NodeJS
                                            <Stars stars={'1'} halfStar={'0'}/>
                                        </li>
                                    </div>
                                </ul>
                            </div> : ''}
                        {column === 'experience'
                            ? <div className={style.contentColumn}>
                                <ul>
                                    <li>Freelance<br/>
                                        Refinement of functionality and fix bugs of the CRM system  <br/>
                                     May 2020 - till now</li>

                                </ul>
                                <ul><h4>Work not related to IT:</h4>
                                    <li>
                                        <a style={{color: '#2fb529'}} href="https://ohrana.gov.by/wp/ru/protection-of-the-diplomatic-corps/history/">
                                            The Department for Safety and Security of MIA of the Republic of Belarus
                                        </a><br/>
                                        Security inspector<br/>
                                        Provided  the security of diplomatic missions and consular
                                        institutions of foreign states.<br/>April 2017 - March 2020
                                    </li>
                                </ul>
                            </div> : ''}
                        {column === 'education'
                            ? <div className={style.contentColumn}>
                                <ul>
                                    <li>
                                        <a style={{color: '#2fb529'}} href="https://it-incubator.by/">IT-INCUBATOR </a>
                                        (ReactJS, Redux,Rest API, TypeScript) - Belarus, Minsk<br/>February 2020
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


