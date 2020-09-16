import React from 'react';
import style from './Contacts.module.scss';
import Heading from '../../../common/components/c1-heading/Heading';
import Fade from 'react-reveal/Fade';
import ContactsForm from './ContactsForm';
import {useDispatch} from 'react-redux';
import {sendMessage} from '../bll/contactsReducer';


const Contacts = () => {
    const dispatch = useDispatch()

    const onSubmit = (formData) => {
        if (formData.name || formData.contact|| formData.message !== undefined) {
            dispatch(sendMessage(formData.name, formData.contact, formData.message))
        }else {

        }
    }

    return (
        <div id='contacts' className={style.contactBlock}>
            <div className={style.skillsContainer}>
                <Heading heading={'Hire Me'}/>
                <Fade left cascade>
                    <ContactsForm onSubmit={onSubmit}/>
                </Fade>
            </div>
        </div>
    )
};

export default Contacts;






