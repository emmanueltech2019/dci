import React, { Component } from 'react';
import "./PayStack.css"
import Axios from 'axios';
class PayStack extends Component {
    handleSubmit=()=>{
        const email = localStorage.getItem("email")
            const dataPrice =localStorage.getItem("dataPrice")
            const dataName =localStorage.getItem("dataName")
            const data={
                amount:parseInt(dataPrice),
                email
            }
            console.log(data)
            Axios.post("https://stormy-wildwood-75014.herokuapp.com/api/v1/payment/paystack",data)
            .then(res=>{
                window.location=res.data.data
            })
            .catch(err=>{
                console.log(err)
            })
    }
    render() {
        const amount = localStorage.getItem("datPrice")
        return (
            <div className="PayStack-box">
                <div className="payment-box-header">
                    <div>
        <h4>Pay &#x20A6;<span>{amount}</span></h4><br/>
                        <p className="payer'sname">emmanuel lucky</p>
                    </div>
                </div>
                <div className="container-pay-box">
                    {/* <h3>Enter your card details to pay</h3> */}
                {/* <form>
                        <div class="form-group">
                            <label>Card number</label>
                            <input type="text" class="form-control"   placeholder="0000 0000 0000 0000"/>
                        </div>
                        <div class="row">
                        <div class="col">
                        <label >Expiring Date</label>
                        <input type="text" class="form-control" />
                        </div>
                        <div class="col">
                        <label >CVV</label>
                        <input type="text" class="form-control" />
                        </div>
                    </div>
                        
                    </form> */}
                    <div className="paystack-btn">
                        <button type="button"   className="btn">Back</button>
                        <button type="button"  onClick={this.handleSubmit} className="btn">Pay Now</button>
                    </div>

                    </div>
            </div>
        );
    }
}

export default PayStack;