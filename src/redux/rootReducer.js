import { combineReducers } from "redux";
import productsReducer from "./productsData/productsDataReducer";
import trlReducer from "./trlData/trlDataReducers";

const rootReducer = combineReducers({products: productsReducer, trl: trlReducer})

export default rootReducer;