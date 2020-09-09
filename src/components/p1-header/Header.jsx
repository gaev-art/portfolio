import React from 'react';
import style from './Header.module.scss';
import NavMenu from './NavMenu/NavMenu';

const Header = () => (
    <div className={style.header}>
        <div className={style.headerContainer}>
            <NavMenu/>
        </div>
    </div>
);

export default Header;
