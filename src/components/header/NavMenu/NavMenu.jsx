import React from 'react';
import style from './NavMenu.module.css';

function NavMenu() {
    return (
        <div className={style.navMenu}>
            <a href="" className={style.link}>Главная</a>
            <a href="" className={style.link}>Скилы</a>
            <a href="" className={style.link}>Проекты</a>
            <a href="" className={style.link}>Контакты</a>
        </div>
    );
}

export default NavMenu;
