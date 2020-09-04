import React from 'react';
import style from './NavMenu.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faLinkedinIn, faTelegram} from '@fortawesome/free-brands-svg-icons';

function NavMenu() {
    return (
        <div className={style.navMenu}>
            <nav>
                <a href="/" className={style.link}>Home</a>
                <a href="/" className={style.link}>About</a>
                <a href="/" className={style.link}>Skills</a>
                <a href="/" className={style.link}>Projects</a>
                <a href="/contacts" className={style.link}>Contacts</a>
            </nav>
                <div className={style.navMenuIcon}>
                    <a href='https://telegram.me/gaev_art'>
                        <FontAwesomeIcon icon={faTelegram} size="lg" className={style.link}/>
                    </a>
                    <a href='https://www.instagram.com/gaev_art/'>
                        <FontAwesomeIcon icon={faInstagram} size="lg" className={style.link}/>
                    </a>
                    <a href='https://www.linkedin.com/in/artsiom-gaev-29a4551a8/'>
                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" className={style.link}/>
                    </a>
            </div>
        </div>
    );
}

export default NavMenu;