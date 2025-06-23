import React from "react";
import "./wcu.css";
import dottedbg from "./assets/dottedbg.svg";
import quickres from "./assets/quick-response.svg";
import tailorsoln from "./assets/tailor-solution.svg";
import pricetag from "./assets/price-tag.svg";

function Wcu(){
    return(
        <div className="container-4">            
            <div className="dottedbg-bg">
                <img className="dottedbg" src={dottedbg} alt="" />
                <div className="bg-con">
                    <h2>Why Choose Us ?</h2>
                    <div className="wcu-cards">

                        <div className="wcu-card" style={{backgroundColor:"#CEE7FE"}}>
                            <div className="title">
                                <img src={quickres} alt="" />
                                <h4>QUICK RESPONSE</h4>
                            </div>
                            <div className="con">
                                <p>We dispatch certified technicians within hours, minimizing downtime and restoring comfort quickly.</p>
                            </div>
                        </div>

                        <div className="wcu-card" style={{backgroundColor:"white"}}>
                            <div className="title">
                                <img src={tailorsoln} alt="" />
                                <h4>TAILORED SOLUTION</h4>
                            </div>
                            <div className="con">
                                <p>Customized systems designed to meet your specific space and budget.</p>
                            </div>
                        </div>

                        <div className="wcu-card" style={{backgroundColor:"#E7DBDB"}}>
                            <div className="title">
                                <img src={pricetag} alt="" />
                                <h4>TRANSPARENT PRICING</h4>
                            </div>
                            <div className="con">
                                <p>No hidden charges—just honest, upfront quotes.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
            
    )
}

export default Wcu