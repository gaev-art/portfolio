import React from 'react';
import style from './Footer.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import containerStyle from '../../common/styles/container.module.css';

const Footer = () => (
    <div className={style.footer}>
        <div className={`${containerStyle.container} ${style.footerContainer}`}>
            <div>Гаев Артём</div>
            <div className={style.icons}>
                <FontAwesomeIcon icon={faGithub} size='3x' color="#c0c0c0"/>
                <FontAwesomeIcon icon={faEnvelope} size='3x' color="#c0c0c0"/>
                <FontAwesomeIcon icon={faLinkedin} size='3x' color="#c0c0c0"/>
                <FontAwesomeIcon icon={faTelegram} size='3x' color="#c0c0c0"/>
            </div>
            <div>&#169; 2020 Все права защищены</div>
        </div>
    </div>
);

export default Footer;
