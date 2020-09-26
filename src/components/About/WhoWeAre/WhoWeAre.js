import React, { Component } from 'react';
import  './WhoWeAre.css'
import img1 from '../../../images/ab-img.jpg'
class WhoWeAre extends Component {
    render() {
        return (
            <div className="WhoWeAre">
                <div className="WhoWeAre-1">
                    <img alt="" src={img1}/>
                </div>
                <div className="WhoWeAre-2">
                    <div className="about-text-1">
                        <button className="spot-box"></button>
                        <h2 className="home-about-h2">WHO WE ARE</h2>
                    </div>
                    <h1>We Are A Credible Investment Agency</h1>
                    <div className="WhoWeAre-2-text">
                        <p>Double Coin Investment Nigeria Ltd is a world-class investment firm 
                            established with the vision of creating platforms for sustainable financial 
                            freedom for the generality of society.</p>
                            <p>
                            The firm is duly incorporated in the Federal Republic of Nigeria, 
                            a certified money lender complying with other statutory regulatory 
                            compliance; we are into trading in all ramifications, Agriculture, 
                            Real Estate, Investment, Transportation and Oil and Gas services.
                            </p>
                            <p>We have investment plans for different strata and persons of the 
                                societies that make it easy for anybody to earn a minimum profit 
                                from 5% (per cent) and above monthly.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WhoWeAre;