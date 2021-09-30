import React, { useRef, useState } from 'react';
import ColorDisplay from './ColorDisplay';
import ColorInput from './ColorInput';

export default function Home() {
    const [color, setColor]= useState();
    let numArray= [1,2,3,4,5];
    let defaultFruits= ["apple", "mangoes", "peaches", "pineapple"];
    const [fruits, setFruits]= useState(defaultFruits);
    const [numbers, setNumbers]= useState(numArray);

    const numberInput= useRef();
    
    
    const fruitInput= useRef();

    const handleFruitFilter= () => {
        
        if(!fruitInput.current.value){
            setFruits([]);
            return;
        }

        const filteredFruits= defaultFruits.filter((x) => {
            return x.startsWith(fruitInput.current.value);
        });
        setFruits(filteredFruits);
    }

    const handlePowerUp= ()=>{
            const powerUp= numArray.map((x) =>{
                return Math.pow(x, numberInput.current.value);
            });
            setNumbers(powerUp);
    }

    // const startsWithFilter = (x, character) => {
    //     return x.startsWith(character);
    // }

    return (
    <>

        <h1>Hello From Home!</h1>
        <div className= "d-flex flex-row mt-5">

            <div className="flex-fill">
                <ColorDisplay bgColor={color}/>
            </div>
            
            <div className="flex-fill">
                <ColorInput setColor={setColor}/>
            </div>
            
        </div>
        
        <input type="text" onKeyUp={handleFruitFilter} ref={fruitInput}/>
        
        <div>
            {fruits}
        </div>
        <input type= "number" onKeyUp= {handlePowerUp} ref= {numberInput}/>

        <>
        {numbers.map(y=>{
            return <span className= "m-3">{y}</span>
        })}
        </>
    </>
    )
    
}