import React from "react";
import "./contact.css";
import dottedbg2 from "./assets/dottedbg2.svg";
import mail from "./assets/mail.svg";
import phone from "./assets/phone.svg";
import map from "./assets/map.svg";

function Contact(){
    return(
        <div id="contactus" className="container-4">            
            <div className="dottedbg-bg">
                <img className="dottedbg" src={dottedbg2} alt="" />
                <div className="bg-con">
                    <h2>Contact Us</h2>
                    <div className="wcu-cards2">

                        <div className="wcu-card">
                            <div className="title">
                                <img src={mail} alt="" />
                                <h4>EMAIL</h4>
                            </div>
                            <div className="con">
                                <p>skylineairsolutions63@gmail.com</p>
                            </div>
                        </div>

                        <div className="wcu-card">
                            <div className="title">
                                <img src={phone} alt="" />
                                <h4>PHONE</h4>
                            </div>
                            <div className="con">
                                <p>SANGAMESHWARAN P</p>
                                <p>+91 99865 02809</p>
                                <p>+91 99865 03819</p>
                            </div>
                        </div>

                        <div className="wcu-card">
                            <div className="title">
                                <img src={map} alt="" />
                                <h4>LOCATION</h4>
                            </div>
                            <div className="con">
                                <p>No.52, SPD Plaza, 1st Floor,</p>
                                <p>Jyoti Niwas College Road,</p>
                                <p>Koramangala,</p>
                                <p>Bengaluru - 560 034</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
            
    )
}

export default Contact