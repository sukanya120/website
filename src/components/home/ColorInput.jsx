import React, { useRef } from 'react';

export default function ColorInput(props){

    const inputRef = useRef();

    const handleChange=()=>{
        props.setColor(inputRef.current.value);
    }

    return (
    <>
    <h1>Color Input </h1>
    <input type="text" onInput={handleChange} ref={inputRef} />
    </>
    )

}