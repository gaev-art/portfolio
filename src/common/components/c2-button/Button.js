import React from 'react';
import style from './Button.module.scss'


function Button(props) {
    return(
        <div className={style.main}><a href={props.href} className={style.Btn}>{props.value}</a></div>
    )
}

export default Button;
