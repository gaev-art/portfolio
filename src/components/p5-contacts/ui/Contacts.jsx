import React from 'react';
import style from './Contacts.module.scss';
import Heading from '../../../common/components/c1-heading/Heading';
import Fade from 'react-reveal/Fade';


const Contacts = () => {

    const submit = (e) =>{
        console.log(e.currentTarget)
    }

    return (
    <div id='contacts' className={style.contactBlock}>
        <div className={style.skillsContainer}>
            <Heading heading={'Hire Me'}/>
            <Fade left cascade>
            <form className={style.form} onSubmit={submit}>
                <inpu type='text' placeholder='Name'/>
                <input type='text' placeholder='Email'/>
                <textarea rows={10} placeholder='Message'/>
                <button className={style.submitBtn} type='submit'>Send</button>
            </form>
            </Fade>
        </div>
    </div>
    )
};

export default Contacts;


