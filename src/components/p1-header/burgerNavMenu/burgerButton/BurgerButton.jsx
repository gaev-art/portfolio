import React from 'react';
import style from './BurgerButton.module.scss';


const BurgerButton = props => {

    const burgerButton = props.editMode ? style.button : style.button + ' ' + style.buttonActive;

    return (
        <div className={style.buttonWrapper} onClick={props.onClickBurgerButton}>
            <div className={burgerButton}/>
        </div>)
}


export default BurgerButton;
