import { applyMiddleware, createStore } from "redux";
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

//Use applyMiddleware for async actions.

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;