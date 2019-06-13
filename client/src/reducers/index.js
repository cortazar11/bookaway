import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import hosterReducer from './hosterReducer';

export default combineReducers({
        form: formReducer,
        hosters: hosterReducer
})