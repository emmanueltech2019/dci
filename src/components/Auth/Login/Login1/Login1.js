import React, { Component } from 'react';
import img1 from '../../../../images/registerbg.jpg';
import {Link} from 'react-router-dom';
import {Button,Spinner} from 'react-bootstrap';
import axios from 'axios';

import "./Login1.css"
class Login1 extends Component {
    state = {
        type: 'password',
        email:'',
        password:'',
        loading:false
      }
    handleSubmit=()=>{
        this.setState({
            loading:true
        })
        const {email,password}=this.state
        axios.post("https://stormy-wildwood-75014.herokuapp.com/api/v1/user/login",{email,password})
        .then(res=>{
            localStorage.setItem("token",res.data.token)
            const id =res.data.user._id
            localStorage.setItem("id",id)
            if(res.data.user.planDetails){
                window.location="/dashboard/user/dashboard/active-plan"
            }
            else{
                window.location=`/dashboard/user/${id}`
            }
        })
    }
    handleClick = () => this.setState(({type}) => ({
        type: type === 'password' ? 'text' : 'password'
      }))
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        return (
            <div>
                <div>
                <img src={img1} alt="" className="reg-bg"/>
                        <div className="register-form">
                <div className="register-form-box">
                    <h1 style={{paddingBottom:"80px"}}>Log In</h1>
                        {/* <div className="direction-form-reg ">
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
                                <span className="fa fa-key  color-bg-icon"></span>
                                <h4>Login</h4>
                            </div>
                        </div> */}
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input 
                                type="email" 
                                className="form-control" 
                                name="email"
                                onChange={this.handleChange} 
                                aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label><br/>
                                <label className="password-login">
                                    <input 
                                    type={this.state.type} 
                                    className="password__input"
                                    onChange={this.handleChange}
                                    name="password"
                                    autoComplete="new-password"
                                    />
                                    <span className="password__show" onClick={this.handleClick}>
                                        {this.state.type === 'text' ? <i className="fa fa-eye" 
                                        style={{padding:"0 0  0 10px",fontSize:"30px",color:"#C4C4C4"}}></i> : 
                                        <i className="fa fa-eye-slash" style={{color:"#C4C4C4",padding:"0 0  0 10px",fontSize:"30px"}}>
                                        </i>}</span>
                                </label>
                            </div>
                            
                        </form>
                        <span className="forgot-password">Forgot Password?</span>
                        <span className="dont-have-account">Don't Have an Account? <Link to="/register">Register</Link></span>
                        
                      {this.state.loading?
                          <button variant="primary"  className="btn-default-color-sm first-login-btn">
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                          Loading...
                        </button>:
                           <button onClick={this.handleSubmit} className="btn-default-color-sm first-login-btn">Login</button>
                      }
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Login1;