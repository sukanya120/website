import React from 'react';

export default function ColorDisplay(props){
    //const [bgColor, setBgColor]= useState("yellow")--- we dont need this 

    const styling= {
        backgroundColor: props.bgColor
    }

    return (
    
        <div style= {styling}>
            <h1> Color Display </h1>
        </div>
    )
    
}