import React from 'react';
import style from './Skills.module.scss';
import containerStyle from '../../common/styles/container.module.scss';
import Skill from './skill/Skill';
import {faCss3, faGithub, faHtml5, faJs, faReact, faSass} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Heading from '../../common/components/c1-heading/Heading';


const Skills = () => (
    <div className={style.skillsBlock}>
        <div className={`${containerStyle.container} ${style.skillsContainer}`}>
            <Heading heading={'My skills'}/>
            <div className={style.skills}>
                <Skill
                    icon={<FontAwesomeIcon icon={faReact} size='8x' color="#fff"/>}
                    description={'Description'}
                    title={'React'}/>
                <Skill
                    icon={<FontAwesomeIcon icon={faJs} size='8x' color="#fff"/>}
                    description={'Description'}
                    title={'JS'}/>
                <Skill
                    icon={<FontAwesomeIcon icon={faHtml5} size='8x' color="#fff"/>}
                    description={'Description'}
                    title={'HTML'}/>
                <Skill
                    icon={<FontAwesomeIcon icon={faCss3} size='8x' color="#fff"/>}
                    description={'Description'}
                    title={'CSS'}/>
                <Skill
                    icon={<FontAwesomeIcon icon={faGithub} size='8x' color="#fff"/>}
                    description={'Description'}
                    title={'GitHub'}/>
                    <Skill
                    icon={<FontAwesomeIcon icon={faSass} size='8x' color="#fff"/>}
                    description={'Description skill '}
                    title={'Sass'}/>
            </div>
        </div>
    </div>
);

export default Skills;
