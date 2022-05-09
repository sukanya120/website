import React, { useRef, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';


import './home.css';
import profilePicture from '../../res/img/Pic_1.jpg';
import Message from '../message/Message';

export default function Home() {
    const centerTextStyle = {
        color: "white",
        fontSize: "2.5vw",
        fontFamily: 'Montserrat',
        fontWeight: 600,
        alignSelf: "center",
      };

    return (
    <div className="wrapper">
        <div className="home">
           
           <Typewriter style={centerTextStyle}
            onInit={(typewriter) => {
                typewriter.typeString('Hey, I am Sukanya, thanks for stopping by.<br/> Feel free to explore to know more about me!!')
                .start();
            }}
            />

           
        </div> 

        <div className="container">
            <div className="row">
                <div className="col p-5">
                    <img src={profilePicture} id= "dp_img" className= "img-fluid"/>
                </div>
                <div className="col p-5 d-flex justify-content-center">
                    <span className="m-auto">Hi I am a software developer with experience in Java(Spring framework, Hibernate), SQL, WebServices and other backend technologies. I have worked with many clients including Sunrise Communications AG. and Travel Click (Amadeus) and am currently working in Cybage software Pvt. Ltd.
                    Other than software development I am a passionate traveller so If you want to know more about my travel stories do checkout the blogs sections.Hey, I am Sukanya, thanks for stoping by.<br/> Feel free to explore to know more about me!!
                    </span> 
                </div>
            </div>
        </div>
        <div className="contact p-5">
            <div className="social w-50 d-flex justify-content-around align-items-center container p-5">
                <a href="https://github.com/sukanya120"><FontAwesomeIcon icon={faGithub} size="3x" color="darkslategrey"/></a>
                
                <a href= "https://www.linkedin.com/in/sukanyapaul14/"><FontAwesomeIcon icon={faLinkedin} size="3x" color="darkslategrey"/></a>
                <a href= "https://www.facebook.com/sukanya.paul.146/"><FontAwesomeIcon icon={faFacebook} size="3x" color="darkslategrey"/></a>
                <a href= "https://www.instagram.com/sukanya.paul.146/"><FontAwesomeIcon icon={faInstagram} size="3x" color="darkslategrey"/></a>
                
            </div>
            
            <div className="message w-50 my-5">
                <Message/>
            </div>
        
        </div>

        
    </div>
    )
    
}