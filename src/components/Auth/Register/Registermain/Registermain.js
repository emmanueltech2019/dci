import React, { Component } from 'react';
import './Registermain.css'
import img1 from '../../../../images/registerbg.jpg'
import RegisterForm from '../RegisterForm/RegisterForm';
class Registermain extends Component {
    render() {
        return (
            <div className="registermain">
                <RegisterForm/>
                <img src={img1} alt=""/>
            </div>
        );
    }
}

export default Registermain;