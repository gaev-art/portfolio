import React from 'react';
import style from './Contacts.module.css';
import containerStyle from '../../common/styles/container.module.css';


const Contacts = () => (

    <div className={`${containerStyle.container} ${style.skillsContainer}`}>
        <h2 className={style.heading}>Контакты</h2>
        <div className={style.form}>
            <input type='text' placeholder='Name'/>
        </div>
        <div className={style.form}>
            <input type='text' placeholder='Email'/>
        </div>
        <div className={style.form}>
            <textarea className={style.text} placeholder='Message'/>
        </div>
        <div className={style.form}>
            <button> Отправить</button>
        </div>
    </div>
);

export default Contacts;


