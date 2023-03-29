import React from 'react';
import {FaMoon , FaSun} from 'react-icons/fa'
import { useState } from "react";


const Navbar = ({colorAl}) => {
  
  const projeYonlendir = () =>{
    window.scrollTo({
      top: 1880,
      behavior: "smooth"
    });
    
  }
  const egitimYonlendir = () =>{
    window.scrollTo({
      top: 930,
      behavior: "smooth"
    });
  }
  const anasayfaYonlendir = () =>{
    window.scrollTo({
      top: 170,
      behavior: "smooth"
    });
  }

  const [isSunVisible, setIsSunVisible] = useState(false);
  

  const toogleSun = () =>{
    setIsSunVisible(true);
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    colorAl("white")
    console.log(colorAl)
   
    
  }
  const toogleMoon = () =>{
    setIsSunVisible(false)
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black"
    
    
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="OAlogo.png" alt="Logo" />
      </div>
      <div className='gece-gunduz'>

        {isSunVisible ? (<FaSun className='sun' onClick={toogleMoon}/>)

        : (<FaMoon onClick={toogleSun}/>) }

      </div>
      <ul className="navbar-menu">
        <li className="navbar-item"><button onClick={anasayfaYonlendir}>Anasayfa</button></li>
        <li className="navbar-item"><button onClick={egitimYonlendir}>Egitim</button></li>
        <li className="navbar-item"><button onClick={projeYonlendir}>Projeler</button></li>
      </ul>
    </nav>
  );
};
export default Navbar;
