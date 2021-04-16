import {combineReducers} from 'redux';
import calReducer from './calReducer';

export default combineReducers({
    cal : calReducer
})