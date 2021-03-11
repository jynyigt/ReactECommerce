import {combineReducers} from "redux";

import {productListReducer,productDetailsReducer} from "./ProductReducers";
export default combineReducers({
   productListReducer,
   productDetailsReducer
});