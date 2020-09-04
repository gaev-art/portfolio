import React from 'react';
import style from './Button.module.scss'


function Button(props) {
    return <button className={style.Btn}>{props.value}</button>
}

export default Button;
