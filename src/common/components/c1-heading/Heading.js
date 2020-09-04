import React from 'react';
import style from './Heading.module.scss'


function Heading(props) {
    return (
        <div className={style.heading}>
            <h2 >{props.heading}</h2>
        </div>
    );
}

export default Heading;
