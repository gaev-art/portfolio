import {api} from '../dal/api';
import {reset} from 'redux-form';

let initialState = {

}


export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state

    }
}


export const sendMessage = (name, contact, message) => async (dispatch) => {
    await api.sendMessage(name, contact, message)
    dispatch(reset('sendMessage'))
}

