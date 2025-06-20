import React from "react";
import "./header.css"
import logo from './assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";




function Header(){
    const [style, setStyle] = useState("close-nav")
    const changeStyle = () => {
        if (style !== "close-nav") setStyle("close-nav")
        else setStyle ("open-nav")
    }
    
    return(
        
        <div className="nav-bar" id="myTopnav">
            <div className="container-1">
                <a href=""><img className="logo" src={logo} alt="" /></a>
                <div className={style}>
                    <a href="">Home</a>
                    <a href="">Services</a>
                    <a href="">About Us</a>
                    <a href="">Contact Us</a>
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
