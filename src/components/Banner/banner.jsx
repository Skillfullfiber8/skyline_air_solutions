import React from "react";
import "./banner.css";
import banner from "./assets/banner.svg";

function Banner(){
    return(
        <div className="container-2">
            <div className="banner">
                <a href=""><img className="banner-img" src={banner} alt="" /></a>
            </div>
        </div>
            
    )
}

export default Banner