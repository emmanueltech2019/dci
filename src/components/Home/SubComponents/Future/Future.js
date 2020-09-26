import React, { Component } from 'react';
import bg from '../../../../images/reg-bg.jpg';
import './Future.css'
import {Link} from "react-router-dom"
class Future extends Component {
    render() {
        return (
            <div className="futurepage">
                <img src={bg} alt=""/>
                <div className="overlay-blue"></div>
                
                <div className="futurepage-1">
                    <h1>Secure Your Financial Future With Our World Class Services</h1>
                </div>
                <h4 className="futurepage-1-h4">Start Today, Choose A Plan</h4>
                <Link to="/register">
                    <button className="btn-default-color futurepage-1-btn">
                        Register Here<span className="fa fa-chevron-right"></span>
                    </button>
                </Link>
                
            </div>
        );
    }
}

export default Future;