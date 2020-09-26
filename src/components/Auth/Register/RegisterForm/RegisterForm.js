import React, { Component } from 'react';
import axios from 'axios';
import './RegisterForm.css';


class RegisterForm extends Component {
    state={
        email:null,
        password:null,
        cpassword:null
    }
    handleSubmit=(e)=>{
        e.preventDefault(); 
        let email = null
        let password = null
        if(this.state.email && this.state.password===this.state.cpassword){
            email=this.state.email
            password=this.state.password
        }
        const data ={
            email,
            password
        }
        axios.post("https://stormy-wildwood-75014.herokuapp.com/api/v1/user/register",data)
        .then(res=>{
            const id = res.data.user._id
            window.location=`/register/personal/${id}`
        })
        .catch(err=>{
            console.log(err)
        })
            
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        return (
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
                                <span className="fa fa-user-o  "></span>
                                <h4>Personal</h4>
                            </div>
                            <div>
                                <span className="fa fa-check  "></span>
                                <h4>Verification</h4> 
                            </div>
                            <div>
                                <span className="fa fa-key  "></span>
                                <h4>Login</h4>
                            </div>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label htmlFor="email">Email address</label>
                                <input 
                                type="email" 
                                className="form-control" 
                                name="email" 
                                placeholder="Enter email"
                                onChange={this.handleChange}
                                autoComplete="email"
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input 
                                type="password" 
                                className="form-control" 
                                name="password" 
                                placeholder="Password"
                                onChange={this.handleChange}
                                autoComplete="new-password"
                                />
                            </div>
                            <div>
                                <label htmlFor="cpassword">Comfirm Password</label>
                                <input 
                                type="password" 
                                className="form-control" 
                                name="cpassword" 
                                autoComplete="new-password"
                                placeholder="cpassword"
                                onChange={this.handleChange}
                                />
                            </div>
                            <button className="btn-default-color-sm" type="submit" onClick={this.handleSubmit}>Next</button>
                        </form>

                </div>
            </div>
        );
    }
}

export default RegisterForm;