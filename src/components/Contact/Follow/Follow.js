import React, { Component } from 'react';
import './Follow.css'
class Follow extends Component {
    render() {
        return (
            <div className="follow">
                <div className="follow-1">
                    <h2>FOLLOW US:</h2>
                </div>
                <div className="follow-2">
                    <i className='fa fa-facebook'></i>
                    <i className='fa fa-instagram'></i>
                    <i className='fa fa-twitter'></i>
                </div>
            </div>
        );
    }
}

export default Follow;