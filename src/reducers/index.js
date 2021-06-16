import authReducer from './auth.reducers';
import userReducer from './user.reducers';
import categoryReducer from "./category.reducers";
import productReducer from "./product.reducer";
import orderReducer from "./order.reducers";
import { combineReducers } from 'redux';
/** 
 * combineReducers is to merge all the Reducers in the folder.
 * This avoids the importing of reducers individually.
**/
const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    order: orderReducer

});

export default rootReducer;