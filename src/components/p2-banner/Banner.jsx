import React from 'react';
import style from './Banner.module.scss';
import containerStyle from '../../common/styles/container.module.scss';


const Banner = () => (
    <div className={style.main}>
        <div className={`${style.mainContainer} ${containerStyle.container}`}>
            <div className={style.greeting}>
                <h4> I’m Gaev Artsiom</h4>
                <h2>Front-End Developer</h2>
            </div>



        </div>
    </div>
);

export default Banner;
























