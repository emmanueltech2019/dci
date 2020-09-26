import React, { Component } from 'react';
import Nav from "../../Home/SubComponents/Showcase/Nav"
import "./Showcase.css"
import img1 from '../../../images/reg-bg.jpg'
class Showcase extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="showcase-about">
                    <img alt="" src={img1}/>
                    <div className="showcase-about-text-box">
        <h1>{this.props.name}</h1>
                        <div className="fa fa-chevron-down"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Showcase;