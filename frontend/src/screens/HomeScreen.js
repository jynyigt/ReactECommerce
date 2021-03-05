import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import {fetchProduct} from '../actions/Product';
import data from '../data';
import { useEffect } from 'react';

export default function HomeScreen(){
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchProduct())
        });
    return(
        <div className="row center">
         {
             data.products.map(product=>(
              <Product key={product._id} product={product}></Product>
             ))
         }
    </div>      
    )
}