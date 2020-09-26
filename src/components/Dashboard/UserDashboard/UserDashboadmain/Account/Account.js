import React, { Component } from 'react';
import "./Account.css"
import { Link } from 'react-router-dom';
import man from "../../../../../images/man.jpeg";
import axios from 'axios';
import Navigation from '../../Navigation/Navigation';
class Account extends Component {
    state={
        image:null,
        referralsId:null,
        referralsName:null,
        identificationMeans:null,
        identificationNo:null,
        nameOfOrgnisation:null,
        lga:null,
        stateOfOrigin:null,
        MaritalStatus:null,
        DateOfBirth:null,
        ResidentialAddress:null,
        NearestBusStop:null,
        CityTown:null,
        State:null,
        Nationality:null,
        fullname:null,
        email:null,
        accesscode:null,
        phonenumber:null,
        occupation:null,
        gender:null,
        plan:[],
    }
    componentDidMount(){
        const id= localStorage.getItem("id")
        const token = localStorage.getItem("token")
        axios({
            method: 'post',
            url: `https://stormy-wildwood-75014.herokuapp.com/api/v1/user/dashboarduser/${id}`,
            data: {},
            headers: {
              Authorization: 'Bearer ' + token
            }
          }).then( response=> {
            console.log(this.state.image);
            console.log(response)
            this.setState({
                // upToDate:response.data.user.upToDate,
                accesscode:response.data.user.accesscode,   
                fullname:response.data.user.fullname,
                image:response.data.user.image ?response.data.user.image.path:null,
                email:response.data.user.email,
                phonenumber:response.data.user.phonenumber,
                occupation:response.data.user.occupation,
                // phonenumber:response.data.user.phonenumber,
                plan:response.data.user.planDetails,
                identity:response.data.user.identificationMeans+" "+response.data.user.identificationNo,
                dob:response.data.user.DateOfBirth,
                MaritalStatus:response.data.user.MaritalStatus,
                ResidentialAddress:response.data.user.ResidentialAddress,
                NearestBusStop:response.data.user.NearestBusStop,
                CityTown:response.data.user.CityTown,
                stateOfOrigin:response.data.user.stateOfOrigin,
                Nationality:response.data.user.Nationality,
                State:response.data.user.State,
            })
          })
    }
    render() {
        const {
            accesscode,image,
            fullname,email,
            phonenumber,occupation,
            plan,identity,dob,
            MaritalStatus,ResidentialAddress,
            NearestBusStop,CityTown,State,
            Nationality,stateOfOrigin
        } =this.state
        console.log(plan)
        return (
            <>
                <Navigation/>
                <div className="Account-user-dashboard space-dashbbord-box">
                <div className="Account-user-dashboard-1">
                    <div className="Account-user-dashboard-1-1">
                        <img src={image} alt=""/>
                    </div>
        <h1>{accesscode}</h1>
        
                    {plan?<>
                    <div className="Account-user-dashboard-active-view">
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                            
                            <td>Feature</td>
                            <td>Investment</td>
                            
                            </tr>
                            <tr>
                           
                            <td>Investment Plan</td>
                    <td style={{color:"#295FA6"}}>{plan.dataName}<br/>{plan.dataPrice}</td>
                            
                            </tr>
                            <tr>
                            <td>Date of Commencement</td>
                            <td>10/05/2020</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="Account-user-dashboard-active-view-due-date">
                        <span>Date of Withdrawal</span>
                        <span>10/05/2020</span>

                    </div>
                    </>:
                        <Link to="/dashboard/user/dashboard/section">
                            <button className="btn-default-color-sm">Begin</button>
                        </Link>
                    }
                </div>
                <div className="Account-user-dashboard-2">
                    <div className="Account-user-dashboard-2-1">
                        <h4>Referrals</h4>
                        <span>empty</span>
                    </div>

                    <div className="Account-user-dashboard-2-2">
                    
                        <table class="table table-borderless">
                        <tbody>
                            <tr>
                            <th scope="row">Fullname</th>
                                <td>{fullname ? fullname :"null"}</td>
                            </tr>
                            <tr>
                            <th scope="row">Email</th>
                                <td>{email ? email :"null"}</td>
                            </tr>
                            <tr>
                            <th scope="row">Phone</th>
                                <td>+234 {phonenumber ? phonenumber :"null"}</td>
                            </tr>
                            <tr>
                            <th scope="row">occupation</th>
                                 <td>{occupation ? occupation : "null"}</td>
                            </tr>
                            <tr>
                            <th scope="row">Id</th>
        <td>{identity?identity :"null"}</td>
                            </tr>
                            <tr>
                            <th scope="row">Referrals</th>
                            <td>0</td>
                            </tr>
                            <tr>
                            <th scope="row">Referrals id</th>
                            <td>0</td>
                            </tr>
                            <tr>
                            <th scope="row">Phone</th>
                            <td>090000000000</td>
                            </tr>
                        </tbody>
                        </table>
                        <table class="table table-borderless">
                        <tbody>
                        <tr>
                            <th scope="row">Date of birth</th>
                <td>{dob?dob:null}</td>
                            </tr>
                            <tr>
                            <th scope="row">Marital status</th>
                <td>{MaritalStatus?MaritalStatus:null}</td>
                            </tr>
                            <tr>
                            <th scope="row">Residential Address</th>
                <td>{ResidentialAddress?ResidentialAddress:null}</td>
                            </tr>
                            <tr>
                            <th scope="row">Nearest bus Stop</th>
                <td>{NearestBusStop?NearestBusStop:null}</td>
                            </tr>
                            <tr>
                            <th scope="row">City/Town</th>
                <td>{CityTown?CityTown:null}</td>
                            </tr>
                            <tr>
                            <th scope="row">State</th>
                <td>{State?State:null}</td>
                            </tr>
                            <tr>
                            <th scope="row">Nationality</th>
                <td>{Nationality?Nationality:null}</td>
                            </tr>
                            <tr>
                            <th scope="row">State of origin</th>
                <td>{stateOfOrigin?stateOfOrigin:null}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </>
            
        );
    }
}

export default Account;