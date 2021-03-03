import {API_BASE} from '../config/env';
import axios from 'axios';

export function fetchProduct(){
    return dispatch=>{
        axios.get(`${API_BASE}/product`)
        .then(result=>console.log(result.data));
    }   
}