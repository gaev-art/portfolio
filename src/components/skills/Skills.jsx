import React from 'react';
import style from './Skills.module.css';
import containerStyle from '../../common/styles/container.module.css';
import Skill from './skill/Skill';
import {faCss3, faGithub, faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const Skills = () => (
    <div className={style.skillsBlock}>
        <div className={`${containerStyle.container} ${style.skillsContainer}`}>
            <h2 className={style.heading}>Мои Скилы</h2>
            <div className={style.skills}>
                <Skill
                    icon={<FontAwesomeIcon icon={faReact} size='3x' color="#c0c0c0"/>}
                    description={'Описание Скила'}
                    title={'React'}/>
                <Skill
                    icon={<FontAwesomeIcon icon={faJs} size='3x' color="#c0c0c0"/>}
                    description={'Описание Скила'}
                    title={'JS'}/>
                <Skill
                    icon={<FontAwesomeIcon icon={faHtml5} size='3x' color="#c0c0c0"/>}
                    description={'Описание Скила'}
                    title={'HTML'}/>
                <Skill
                    icon={<FontAwesomeIcon icon={faCss3} size='3x' color="#c0c0c0"/>}
                    description={'Описание Скила'}
                    title={'CSS'}/>
                <Skill
                    icon={<FontAwesomeIcon icon={faGithub} size='3x' color="#c0c0c0"/>}
                    description={'Описание Скила'}
                    title={'GitHub'}/>
            </div>
        </div>
    </div>
);

export default Skills;
