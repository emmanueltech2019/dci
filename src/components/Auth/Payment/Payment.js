import React, { Component } from 'react';
import Navigation from "../../Dashboard/UserDashboard/Navigation/Navigation"
import PaymentOption from "../Payment/PaymentOption"
import "./Payment.css"
class Payment extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <PaymentOption/>
            </div>
        );
    }
}

export default Payment;