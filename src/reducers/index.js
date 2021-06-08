import authReducer from './auth.reducers';
import userReducer from './user.reducers'
import { combineReducers } from 'redux';
/** 
 * combineReducers is to merge all the Reducers in the folder.
 * This avoids the importing of reducers individually.
**/
const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
});

export default rootReducer;