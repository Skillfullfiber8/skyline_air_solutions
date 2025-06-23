import React from "react";
import "./banner.css";
import banner from "./assets/banner.png";

function Banner(){
    return(
        <div  id="home" className="container-2">
            <div className="banner">
                <a href="#contactus"><img className="banner-img" src={banner} alt="" /></a>
            </div>
        </div>
            
    )
}

export default Banner