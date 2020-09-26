import React, { Component } from 'react';
import './TeamAbout.css'
class TeamAbout extends Component {
    render() {
        return (
            <div className="teamabout">
                <div className="about-text-1">
                        <button className="spot-box"></button>
                        <h2 className="home-about-h2">MISSION & VISION</h2>
                    </div>
                    <h1>Team</h1>
                    <p>
                    DCI is managed by skilled and seasoned professionals with the requisite 
                    knowledge and expertise in their different field of endeavors, DCI also 
                    engages young and eminently qualified professionals to manage, supervise 
                    and superintend the various businesses and investments the company is engaged. 
                    With the ultimate goal of maximizing profits and safe investment for secured and 
                    profitable ventures for our investors.
                    </p>
                    <button className="btn-default-color">Make The Move Now
                        <span className="fa fa-chevron-right"></span>
                    </button>
            </div>
        );
    }
}

export default TeamAbout;