import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import hosterReducer from './hosterReducer';
import listReducer from './listReducer';

export default combineReducers({
        form: formReducer,
        hosters: hosterReducer,
        hostersList: listReducer
})