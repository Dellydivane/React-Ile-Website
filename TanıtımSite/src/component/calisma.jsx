import React from 'react';
import { FaHtml5 , FaCss3Alt , FaBootstrap , FaJs , FaReact } from 'react-icons/fa';
import { useState } from "react";


const Calisma = ({colorGonder}) =>{
    
    

    return(
        <div className='seruven'>
            <div className='mt'>
                <h2 >Services I offer</h2>
                <h4>You can take a look at the services I provide below.</h4>
            </div>
            <div  className='calisma mt'>
            
                <div style={{backgroundColor:colorGonder,color:'black'}} className='calisma-div'>
                    <img src="galeri.png" alt="" />
                    <h2>Beautil Designs</h2>
                    <h3>I am developing myself in the field of design that I am interested in and I am working in this field. In particular, I believe in colors, the harmony of colors, the feelings and emotions that the color arouses in people. Another issue is that besides the compatibility of these colors, I make designs by giving importance to the user experience, aiming that the user can use the application comfortably and find what he is looking for very quickly.</h3>
                </div>
                <div style={{backgroundColor:colorGonder,color:'black'}} className='calisma-div'>
                    
                    <img src="hashtag.png" alt="" />
                    <h2>Clean Code</h2>
                    <h3>I am in the process of improving myself in the coding part, I take care to write clean code and work with the logic of "Less code is more work" and I develop myself in this way. I do not hesitate to use new technologies and continue to progress by keeping up with today's technologies.Below you can see the technologies that I actively use for frontend development.</h3>
                    <h3 className='opac'>Code languages I use</h3>
                    <div>
                    <ul className='display'>
                        <li ><FaHtml5/>  Html5</li>
                        <li ><FaCss3Alt/>  CSS3</li>
                        <li ><FaBootstrap/>  Bootstrap</li>
                        <li ><FaJs/>  JavaScript</li>
                        <li ><FaReact/>  ReactJS</li>
                    </ul>

                    </div>
                </div>
                <div style={{backgroundColor:colorGonder,color:'black'}} className='calisma-div'>
                    <img src="el.png" alt="" />
                    <h2>Hard Work</h2>
                    <h3>I learn this job with pleasure and enjoyment, and I don't think that this pleasure will ever end. By continuing in this way, I aim to reach high places in this field, to take part in important projects and to contribute to them.</h3>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Calisma