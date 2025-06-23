import React from "react";
import grp1 from "./assets/group1.svg";
import grp2 from "./assets/group2.svg";
import grp3 from "./assets/group3.svg";
import grp4 from "./assets/group4.svg";
import grp5 from "./assets/group5.svg";
import grp6 from "./assets/group6.svg";
import grp7 from "./assets/group7.svg";
import grp8 from "./assets/group8.svg";
import grp9 from "./assets/group9.svg";
import grp10 from "./assets/group10.svg";
import "./services.css";

function Services(){
    return(
        <div id="services" className="container-3">
            <div className="services">
                <h2>Sales & Services</h2>
                <p className="services-sub">Explore our full range of air conditioning and ventilation solutions for every need.</p>
                <div className="cards">
                    <div className="card">
                        <div className="img"><img src={grp1} alt="" /></div>
                        <div className="content">
                            <p>Energy-efficient central cooling solutions for large spaces.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img"><img src={grp2} alt="" /></div>
                        <div className="content">
                            <p>Energy-efficient cooling with modern design, ideal for home and office spaces.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img"><img src={grp3} alt="" /></div>
                        <div className="content">
                            <p>Powerful air circulation and filtration for large-scale ventilation needs.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img"><img src={grp4} alt="" /></div>
                        <div className="content">
                            <p>All-in-one heating and cooling system, ideal for rooftops and compact spaces.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img"><img src={grp5} alt="" /></div>
                        <div className="content">
                            <p>Centralized cooling solution for large buildings using advanced water-based systems.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img"><img src={grp6} alt="" /></div>
                        <div className="content">
                            <p>Concealed, centralized cooling for multiple rooms via efficient ductwork.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img"><img src={grp7} alt="" /></div>
                        <div className="content">
                            <p>Concealed, centralized cooling for multiple rooms via efficient ductwork.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img"><img src={grp8} alt="" /></div>
                        <div className="content">
                            <p>Hassle-free annual service plans to keep your AC running smoothly and efficiently.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img"><img src={grp9} alt="" /></div>
                        <div className="content">
                            <p>Ceiling-mounted ACs offering 360° airflow and discreet, powerful cooling.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img"><img src={grp10} alt="" /></div>
                        <div className="content">
                            <p>High-accuracy cooling for critical spaces like data centers and labs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    )
}

export default Services