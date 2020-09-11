import React from 'react';
import style from './ScrollToTop.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';


const ScrollToTop = (props) => {

    return (
        <div className={style.main}>
            {props.editMode && <div className={style.button}>
                <div onClick={props.onClickHandler}>
                    <FontAwesomeIcon icon={faAngleUp} size='3x' color='#2fb529'/>
                </div>
            </div>}
        </div>
    )
};

export default ScrollToTop;
