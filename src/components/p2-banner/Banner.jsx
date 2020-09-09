import React from 'react';
import style from './Banner.module.scss';
import Button from '../../common/components/c2-button/Button';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';


const Banner = () => (
    <div className={style.banner}>

        <div id='banner' className={style.bannerContainer}>
            <Fade left cascade>
                <div className={style.greeting}>
                    <h3>Gaev Artsiom</h3>
                    <ReactTypingEffect text={`React Developer`}/>
                    <h5>from Belarus</h5>
                    <Button value={'CV'}/>
                </div>
            </Fade>
        </div>
    </div>
);

export default Banner;
























