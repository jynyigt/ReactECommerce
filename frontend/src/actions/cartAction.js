import axios from 'axios';
import {CART_ADD_ITEM} from '../constants/cartConstants';
import { API_BASE } from '../config/env';
export const addToCart=(productId,qty)=>async(dispatch,getState)=>{
   const response =await axios.get(`${API_BASE}/product/${productId}`);
   dispatch({
       type:CART_ADD_ITEM,
       payload:{
           name:response.name,
           image:response.image,
           price:response.price,
           countInStock:response.countInStock,
           product:response.product,
           qty,
       },

   });
   localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
};