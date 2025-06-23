import React from "react";
import "./header.css"
import logo from './assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";




function Header() {
    const [style, setStyle] = useState("close-nav");

    const changeStyle = () => {
        setStyle(prev => (prev === "open-nav" ? "close-nav" : "open-nav"));
    };

    const closeMenu = () => {
        if (window.innerWidth <= 1018) {
            setStyle("close-nav");
        }
    };  
    
    return(
        
        <div className="nav-bar" id="myTopnav">
            <div className="container-1">
                <a href="#home"><img className="logo" src={logo} alt="" /></a>
                <div className={style}>
                    <a href="#home" onClick={closeMenu}>Home</a>
                    <a href="#services" onClick={closeMenu}>Services</a>
                    <a href="#aboutus" onClick={closeMenu}>About Us</a>
                    <a href="#contactus" onClick={closeMenu}>Contact Us</a>
                </div>
                <div className="burger">
                    <i onClick={changeStyle}>
                        <FontAwesomeIcon icon={faBars} />
                    </i>
                </div>
            </div>    
        </div>
              
    )

    
}


export default Header
