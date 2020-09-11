import React, {useState} from 'react';
import style from './Header.module.scss';
import NavMenu from './NavMenu/NavMenu';
import BurgerNavMenu from './burgerNavMenu/BurgerNavMenu';


const Header = () => {

    const [editMode, setEditMode] = useState(false)

    const burgerMenu = editMode ? style.menuIcon : style.menuIcon + ' ' + style.menuIconActive;

    const onClickHandler=()=>{
        setEditMode(!editMode)
    }

    return (
        <header className={style.header}>
            <div className={style.headerContainer}>
                <NavMenu/>
                {!editMode && <BurgerNavMenu/>}
                <div className={style.menuIconWrapper} onClick={onClickHandler}>
                    <div className={burgerMenu}></div>
                </div>
            </div>
        </header>
    )
}

export default Header;
