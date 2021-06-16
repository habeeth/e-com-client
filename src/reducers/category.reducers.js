import { categoryConstants } from "../actions/constants";

const initState = {
    loading: false,
    error: '',
    categories: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case categoryConstants.GET_ALL_CATEGORIES_REQUEST:
            console.log("category.reducers.js", 'GET_ALL_CATEGORIES_REQUEST');
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
            console.log("category.reducers.js", 'GET_ALL_CATEGORIES_SUCCESS');
            state = {
                ...state,
                categories: action.payload.categoriesList,
                loading: false
            }
            break;
        case categoryConstants.GET_ALL_CATEGORIES_FAILURE:
            console.log("category.reducers.js", 'GET_ALL_CATEGORIES_FAILURE');
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        case categoryConstants.ADD_CATEGORY_REQUEST:
            console.log("category.reducers.js", 'ADD_CATEGORY_REQUEST');
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstants.ADD_CATEGORY_SUCCESS:
            console.log("category.reducers.js", 'ADD_CATEGORY_SUCCESS');
            state = {
                ...state,
                loading: false,
            }
            break;
        case categoryConstants.ADD_CATEGORY_FAILURE:
            console.log("category.reducers.js", 'ADD_CATEGORY_FAILURE');
            state = {
                ...initState
            }
            break;
    }
    console.log("return category.reducers.js", state);
    return state;
}