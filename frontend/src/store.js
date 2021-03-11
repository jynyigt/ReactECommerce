import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { productDetailsReducer, productListReducer } from "./reducers/ProductReducers";

const INITIAL_STATE={
    
};
const reducer=combineReducers({
 productList:productListReducer,
 productDetails:productDetailsReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(
    reducer,
    INITIAL_STATE,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;