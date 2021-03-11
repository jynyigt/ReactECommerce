import { PRODUCT_DETAİLS_FAIL, PRODUCT_DETAİLS_REQUEST, PRODUCT_DETAİLS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

export const productListReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {
                products: action.payload
            }
        default:
            return state
    }
};

export const productDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DETAİLS_REQUEST:
            return { products: action.payload };
        default:
            return state;
    }
}