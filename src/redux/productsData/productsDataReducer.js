import {
    PRODUCTS_DATA_REQUEST,
    PRODUCTS_DATA_SUCCESS,
    PRODUCTS_DATA_FAILURE,
} from "./productsDataType";

const initialState = {
    loading: false,
    data: [],
    errors: [],
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case PRODUCTS_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                errors: [],
            };
        case PRODUCTS_DATA_FAILURE:
            return {
                loading: false,
                data: [],
                errors: action.payload,
            };

        default:
            return state;
    }
};

export default productsReducer;
