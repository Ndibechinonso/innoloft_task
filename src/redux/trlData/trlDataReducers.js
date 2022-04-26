import {
    TRL_DATA_REQUEST,
    TRL_DATA_SUCCESS,
    TRL_DATA_FAILURE,
} from "./trlDataTypes";

const initialState = {
    loading: false,
    data: [],
    errors: [],
};

const trlReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRL_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case TRL_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                errors: [],
            };
        case TRL_DATA_FAILURE:
            return {
                loading: false,
                data: [],
                errors: action.payload,
            };

        default:
            return state;
    }
};

export default trlReducer;
