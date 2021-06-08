import { userConstants } from "./constants";
import axios from '../helpers/axios';

export const signup = (user) => {
    console.log("user.action.js signup", user);
    return async (dispatch) => {

        dispatch({ type: userConstants.USER_REGISTER_REQUEST });

        const res = await axios.post(`/admin/signup`, {
            ...user
        });
        console.log(`user.actions.js signup`, res);

        if (res.status === 201) {
            const { message } = res.data;
            console.log(`user.action.js signup`, "SIGNUP_SUCCESS");
            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: { message }
            })
        }
        else {
            if (res.status === 400) {
                console.log(`user.action.js signup`, "SIGNUP_FAILURE");
                const { error } = res.data.message;
                dispatch({
                    type: userConstants.USER_REGISTER_FAILURE,
                    payload: {
                        error: { error }
                    }
                })
            }
        }
    };
}