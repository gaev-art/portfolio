import React from 'react';
import style from './Banner.module.scss';
import Button from '../../common/components/c2-button/Button';


const Banner = () => (
    <div className={style.banner}>
        <div className={style.bannerContainer}>
            <div className={style.greeting}>
                <h3>Gaev Artsiom</h3>
                <h2>Front-End <br/> Developer</h2>
                <h5>from Belarus</h5>
                <Button value={'CV'}/>
            </div>

        </div>
    </div>
);

export default Banner;
























