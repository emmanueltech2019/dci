import React, { Component } from 'react';
import './About.css'
import img1 from '../../../../images/ab-img.jpg'
import { Link } from 'react-router-dom';
class About extends Component {
    render() {
        return (
            <div className="about-section">
               
                    <div>
                        <img src={img1} alt=""/>
                        
                    </div>
                    <div className="about-text">
                        <div className="about-text-1">
                        <button className="spot-box"></button>
                            <h2 className="home-about-h2">ABOUT US</h2>
                        </div>
                
                    <h2 className="about-text-h2-2">Duly incorporated in the Federal Republic of Nigeria</h2>
                    <p className="about-text-p-1">
                        A certified money lender complying with other statutory regulatory compliance; 
                        we are into trading in all ramifications, Agriculture, Real Estate, Investment, 
                        Transportation and Oil and Gas services.</p>
                        <p className="about-text-p-2">We have investment plans for different strata and persons of the societies that make
                             it easy for anybody to earn a minimum profit from 5% (per cent) and above monthly.</p>
                             <Link to="/about">
                             <button className="btn-default-color">
                                More About Who We Are
                                <i className="fa fa-chevron-right"></i>
                            </button>
                             </Link>
                    
                    </div>
                    <span className='quality-tag'>
                        <i className="fa fa-handshake-o fa-2x" aria-hidden="true"></i><br/>
                        <span>Quality & Premium</span><br/>
                        <h3>Customer Service</h3>
                        </span>  
                
            </div>
        );
    }
}

export default About;