import React, { Component } from 'react';
import './RegisterPersonal.css'
import img1 from '../../../../images/registerbg.jpg';
import {Link} from "react-router-dom" 
import axios from 'axios'

class RegisterPersonal extends Component {
    state={
        fullname:null,
        gender:null,
        occupation:null,
        phonenumber:null,
        id:this.props.match.params.id
    }
    handleSubmit=()=>{
        const {fullname,gender,occupation,phonenumber} = this.state
        const id = this.state.id
        axios.put(`https://stormy-wildwood-75014.herokuapp.com/api/v1/user/register/personal/${id}`,
        {fullname,gender,occupation,phonenumber})
        .then(res=>{
            localStorage.setItem("email",res.data.user.email)
            window.location="/register/verify" 
        })
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        console.log(this.state.id)
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
                                <span className="fa fa-user-o  color-bg-icon"></span>
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
                            <div className="form-group">
                                <label for="exampleInputEmail1">Full Name</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="fullname" 
                                onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">PHone Number</label>
                                <input 
                                type="text" 
                                class="form-control" 
                                name="phonenumber" 
                                onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label for="occupation">Occupation</label>
                                <input 
                                type="text" 
                                class="form-control" 
                                name="occupation" 
                                onChange={this.handleChange}
                            />
                            </div>
                            <div class="form-check form-check-inline">
                            <label class="form-check-label" for="inlineCheckbox1">Gender</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input 
                            class="form-check-input" 
                            type="checkbox" 
                            name="gender" 
                            value="male"
                            onChange={this.handleChange}
                            id="gender"
                            />
                            <label class="form-check-label" for="inlineCheckbox1">Male</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input 
                            class="form-check-input"
                            type="checkbox" 
                            name="gender"
                            value="female"
                            onChange={this.handleChange}
                            id="gender"
                            />
                            <label class="form-check-label" for="inlineCheckbox2">Female</label>
                            </div><br/>
                            <div class="form-check form-check-inline">
                            <input 
                            class="form-check-input" 
                            type="checkbox" 
                            id="inlineCheckbox2" 
                            value="option2"/>
                            <label class="form-check-label" for="inlineCheckbox2">i have read and agree to the terms condition</label>
                            </div>
                        </form>
                        <Link  onClick={this.handleSubmit}>
                            <button className="btn-default-color-sm">Next</button>
                        </Link>

                </div>
            </div>
            </div>
            
        );
    }
}

export default RegisterPersonal;