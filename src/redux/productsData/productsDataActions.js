import axios from "axios";

import {
    PRODUCTS_DATA_REQUEST,
    PRODUCTS_DATA_SUCCESS,
    PRODUCTS_DATA_FAILURE,
} from "./productsDataType";

const fetchProductsRequest = () => {
    return {
        type: PRODUCTS_DATA_REQUEST,
    };
};

const fetchProductsSuccess = (user) => {
    return {
        type: PRODUCTS_DATA_SUCCESS,
        payload: user,
    };
};

const fetchProductsFailure = (errors) => {
    return {
        type: PRODUCTS_DATA_FAILURE,
        payload: errors,
    };
};


const app_Id = process.env.REACT_APP_APP_ID || 1
const api_base = process.env.REACT_APP_API_BASE

export const fetchProductsData = () => {

    return (dispatch) => {
            dispatch(fetchProductsRequest());

         const configReq = axios.get(`${api_base}configuration/${app_Id}/`)
         const  productReq =  axios.get(
                    `${api_base}product/6781/`,                  
                )
                axios.all([configReq, productReq]).then(axios.spread((...responses)=> {
                    const configResponse = responses[0]
                    const stringifiedConfig = JSON.stringify(configResponse.data)
                    localStorage.setItem("configObj", stringifiedConfig)
                    const productResponse = responses[1]
                    dispatch(fetchProductsSuccess(productResponse.data));
                })) 
                .catch((errors) => {
                    dispatch(fetchProductsFailure(errors));
                });
        };
};
