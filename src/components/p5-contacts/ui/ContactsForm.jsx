import style from './Contacts.module.scss';

import {Field, reduxForm} from 'redux-form';
import React from 'react';
import {required} from '../../../assets/utils/validators/validators';
import {Input, Textarea} from '../../../common/formsConrols/FormControls';


const ContactsForm = (props) => {
    const {handleSubmit} = props
    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <Field
                name="name"
                component={Input}
                placeholder="Name"
                validate={[required]}/>
            <Field
                name="contact"
                component={Input}
                placeholder="Contact"
                validate={[required]}/>
            <Field
                name="message"
                component={Textarea}
                placeholder="Message"
                validate={[required]}/>
            {/*{props.error && <div className={style.formSummaryError}>{props.error}</div>}*/}
            <button className={style.submitBtn} type='submit'>Send</button>
        </form>
    )
}

export default reduxForm({
    form: 'sendMessage',
})(ContactsForm)