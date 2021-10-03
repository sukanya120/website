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

        <div className="about container">
            <div id="dp" className= "m-5 p-5">
                <img src={profilePicture} id= "dp_img" className= "m-5"/>
            </div>

            <div id="atext">
                <span className="centertextabout">Hi I am a software developer with experience in Java(Spring framework, Hibernate), SQL, WebServices and other backend technologies. I have worked with many clients including Sunrise Communications AG. and Travel Click (Amadeus) and am currently working in Cybage software Pvt. Ltd.

                    Other than software development I am a passionate traveller so If you want to know more about my travel stories do checkout the blogs sections.Hey, I am Sukanya, thanks for stoping by.<br/> Feel free to explore to know more about me!!
                </span> 
            </div>
        </div>
        <div className="contact">
            <div className="social w-50">
                <a href="https://github.com/sukanya120"><FontAwesomeIcon icon={faGithub} size="3x" color="black"/></a>
                
                <a href= "https://www.linkedin.com/in/sukanyapaul14/"><FontAwesomeIcon icon={faLinkedin} size="3x" color="black"/></a>
                <a href= "https://www.facebook.com/sukanya.paul.146/"><FontAwesomeIcon icon={faFacebook} size="3x" color="black"/></a>
                <a href= "https://www.instagram.com/sukanya.paul.146/"><FontAwesomeIcon icon={faInstagram} size="3x" color="black"/></a>
                
            </div>
            
            <div className="message w-50">
                <Message/>
            </div>
        
        </div>

        
    </div>
    )
    
}