import axiosInstance from "../helpers/axios";
import { productConstants } from "./constants";


export const createProduct = (formdata) => {
    return async dispatch => {
        dispatch({ type: productConstants.ADD_PRODUCT_REQUEST });
        console.log('product.action.js createProduct', formdata);
        const res = await axiosInstance.post(`/product/create`, formdata);
        console.log('product.action.js res.data', res.data);
        if (res.status === 200) {
            dispatch({
                type: productConstants.ADD_PRODUCT_SUCCESS,
                payload: res.data.product
            });
        } else {
            dispatch({
                type: productConstants.ADD_PRODUCT_FAILURE,
                payload: res.data.error
            });
        }
    }
}

export const fetchAllProducts = () => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });
        const res = await axiosInstance.post('/product/fetchAll');
        if (res.status == 200 || res.status == 201) {
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_FAILURE,
                payload: res.data.error
            });
        }
    }
}