import React, { Component } from 'react';
import Showcase from '../About/Showcase/Showcase';
import "./Register.css"
import Footer from '../footer.js/Footer';
class Register extends Component {
    render() {
        return (
            <div>
                <Showcase name="Register"/>
                <Footer/>
            </div>
        );
    }
}

export default Register;