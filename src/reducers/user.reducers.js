import { userConstants } from "../actions/constants"


const initialState = {
    message: '', error: '', loading: false
}
export default (state = initialState, action)=> {
    switch (action.type) {
        case userConstants.USER_REGISTER_REQUEST:
            console.log('user.reducer.js', 'USER_REGISTER_REQUEST');
            state = {
                ...state,
                loading: true
            }
            break;
        case userConstants.USER_REGISTER_SUCCESS:
            console.log('user.reducer.js', 'USER_REGISTER_SUCCESS');
            state = {
                ...state,
                message: action.payload.message,
                error: '',
                loading: false
            }
            break
        case userConstants.USER_REGISTER_FAILURE:
            console.log('user.reducer.js', 'USER_REGISTER_FAILURE');

            state = {
                ...state,
                message: '',
                error: action.payload.message,
                loading: false
            }
            break;
        // default:
        //     console.log("user.reducer.js", 'default');
        //     break;
    }
    // console.log("user.reducer.js", 'state', state);
    return state;
}