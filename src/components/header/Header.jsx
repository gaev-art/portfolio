import React from 'react';
import style from './Header.module.css';
import containerStyle from '../../common/styles/container.module.css';
import NavMenu from './NavMenu/NavMenu';

const Header = () => (
    <div className={style.header}>
        <div className={containerStyle.container}>
            <NavMenu/>
        </div>
    </div>
);

export default Header;
