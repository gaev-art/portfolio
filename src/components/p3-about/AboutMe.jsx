import React, {useState} from 'react';
import style from './AboutMe.module.scss';
import photo from '../../assets/images/photo.jpg'
import Heading from '../../common/components/c1-heading/Heading';


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
                                <ul>
                                    <li>JavaScript</li>
                                    <li>ReactJS</li>
                                    <li>Redux</li>
                                    <li>TypeScript</li>
                                    <li>Rest API, Json, CRUD API</li>
                                    <li>HTML</li>
                                    <li>CSS3, SASS</li>
                                    <li>Git & GitHub</li>
                                </ul>
                            </div> : ''}
                        {column === 'experience'
                            ? <div className={style.contentColumn}>
                                <ul>
                                    <li>Freelance - February 2020</li>
                                </ul>
                            </div> : ''}
                        {column === 'education'
                            ? <div className={style.contentColumn}>
                                <ul>
                                    <li><a href="https://it-incubator.by/">IT-INCUBATOR (ReactJS, Redux,
                                        Rest API, TypeScript)
                                        <span> - Belarus, Minsk</span></a> <br/> February 2020
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


