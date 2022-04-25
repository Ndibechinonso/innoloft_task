import { combineReducers } from "redux";
import productsReducer from "./productsData/productsDataReducer";

const rootReducer = combineReducers({products: productsReducer})


export default rootReducer;