import React, { Component } from 'react';
import "./showcase.css"
import img1 from "../../../../images/home-banner-bg1.jpg"
import MyNav from "../Showcase/Nav"
import { Link } from 'react-router-dom';
import scrollToElement from 'scroll-to-element'

class Showcase extends Component {
    scrol=()=>{
        scrollToElement('#investmentScheme');
    }
    render() {
        return (
            <div className="showcase">
                <MyNav/>
                <img src={img1} alt="" className="main-bg"/>
                <div className="showcase-content">
                    <h1>A World-Class <br/>Investment Firm</h1>
                    <h2>Investments, Savings and Loans<br/>
                        Built on integrity and professionalism.
                    </h2>
                    <Link to="#investmentScheme" onClick={this.scrol}>
                    <button className="btn-default-color">View Services<i className="fa fa-chevron-right"></i></button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Showcase;