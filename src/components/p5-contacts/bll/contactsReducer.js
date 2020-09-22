import {api} from '../dal/api';
import {reset} from 'redux-form';

const SET_LOADING = 'PORTFOLIO/SET_LOADING'


let initialState = {
    loading: false,
}


export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state, loading: action.loading
            }
        default:
            return state

    }
}


export const setLoadingSuccess = (loading) => ({type: SET_LOADING, loading})

export const sendMessage = (name, contact, message) => async (dispatch) => {
        dispatch(setLoadingSuccess(true))
        await api.sendMessage(name, contact, message)
        dispatch(reset('sendMessage'))
        setTimeout(() => {
            dispatch(setLoadingSuccess(false))
        }, 3000)


}


