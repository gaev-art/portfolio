import React from 'react';
import style from './Skills.module.css';
import containerStyle from '../../common/styles/container.module.css';
import Skill from './skill/Skill';


const Skills = () => (
    <div className={style.skillsBlock}>
        <div className={`${containerStyle.container} ${style.skillsContainer}`}>
            <h2 className={style.heading}>Мои Скилы</h2>
            <div className={style.skills}>
                <Skill
                    description={'Описание Скила'}
                    title={'React'}/>
                <Skill
                    description={'Описание Скила'}
                    title={'JS'}/>
                <Skill
                    description={'Описание Скила'}
                    title={'HTML/CSS'}/>
            </div>
        </div>
    </div>
);

export default Skills;
