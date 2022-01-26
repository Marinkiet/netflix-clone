import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
   const [show,handleShow] = useState(false) ;
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else{
                handleShow(false);
            }
        });
        return()=>{
            window.removeEventListener('scroll');
        };
    },[]);
  return(
  <div className={`nav ${show && 'nav_black'}`}>
      <img
      className='nav_log'
      src="logo.png"
      alt='Neflix-logo'></img>
       <img
      className='nav_avatar'
      src="shrek.png"
      alt='avatar'></img>
  </div>);
}

export default Navbar;
