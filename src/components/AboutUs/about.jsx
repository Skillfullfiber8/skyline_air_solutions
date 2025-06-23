import React from "react";
import "./about.css";
import bgimg from "./assets/bg-img.svg";

function About(){
    return(
        <div id="aboutus" className="container-5">
            <div className="bg-2">
                <img className="bgimage" src={bgimg} alt="" />
                <div className="bg-2-con">
                    <h2>About Us</h2>
                    <div>
                        <p>At <b>Skyline Air Solutions</b>, we specialize in delivering high-quality air conditioning and HVAC services for homes, offices, and large-scale commercial spaces. With a team of certified technicians and years of industry experience, we provide expert installation, maintenance, and repair solutions tailored to your needs.</p>
                        <br />
                        <p>Our commitment is simple — reliable service, honest pricing, and lasting comfort.</p>
                        <br />
                        <p>Whether it’s a single-room AC or a complex central system, we bring precision, efficiency, and care to every job. We don’t just install systems — we build relationships based on trust, speed, and satisfaction.</p>
                    </div>
                </div>
            </div>
            
        </div>
            
    )
}

export default About