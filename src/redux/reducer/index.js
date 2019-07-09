
import { combineReducers } from 'redux';
import session from './session';
import places from './places';
import navigationReducer from './navigation';

const rootReducer = combineReducers({
    session,
   navigationReducer
})

export default rootReducer


//importa todos los reducer que tiene los combina