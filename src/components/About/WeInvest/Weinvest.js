import React, { Component } from 'react';
import './Weinvest.css';
import img1 from "../../../images/weinvestin.jpg"
import Weinvesttabs from './Weinvesttabs';
class Weinvest extends Component {
    render() {
        return (
            <div className="Weinvest">
                <div className="Weinvest-1">
                    <img alt="" src={img1}/>
                </div>
                <div className="Weinvest-2">
                <div className="about-text-1">
                        <button className="spot-box"></button>
                        <h2 className="home-about-h2" style={{color:"#fff"}}>HOW DOES YOUR MONEY GROW ?</h2>
                    </div>
                    <h1>
                    We Invest In;
                    </h1>
                    <Weinvesttabs/>
            </div>
            </div>
        );
    }
}

export default Weinvest;