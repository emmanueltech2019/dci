import React, { Component } from 'react';
import {Link} from "react-router-dom"
import "./UnupdatedProfile.css"
import Navigation from '../Navigation/Navigation'
import invetsdashboardicon from '../../../../images/invetsdashboardicon.PNG'
import invetsdashboardicon2 from '../../../../images/invetsdashboardicon2.PNG'
import invetsdashboardicon3 from '../../../../images/invetsdashboardicon-3.PNG'
import axios from 'axios'
class UnupdateProfile1 extends Component {
    state={
        btnColorSelect:"btn-primary",
        isOpenInputId:false,
        referralsId:"",
        referralsName:"",
        identificationMeans:"",
        identificationNo:"",
        nameOfOrgnisation:"",
        lga:"",
        stateOfOrigin:""
    }
    handleBtnChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
            isOpenInputId:true
        })
        setTimeout(() => {
            console.log(this.state)
        }, 3);
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
    handleSubmit=()=>{
        const id =localStorage.getItem("id")
        const {referralsId,referralsName,identificationMeans,identificationNo,nameOfOrgnisation,lga,stateOfOrigin} =this.state;
        const data ={
            referralsId,
            referralsName,
            identificationMeans,
            identificationNo,
            nameOfOrgnisation,
            lga,
            stateOfOrigin
        }
        axios.put(`https://stormy-wildwood-75014.herokuapp.com/api/v1/user/personal/${id}/newuser/two`,data)
        .then(res=>{
            console.log(res)
            window.location="/dashboard/user/unupdated-form/two"
        })
    }
    render() {
        const {btnColorSelect,isOpenInputId}=this.state
        return (
            <div>
                <Navigation/>
                <div className="unupdated-profile-plan space-dashbbord-box">
                    <div className="unupdated-profile-plan-profile">
                        <div className="unupdated-profile-plan-profile-1">
                            <h1>Welcome Emmanuel</h1>
                            <span>Please Update Your Account To Select A Future To Start</span>
                        </div> 
                        <div>
                            <img src={invetsdashboardicon} alt="" />
                        </div>
                        <div>
                            <img src={invetsdashboardicon2} alt=""/>
                        </div>
                        <div>
                            <img src={invetsdashboardicon3} alt=""/>
                        </div>
                    </div>
                    <h3 style={{
                        color:" #667AB0",
                        fontSize: "20px",
                        padding:"20px 0 0 70px"}}>Your details</h3>
                    <div className="unupdated-profile-plan-2">
                    <form onSubmit={this.handleSubmit}>
                        
                        <div className="form-group">
                            <label for="exampleInputEmail1">State Of Origin</label>
                            <input type="text" className="form-control" name="stateOfOrigin"  onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Lga</label>
                            <input type="text" className="form-control" name="lga"  onChange={this.handleChange}  />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Name of Organisation</label>
                            <input type="text" className="form-control" name="nameOfOrgnisation"  onChange={this.handleChange}  />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Referrals Name</label>
                            <input type="text" className="form-control" name="referralsName"  onChange={this.handleChange}  />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Referrals Ref No</label>
                            <input type="text" className="form-control" name="referralsId"  onChange={this.handleChange}  />
                        </div>
                        <div className="identity-btns">
                            <label>Means of Identification</label>  <br/>
                                <button 
                                type="button" 
                                onClick={this.handleBtnChange} 
                                value="Voters Card" 
                                name="identificationMeans"
                                className={`btn ${btnColorSelect}`}>voters card</button>
                                <button 
                                type="button"
                                onClick={this.handleBtnChange} 
                                value="National Id" 
                                name="identificationMeans"
                                className={`btn ${btnColorSelect}`
                                 }>National Id</button>
                                <button 
                                type="button" 
                                onClick={this.handleBtnChange} 
                                value="International Passport" 
                                name="identificationMeans"
                                className={`btn ${btnColorSelect}`}>Int'l passport</button>
                                <button 
                                type="button" 
                                onClick={this.handleBtnChange} 
                                value="Drivers License" 
                                name="identificationMeans"
                                className={`btn ${btnColorSelect}`}>Drivers license</button>
                               { isOpenInputId?<div className="form-group">
                            <label for="exampleInputPassword1">id number</label>
                            <input type="text" className="form-control" name="identificationNo" onChange={this.handleChange} />
                        </div>:null}
                        </div>
                        <Link onClick={this.handleSubmit}>
                        <button className="btn-default-color-sm">Next</button>
                        </Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default UnupdateProfile1;