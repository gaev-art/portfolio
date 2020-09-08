import React from 'react';
import style from './Skills.module.scss';
import containerStyle from '../../common/styles/container.module.scss';
import Skill from './skill/Skill';
import {faCss3, faGit, faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Heading from '../../common/components/c1-heading/Heading';



const Skills = () => (
    <div className={style.skillsBlock}>
        <div className={`${containerStyle.container} ${style.skillsContainer}`}>
            <Heading heading={'My skills'}/>
            <div className={style.skills}>
                <Skill
                    icon={<FontAwesomeIcon icon={faJs} size='8x' color="#fff"/>}
                    description={'Fundamentals + ES6 - ES9'}
                    title={'JS'}/>
                <Skill
                    icon={<FontAwesomeIcon icon={faHtml5} size='8x' color="#fff"/>}
                    description={'Semantic layout, BEM methodology, W3C valid code, pixel perfect markup'}
                    title={'HTML'}/>
                <Skill
                    icon={<FontAwesomeIcon icon={faCss3} size='8x' color="#fff"/>}
                    description={'Sass\\Scss, custom animations, responsive\\mobile-first layout'}
                    title={'CSS'}/>
                <Skill
                    icon={<FontAwesomeIcon icon={faReact} size='8x' color="#fff"/>}
                    description={'Redux, REST API, Context API, CSS modules, Material UI, Styled-component, redux-thunk, redux-form, reselect, TypeScript(basic)'}
                    title={'React'}/>

                <Skill
                    icon={<FontAwesomeIcon icon={faGit} size='8x' color="#fff"/>}
                    description={'Commercial experience with git about 3 months (git + redmine)'}
                    title={'Git'}/>


            </div>
        </div>
    </div>
);

export default Skills;
