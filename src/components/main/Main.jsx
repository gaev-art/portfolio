import React from 'react';
import style from './Main.module.css';
import containerStyle from '../../common/styles/container.module.css';


const Main = () => (
    <div className={style.main}>
        <div className={containerStyle.container}>
            <div className={style.greeting}>
                <span>Привет</span>
                <h1>Меня зовут Гаев Артём</h1>
                <p>Я Front-End разбработчик</p>
            </div>
            <div className={style.photo}>
                <img className={style.ph} alt={'photo'}/>
            </div>
        </div>
    </div>
);

export default Main;
