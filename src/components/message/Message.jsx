import React, { useRef } from 'react';


export default function Message(){
    const email= useRef();
    const message= useRef();
    
    const sendMessage =()=>{
        console.log(email.current.value);
        console.log(message.current.value);
    }
    
    
    return(
        <>  
            <h2>Drop a message</h2>
            
            <input type="text" name="" id="" className="my-3" placeholder="Your e-mail Id" ref={email}/>
            <textarea name="" id="" cols="30" rows="10" className="my-3" placeholder="Message for me" ref={message}></textarea>
            <button className="btn greyblue my-3 fwhite" onClick= {sendMessage}>Send</button>

        </>

    )

}