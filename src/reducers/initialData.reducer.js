import { initialConstants } from "../actions/constants"

const initialState = {
    loading: false,
    error: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case initialConstants.GET_ALL_INITIAL_DATA_REQUEST:
            state = {
                ...state,
                ...payload
            }
            break;
        case initialConstants.GET_ALL_INITIAL_DATA_SUCCESS:
            state = {
                ...state,
                ...payload
            }
            break;
        case initialConstants.GET_ALL_INITIAL_DATA_FAILURE:
            state = {
                ...initialState
            }
            break;

    }
    return state;
}
