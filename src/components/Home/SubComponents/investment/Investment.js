import React, { Component } from 'react';
import "./Investment.css"
import iconmoney from '../../../../images/iconmoney.jpg'
import { Link } from 'react-router-dom';
class Investment extends Component {
    render() {
        return (
            <div className="Investment-section" id="investmentScheme">
                <div className="Investment-section-1">
                    <h1>Investment Scheme</h1>
                    <h2>the investor only receives 5 per cent to 7 per cent interest monthly</h2>
                        <p>Depending on the invested sum for the duration of 12 months. Upon the
                        completion of the said 12 months, the capital shall be returned
                        to the investor with an option of renewal.</p>
                        <Link to="/services">
                        <button className="btn-default-color">
                        See Investment Details<i className="fa fa-chevron-right">
                    </i></button>
                        </Link>
                   
                </div>

                <div className="Investment-section-2">
                    <div>
                        <img src={iconmoney} alt=""/>
                        <h2>Double Coin Bronze</h2>
                    </div>
                    <div>
                        <img src={iconmoney} alt=""/>
                        <h2>Double Coin Silver</h2>
                    </div>
                    <div>
                        <img src={iconmoney} alt=""/>
                        <h2>Double Coin Gold</h2>
                    </div>
                    <div>
                        <img src={iconmoney} alt=""/>
                        <h2>Double Coin Diamond</h2>
                    </div>
                    <div>
                        <img src={iconmoney} alt=""/>
                        <h2>Double Coin Platinum</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Investment;