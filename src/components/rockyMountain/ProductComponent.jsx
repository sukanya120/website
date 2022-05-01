import React from 'react';

export default function ProductComponent(props){
    return (
        // <div>
        //     <img src={props.src} alt="" />
        //     <span id= "sp_title">{props.title}</span>
        //     <span id= "sp_price">{props.price}</span>

        // </div>

        <div class="card w-18 m-2">
            <img src={props.src} class="card-img-top" alt="..."/>
            <div class="card-body">
                <div id= "sp_title">{props.title}</div>
                <div id= "sp_price">{props.price}</div>
            </div>
        </div>
                  
    )
}