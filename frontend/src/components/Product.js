import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../actions/ProductAction';
import Rating from './Rating';

 function Product(props){
  const dispatch=useDispatch();
  const productList=useSelector((state)=>state.productList);
  
  useEffect(()=>{
    dispatch(fetchProduct())
    },[dispatch]);
    return(
        <div>
          {
            props.p.map((s)=>(
              <div key={s.productId} className="card">
              <a href={`/product/${s.productId}`}>
              <img className="medium" src={s.image} alt={s.name}/>
              </a>
              <div className="card-body">
              <a href={`/product/${s.productId}`}>
                   <h2>{s.name}</h2>
               </a>
               <Rating rating={s.rating} numReviews={s.numReviews}></Rating>
               <div className="price">${s.price}</div>
              </div> 
              </div>
            ))
          }
            
        </div>
    )
}

export default Product;