import React, { Component } from 'react';
import "./Mission.css"
import img1 from '../../../images/icon21.png'
class Mission extends Component {
    render() {
        return (
            <div className="mission">
                <div className="mission-1">
                <div className="about-text-1">
                        <button className="spot-box"></button>
                        <h2 className="home-about-h2">MISSION & VISION</h2>
                    </div>
                    <h1>Our Mission</h1>
                    <p>To provide a reliable, secured and flexible platform for financial
                         freedom from all financial needs whether savings, investment or loan, 
                         buClt on integrity and professionalism</p>
                         <h1>Our Vision </h1>
                         <p>
                         To be a world class and reputable financial solution company in Nigeria and beyond.
                         </p>
                         <button className="btn-wight-bg">View Services<div className="fa fa-chevron-right"></div></button>
                </div>
                <div className="mission-2">
                    <img alt="" src={img1}/>
                    <h2>Duly Incorporated</h2>
                    <p>In the Federal Republic of Nigeria, a certified money lender complying with 
                        other statutory regulatory compliance.</p>
                </div>
            </div>
        );
    }
}

export default Mission;