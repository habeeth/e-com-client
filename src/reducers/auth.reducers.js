
/* eslint-disable import/no-anonymous-default-export */
import { authConstants } from "../actions/constants";

const initState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: ''
    },
    authenticate: false,
    authenticating: false
}
export default (state = initState, action) => {
    console.log("auth.reducer.js begin", state, action);
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            console.log('auth.reducer.js', 'LOGIN_REQUEST')
            state = {
                ...state,
                authenticating: true,
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            console.log('auth.reducer.js', 'LOGIN_SUCCESS')
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false,
            }
            break;
        case authConstants.LOGIN_FAILURE:
            console.log('auth.reducer.js', 'LOGIN_FAILURE')
            state = {
                ...state,
                error: action.payload.error,
                authenticate: false,
                authenticating: false,
            }
            break;
        default:
            console.log('auth.reducer.js default break');
            break;
    }
    console.log("auth.reducer.js endss", state, action);
    return state;
}