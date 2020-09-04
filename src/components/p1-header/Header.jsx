import React from 'react';
import style from './Header.module.scss';
import containerStyle from '../../common/styles/container.module.scss';
import NavMenu from './NavMenu/NavMenu';

const Header = () => (
    <div className={style.header}>
        <div className={`${style.headerContainer} ${containerStyle.container}`}>
            <NavMenu/>
        </div>
    </div>
);

export default Header;
