import React from 'react';
import style from './Footer.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons';
import containerStyle from '../../common/styles/container.module.scss';

const Footer = () => (
    <div className={style.footer}>
        <div className={`${containerStyle.container} ${style.footerContainer}`}>
            <h2>Gaev Artsiom</h2>
            <div className={style.icons}>
                <a href='https://github.com/gaev-art' >
                    <FontAwesomeIcon icon={faGithub} size='3x' color="#fff"/>
                </a>
                <a href='https://www.linkedin.com/in/artsiom-gaev-29a4551a8/'>
                    <FontAwesomeIcon icon={faLinkedin} size='3x' color="#fff"/>
                </a>
                <a href='https://telegram.me/gaev_art'>
                    <FontAwesomeIcon icon={faTelegram} size='3x' color="#fff"/>
                </a>
            </div>
            <div className={style.text}>&#169;  2020 Belarus/Minsk, All Rights Reserved.</div>
        </div>
    </div>
);

export default Footer;
