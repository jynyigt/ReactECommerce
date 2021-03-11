import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { addToCart } from '../actions/cartAction';


export default function CartScreen(props) {
    const productId=props.match.params.id;
    const qty=props.location.search ? Number(props.location.search.split('=')[1])
    :1;
   const dispatch = useDispatch();
   const cart = useSelector((state) => state.cart);
   const { cartItems } = cart;
   useEffect(() => {
   if(productId){
       dispatch(addToCart(productId,qty));
   }       
},[dispatch,productId,qty]);
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>
                ADD TO CART:ProductId:{productId} Qty:{qty}
            </p>
        </div>
    )
}
