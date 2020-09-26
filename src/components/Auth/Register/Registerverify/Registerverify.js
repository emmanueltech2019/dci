import React, { Component } from 'react';
import './Registerverify.css';
import img1 from '../../../../images/registerbg.jpg';
import {Link} from "react-router-dom"
const axios = require("axios")
class Registerverify extends Component {
    state={
        box1:"",
        box2:"",
        box3:"",
        box4:""
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const { box1,box2,box3,box4 } =this.state
        const email =localStorage.getItem("email")
        const accesscode = box1+box2+box3+box4
        axios.post("https://stormy-wildwood-75014.herokuapp.com/api/v1/user/verified",{email,accesscode})
        .then(res=>{
            window.location="/login"
        })
    }
    componentDidMount(){
        const email =localStorage.getItem("email")
        axios.post("https://stormy-wildwood-75014.herokuapp.com/api/v1/user/verify",{email})
    .then(data=>{
      console.log(data)
      console.log("got")
    })
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        return (
            <div>
                <img src={img1} alt="" className="reg-bg"/>
                        <div className="register-form">
                <div className="register-form-box">
                    <h1>Sign up</h1>
                    <p>Fill all form field to go to next step </p>
                        <div className="direction-form-reg ">
                        <div>
                                <span className="fa fa-lock color-bg-icon "></span>
                                <h4>Account</h4> 
                            </div>
                            <div>
                                <span className="fa fa-user-o color-bg-icon "></span>
                                <h4>Personal</h4>
                            </div>
                            <div>
                                <span className="fa fa-check color-bg-icon "></span>
                                <h4>Verification</h4> 
                            </div>
                            <div>
                                <span className="fa fa-key  "></span>
                                <h4>Login</h4>
                            </div>
                        </div>
                        <div className="verifycation-codebox">
                        <p>please input verification code sent to your email </p>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <div>
                                    <input type="text" onChange={this.handleChange} name="box1"/>
                                </div>
                                <div>
                                    <input type="text" onChange={this.handleChange} name="box2"/>
                                </div>
                                <div>
                                    <input type="text" onChange={this.handleChange} name="box3"/>
                                </div>
                                <div>
                                    <input type="text" onChange={this.handleChange} name="box4"/>
                                </div>
                            </div>
                        </form>
                        <span>Didn't get the code <Link>Resend</Link></span>
                        <Link onClick={this.handleSubmit}>
                            <button className="btn">Verify</button>
                        </Link>
                        </div>

                </div>
            </div>
            </div>
        );
    }
}

export default Registerverify;