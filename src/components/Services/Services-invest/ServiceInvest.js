import React, { Component } from 'react';
import './ServiceInvest.css'
import img1 from "../../../images/srvs-invst.jpg"
class ServiceInvest extends Component {
    render() {
        return (
            <div className="serviceInvest">
                <div className="serviceInvest-1">
                    <img src={img1} alt=""/>
                </div>
                <div className="serviceInvest-2">
                    <div className="about-text-1">
                        <button className="spot-box"></button>
                        <h2 className="home-about-h2" >INVESTMENT</h2>
                    </div>
                    <h1>Investment Scheme</h1>
                    <p>DCI investment scheme is open to all members of the public,
                         it does not permit the participation of the investor in the
                         day to day running of the business or entity; the investor 
                         only receives 5 per cent to 7 per cent interest monthly depending
                         on the invested sum for the duration of 12 months. Upon the completion
                         of the said 12 months, the capital shall be returned to the investor
                         with an option of renewal.
                    </p>
                    <button className="btn-default-color">Invest today
                        <span className="fa fa-chevron-down"></span>
                    </button>
                </div>
            </div>
        );
    }
}

export default ServiceInvest;