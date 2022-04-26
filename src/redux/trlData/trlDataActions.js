import axios from "axios";
import {
    TRL_DATA_REQUEST,
    TRL_DATA_SUCCESS,
    TRL_DATA_FAILURE,
} from "./trlDataTypes";

const fetchTrlRequest = () => {
    return {
        type: TRL_DATA_REQUEST,
    };
};

const fetchTrlSuccess = (productData) => {
    return {
        type: TRL_DATA_SUCCESS,
        payload: productData,
    };
};

const fetchTrlFailure = (errors) => {
    return {
        type: TRL_DATA_FAILURE,
        payload: errors,
    };
};

const api_base = process.env.REACT_APP_API_BASE

export const fetchTrlData = () => {

    return (dispatch) => {
            dispatch(fetchTrlRequest());

     axios.get(`${api_base}trl/`)
             .then((response) => {
                 dispatch(fetchTrlSuccess(response.data))
                console.log(response, "trlresp");
             }) 
                .catch((errors) => {
                    dispatch(fetchTrlFailure(errors));
                });
        };
};


