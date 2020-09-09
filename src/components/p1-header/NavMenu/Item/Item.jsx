import React from 'react';
import style from './Item.module.scss';
import {Link} from 'react-scroll';


function MenuItem(props) {
    return <Link
        className={style.menuItem}
        activeClass={style.active}
        to={props.href}
        spy={true}
        smooth={true}
        offset={0}
        duration= {500}>
        {props.title}
    </Link>
}


export default MenuItem;
