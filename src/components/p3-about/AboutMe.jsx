import React from 'react';
import style from './AboutMe.module.scss';
import containerStyle from '../../common/styles/container.module.scss';
import photo from '../../images/photo.JPG'
import Button from '../../common/components/c2-button/Button';


const AboutMe = () => {
   return <div className={style.main}>
        <div className={`${style.mainContainer} ${containerStyle.container}`}>
            <div className={style.photo}>
                <img className={style.ph} src={photo} alt=''/>
            </div>
            <div className={style.greeting}>
                <h2>About Me</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words which don't look even slightly
                    believable. If you are going to use a passage of Lorem Ipsum by injected humour, or randomised words
                    which don't look even slightly believable. If you are going to use a passage of Lorem IpsumThere are
                    many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words which don't look even slightly
                    believable.</p>
                <Button value={'Open CV'}/>
            </div>

        </div>
    </div>
};

export default AboutMe;


