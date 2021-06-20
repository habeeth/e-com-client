import { productConstants } from "../actions/constants"

const initialState = {
    loading: false,
    products: [],
    error: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case productConstants.GET_ALL_PRODUCTS_REQUEST:
            console.log('product.reducer.js', type);
            state = {
                ...state,
                loading: true
            }
            break;
        case productConstants.GET_ALL_PRODUCTS_SUCCESS:
            console.log('product.reducer.js', type);
            state = {
                ...state,
                loading: false,
                products: payload.products
            }
            break;
        case productConstants.GET_ALL_PRODUCTS_FAILURE:
            console.log('product.reducer.js', type);
            state = {
                ...initialState
            }
            break;
        case productConstants.ADD_PRODUCT_REQUEST:
            console.log('product.reducer.js', type);
            state = {
                ...state,
                loading: true
            }
            break;
        case productConstants.ADD_PRODUCT_SUCCESS:
            console.log('product.reducer.js', type);
            state = {
                ...state,
                loading: false,
                products: payload
            }
            break;
        case productConstants.ADD_PRODUCT_FAILURE:
            console.log('product.reducer.js', type);
            state = {
                ...initialState
            }
            break;
    }
    return state;
}
