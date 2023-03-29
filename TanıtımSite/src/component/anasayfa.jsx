import React from 'react';
import { FaGithub, FaTwitter, FaEnvelope , FaLinkedin } from 'react-icons/fa';

const Anasayfa = () =>{
    
    
    return(
        <div className='anasayfa'>
            <h2 className='anasayfa-h1 mt'>Oguzhan Albayrak</h2>
            <h3 className='anasayfa-h3 mt'>Frontend Developer</h3>
            <p className='anasayfa-p mt'>I am developing myself in the field of Front End, which I continue to learn with love and enjoyment and I am working to specialize in this field. I also do designs in the web field. I like to work with the team, with the agile working method, with the division of labor.</p>
            <div className='blog-site mt'>
                <ul  className='blog-ul'>
                    <li  className='blog-li'>
                    <a href="https://github.com/Dellydivane">
                        <FaGithub /> 
                    </a>
                    </li>
                    <li className='blog-li'>
                    <a href="https://twitter.com/AlbayrakOsan">
                        <FaTwitter /> 
                    </a>
                    </li>
                    <li className='blog-li'>
                    <a href="mailto:osan.albayrak.29@gmail.com">
                        <FaEnvelope />
                    </a>
                    </li>
                    <li className='blog-li'>
                    <a href="https://www.linkedin.com/in/oguzhan-albayrak/">
                        <FaLinkedin />
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Anasayfa