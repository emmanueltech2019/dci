import React, { Component } from 'react';
import PayStack from '../Payment/PayStack/PayStack'
import Transfer from "../Payment/Transfer/Transfer"
class PaymentOption extends Component {
    state={
        op1:"border-bottom",
        op2:"",
        content:<PayStack/>
    }
    switch1=()=>{
        this.setState({
            op1:"border-bottom",
            op2:"",
            content:<PayStack/>
        })
    }
    switch2=()=>{
        this.setState({
            op1:"",
            op2:"border-bottom",
            content:<Transfer/>
        })
    }
    render() {
    const {op1,op2,content} = this.state
        return (
            <div className="payment-method space-dashbbord-box">
                <h2 className="title">PAYMENT METHOD</h2>
                <div className="payment-method-1">
                    <div className="payment-method-1-tab">
                        <div className={`${op1}`} onClick={this.switch1}>Paystack</div>
                        <div className={`${op2}`} onClick={this.switch2}>Mobile Transfer / Bank Deposit</div>
                    </div>
        <div>{content}</div>
                </div>
            </div>
        );
    }
}

export default PaymentOption;