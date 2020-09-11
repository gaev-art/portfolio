import React, {useState} from 'react';
import style from './Header.module.scss';
import NavMenu from './navMenu/NavMenu';
import BurgerNavMenu from './burgerNavMenu/BurgerNavMenu';
import BurgerButton from './burgerNavMenu/burgerButton/BurgerButton';


const Header = () => {

    const [editMode, setEditMode] = useState(true)


    const onClickHandler = () => {
        setEditMode(!editMode)
    }

    return (
        <header className={style.header}>
            <div className={style.headerContainer}>
                <NavMenu/>
                {!editMode && <BurgerNavMenu/>}
                <BurgerButton
                    editMode={editMode}
                    onClickBurgerButton={onClickHandler}/>
            </div>
        </header>
    )
}

export default Header;
