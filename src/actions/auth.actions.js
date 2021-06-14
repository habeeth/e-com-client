import { authConstants } from "./constants";
import axios from '../helpers/axios';

export const login = (user) => {
    console.log("auth.action.js begins", user);
    return async (dispatch) => {

        dispatch({ type: authConstants.LOGIN_REQUEST })
        const res = await axios.post('/admin/signin', {
            ...user
        });
        console.log("auth.actions.js res", res);
        if (res.status === 200) {
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            console.log("auth.action.js dispatch", "LOGIN_SUCCESS");
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            })
        }
        else {
            if (res.status === 400) {
                console.log("auth.action.js dispatch", "LOGIN_FAILURE");
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: {
                        error: res.data.error || res.data.message
                    }
                })
            }
        }
        // dispatch({
        //     type: authConstants.LOGIN_REQUEST,
        //     payload: {
        //         ...user
        //     }
        // })


    }
}

export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = JSON.stringify(localStorage.getItem('user'))
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            })
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: {
                    error: 'User Login Required'
                }
            })
        }
    }
}

export const signout = () => {
    return async dispatch => {
        dispatch({ type: authConstants.LOGOUT_REQUEST });
        const resp = await axios.post('/admin/signout');
        console.log("auth.actions.js", resp.status);
        if (resp.status === 200) {
            localStorage.clear();
            dispatch({
                type: authConstants.LOGOUT_SUCCESS,
                payload: {
                    message: resp.data.message
                }
            })
        } else {
            dispatch({
                type: authConstants.LOGOUT_FAILURE,
                payload: {
                    error: resp.data.error
                }
            })
        }
    }
}
