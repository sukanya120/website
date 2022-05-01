import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductComponent from './ProductComponent';

export default function RockyMountain(){
    const [data, setData]= useState([]);
    useEffect(()=> {
        axios.get("http://localhost:8080/scrape/")
        .then(function (response) {
            // handle success
            setData(response.data);
          })
        
    },[]);
    return(
        <div className='d-flex f-wrap justify-content-around'>
        {
            data.map(product=> <ProductComponent src= {product.src} title= {product.title} price= {product.price}/> )
        }
        </div>
    );
}