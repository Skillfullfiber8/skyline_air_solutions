import React from "react";
import "./footer.css";
import insta from "./assets/insta.svg";
import linkedin from "./assets/linkedin.svg";
import twitter from "./assets/twitter.svg";

function Footer(){
    return(
        <div className="container6">
            <div className="footer">
                <div className="rights">
                    <p>© 2025 Skyline Air Solutions. All rights reserved</p>
                </div>               
                <div className="media-icons">
                    <a href=""><img src={insta} alt="" /></a>
                    <a href=""><img src={linkedin} alt="" /></a>
                    <a href=""><img src={twitter} alt="" /></a>
                </div>
            </div>
        </div>    
    )
}

export default Footer