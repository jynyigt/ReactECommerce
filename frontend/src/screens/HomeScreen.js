import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../actions/ProductAction';
import Product from '../components/Product';


export default function HomeScreen() {
    const dispatch = useDispatch();
    const prod = useSelector((state) => state.productList);
    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    return (
        <div>
            {
                prod.products == null ?

                    (<div>boş

                    </div>) : (<div>
                        {
                         <Product p={prod.products}></Product>
                        }
                    </div>)
            }


        </div>
    )
}
