import React from 'react';
import style from './Icon.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function MenuIcon(props) {
    return  <a href={props.href}>
        <FontAwesomeIcon icon={props.icon} size="lg" className={style.navMenuIcon}/>
    </a>
}



export default MenuIcon;
