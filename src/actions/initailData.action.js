import axiosInstance from "../helpers/axios";
import { categoryConstants, initialConstants, productConstants } from './constants';

export const getInitialData = () => {
    return async dispatch => {
        console.log('initialdata.action.js');
        dispatch({ type: initialConstants.GET_ALL_INITIAL_DATA_REQUEST });
        const res = await axiosInstance.get(`/initialData`);

        if (res.status === 200) {
            console.log('initialdata.action.js', 'success');
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categoriesList: res.data.categoriesList }
            });
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload: { products: res.data.products }
            });
        }
    }
}