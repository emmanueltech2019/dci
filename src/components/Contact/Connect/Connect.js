import React, { Component } from 'react';
import "./Connect.css"
class Connect extends Component {
    render() {
        return (
            <div className="connect-contact">
                <div className="about-text-1">
                    <button className="spot-box"></button>
                    <h2 className="home-about-h2" style={{color:"#fff"}}>GET IN TOUCH</h2>
                </div>
                <h1>Connect With Us</h1>
                <div className="connect-contact-1">
                    <div>
                        <div className="elementor-icon">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                        <h3>Find Us</h3>
                        <span>SF 35, Pacific Complex, Awka Road, Onitsha, Anambara State. Nigeria.</span>
                    </div>
                    <div>
                    <div className="elementor-icon">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <h3>Make a Call</h3>
                        <span>08153083472 </span> <span> ,</span>
                        <span> 07040368609   </span>
                    </div>
                    <div>
                    <div className="elementor-icon">
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </div>
                        <h3>Mail Us</h3>
                        <span>info@doublecoininvestment.com</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Connect;