import { categoryConstants } from "../actions/constants";

const initState = {
    loading: false,
    error: '',
    categories: []
}

const reorderCategories = (categories, category) => {
    console.log('categories', categories);
    console.log('category', category);
    let newCategories = [];

    for (let cat of categories) {
        if (cat._id === category.parentId) {
            const newCat = {
                _id: category._id,
                name: category.name,
                slug: category.slug,
                parentId: category.parentId,
                children: []
            }
            // cat.children.push(category);// Getting Uncaught (in promise) TypeError: cat.childern is not iterable

            newCategories.push({
                ...cat,
                children: cat.children && cat.children.length > 0 ? reorderCategories([...cat.children, newCat], category) : []
            })
        } else {
            newCategories.push({
                ...cat,
                children: cat.children && cat.children.length > 0 ? reorderCategories(cat.children, category) : []
            })
        }

    }

    return newCategories;
};

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
            // console.log("category.reducers.js", 'ADD_CATEGORY_SUCCESS', 'action:', action);
            // console.log("category.reducers.js", 'ADD_CATEGORY_SUCCESS', 'state:', state);
            const updatedCategories = reorderCategories(state.categories, action.payload.category);
            // console.log("category.reducers.js", 'updatedCategories', updatedCategories);
            state = {
                ...state,
                categories: updatedCategories,
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
    // console.log("return category.reducers.js", state);
    return state;
}