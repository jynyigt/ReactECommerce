import { combineReducers } from "redux";

import { productListReducer } from "./reducers/ProductReducers";

const INITIAL_STATE={

};
export const reducer=combineReducers({
 productList:productListReducer
});