import React, { Component } from 'react';
import "./Transfer.css"
import {Link} from "react-router-dom"
class Transfer extends Component {
    state={
        id:""
    }
    componentDidMount(){
        this.setState({
            id:localStorage.getItem("id")
        })
    }
    render() {
        const {id}=this.state
        return (
            <div className="Transfer-box">
                <div className="payment-box-header">
                    <div>
                        <h4>Pay &#x20A6;<span>100,000</span></h4><br/>
                        <p className="payer'sname">emmanuel lucky</p>
                    </div>
                </div>
                <div className="container-pay-box">
                    <table class="table table-borderless">
                    <tbody>
                        <tr>
                            <td>Account Number</td>
                            <td>0592395220</td>
                        </tr>
                        <tr>
                        
                        <td>Account Name</td>
                        <td>Double Coin Investment LTD</td>
            
                        </tr>
                        <tr>
                        
                        <td>Bank</td>
                        <td>GTBank</td>
            
                        </tr>
                        
                    </tbody>
                </table>
                </div>
                
                <div className="uploadproof-btn-link">
                    <button type="button" disabled>made payment?</button>
                    <Link to={`/payment/${id}/proof`}>
                    <button type="button"  >Upload Proof</button>
                    
                    </Link>
                </div>
            </div>
        );
    }
}

export default Transfer;