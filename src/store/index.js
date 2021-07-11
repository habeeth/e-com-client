import { applyMiddleware, createStore } from "redux";
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

//Use applyMiddleware for async actions.

//use thunk for below error
//Error: Actions must be plain objects.Instead, the actual type was: 'function'.You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions.See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;