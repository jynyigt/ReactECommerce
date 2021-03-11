import { API_BASE } from '../config/env';
import { PRODUCT_DETAİLS_REQUEST, PRODUCT_LIST_REQUEST } from "../constants/productConstants";
import axios from 'axios';

export const fetchProduct = () => async (dispatch) => {
    var p = await axios.get(`${API_BASE}/product`);
    console.log(p);
    dispatch({
        type: PRODUCT_LIST_REQUEST,
        payload: p.data
    })
};

export const detailsProduct=(productId)=>async(dispatch)=> {
    var p = await axios.get(`${API_BASE}/product/${productId}`);
        dispatch({
            type: "PRODUCT_DETAİLS_REQUEST",
            payload: p.data

        })
};
