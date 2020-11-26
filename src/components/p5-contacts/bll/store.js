import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {contactsReducer} from './contactsReducer'
import {reducer as formReducer} from 'redux-form'


const reducers = combineReducers({
  contacts: contactsReducer,
  form: formReducer,
})


export const store = createStore(reducers, applyMiddleware(thunk))