import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {contactsReducer} from './contactsReducer';


const reducers = combineReducers({
    contacts: contactsReducer
})


export const store = createStore(reducers, applyMiddleware(thunk))