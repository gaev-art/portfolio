import React from 'react';
import style from './Contacts.module.scss';
import containerStyle from '../../common/styles/container.module.scss';
import Heading from '../../common/components/c1-heading/Heading';


const Contacts = () => (
    <div className={style.contactBlock}>
        <div className={`${containerStyle.container} ${style.skillsContainer}`}>
            <Heading heading={'Hire Me.'}/>
            <form className={style.form}>
                <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Email'/>
                <textarea placeholder='Message'/>
                <button className={style.submitBtn} type='submit'> Send</button>
            </form>
        </div>
    </div>
);

export default Contacts;


