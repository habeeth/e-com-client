import axiosInstance from "../helpers/axios";
import { categoryConstants } from "./constants";

export const getAllCategories = () => {
    return async dispatch => {
        dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST });
        const res = await axiosInstance.get(`/category/fetchAll`);
        if (res.status === 200) {
            const { categoriesList } = res.data;
            console.log('category.action.js', 'GET_ALL_CATEGORIES_SUCCESS');

            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categoriesList: categoriesList }
            });
        }
        else {
            console.log('category.action.js', 'GET_ALL_CATEGORIES_FAILURE');
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload: { error: res.error.message }
            });
        }
    }
};

export const createCategory = (formData) => {
    return async dispatch => {
        dispatch({ type: categoryConstants.ADD_CATEGORY_REQUEST });
        const res = await axiosInstance.post(`/category/create`, formData);
        if (res.status === 200) {
            console.log('category.action.js', 'ADD_CATEGORY_SUCCESS');
            dispatch({ type: categoryConstants.ADD_CATEGORY_SUCCESS, payload: { category: res.data.data } });

        }
        else {
            const error = res.data.error;
            console.log('category.action.js', 'ADD_CATEGORY_FAILURE');
            dispatch({ type: categoryConstants.ADD_CATEGORY_FAILURE, payload: { error } })
        }
    }
}