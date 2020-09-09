import React from 'react';
import style from './Header.module.scss';
import NavMenu from './NavMenu/NavMenu';

const Header = () => (
    <header className={style.header}>
        <div className={style.headerContainer}>
            <NavMenu/>
        </div>
    </header>
);

export default Header;
