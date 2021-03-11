import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';

import { productDetailsReducer, productListReducer } from "./reducers/ProductReducers";

const INITIAL_STATE = {
    cart: {
        cartItems: localStorage.getItem('cartItems') 
        ? JSON.parse(localStorage.getItem('cartItems'))
        :[],
    },
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;