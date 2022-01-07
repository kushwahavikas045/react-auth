import {combineReducers} from 'redux';
import authReducers from './auth';
import activateReducers from './activate';
import developerReducers from './Developer';
const rootReducer =  combineReducers({
  auth: authReducers,
  activate: activateReducers,
  developer: developerReducers

});

export default rootReducer;