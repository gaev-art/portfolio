import React from 'react';
import style from './Contacts.module.scss';
import Heading from '../../../common/components/c1-heading/Heading';
import Fade from 'react-reveal/Fade';
import ContactsForm from './ContactsForm';
import {useDispatch, useSelector} from 'react-redux';
import {sendMessage} from '../bll/contactsReducer';


const Contacts = () => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.contacts.loading)

    const onSubmit = (formData) => {
        if (formData.name || formData.contact || formData.message !== undefined) {
            dispatch(sendMessage(formData.name, formData.contact, formData.message))
        } else {
            alert('Required fields')
        }
    }

    return (
        <div id='contacts' className={style.contactBlock}>
            <div className={style.skillsContainer}>
                <Heading heading={'Hire Me'}/>
                <Fade left cascade>
                    <ContactsForm loading={loading} onSubmit={onSubmit}/>
                </Fade>
            </div>
        </div>
    )
};

export default Contacts;






