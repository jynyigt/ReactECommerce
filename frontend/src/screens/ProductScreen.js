import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/ProductAction';
import Rating from '../components/Rating';

export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const[qty,setQty]=useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const { products } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

  const addToCartHandle=()=>{
        props.history.push(`/cart/${productId}?qty=${qty}`);
    }
    return (
        <div>
            {!productDetails.products ? (
                <div>Boş</div>
            ) : (
                <div>
                    <Link to="/">Back to result</Link>
                    <div className="row top">
                        <div className="col-2">
                            <img className="large" src={productDetails.products.image} alt={productDetails.products.name}></img>
                        </div>

                        <div className="col-1">
                            <ul>
                                <li>
                                    <h1>{productDetails.products.name}</h1>
                                </li>
                                <li>
                                    <Rating rating={productDetails.products.rating} numReviews={productDetails.products.numReviews}></Rating>
                                </li>
                                <li>Price:${productDetails.products.price}</li>
                                <li>Description:<p>{productDetails.products.description}</p></li>
                            </ul>
                        </div>
                        <div className="col-1">
                            <div className="card card-body">
                                <ul>
                                    <li>
                                        <div className="row">
                                            <div>Price</div>
                                            <div className="price">${productDetails.products.price}</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div>Status</div>
                                            <div>
                                                {productDetails.products.countInStock > 0 ? (
                                                    <span className="success">In Stock</span>
                                                ) : (
                                                    <span className="error">Unavailable</span>
                                                )}</div>
                                        </div>
                                    </li>
                                    {

                                        productDetails.products.countInStock > 0 && (
                                            <>
                                                <li>
                                                    <div className="row">
                                                        <div>Qty</div>
                                                        <div>
                                                            <select value={qty} onChange={e => setQty(e.target.value)}>
                                                                {
                                                                    [...Array(productDetails.products.countInStock).keys()].map(
                                                                        (x) => (
                                                                            <option key={x + 1} value={x + 1}>
                                                                                {x + 1}
                                                                            </option>
                                                                        )
                                                                    )
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <button onClick={addToCartHandle} className="primary block">Add to Cart</button>
                                                </li>
                                            </>

                                        )
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>


    )
}