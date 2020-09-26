import React, { Component } from 'react';
import "./UnupdatedProfile.css"
import Navigation from '../Navigation/Navigation'
import invetsdashboardicon from '../../../../images/invetsdashboardicon.PNG'
import invetsdashboardicon2 from '../../../../images/invetsdashboardicon2.PNG'
import invetsdashboardicon3 from '../../../../images/invetsdashboardicon-3.PNG'
import {Link,withRouter} from 'react-router-dom'
import axios from 'axios'

class UnupdateProfile extends Component {
    state={
        id:this.props.match.params.id,
        MaritalStatus:"",
        DateOfBirth:"",
        ResidentialAddress:"",
        NearestBusStop:"",
        CityTown:"",
        State:"",
        Nationality:""
    }
    handleSubmit=(e)=> {
        e.preventDefault();
        const {id,MaritalStatus,DateOfBirth,ResidentialAddress,NearestBusStop,CityTown,State,Nationality} =this.state
        axios.put(`https://stormy-wildwood-75014.herokuapp.com/api/v1/user/personal/${id}/newuser1`,{MaritalStatus,DateOfBirth,ResidentialAddress,NearestBusStop,CityTown,State,Nationality})
        .then(res=>{
            console.log(res)
            window.location="/dashboard/user/unupdated-form/one"
        })
        .catch(err=>{
            console.log(err)
        })
    }
    handleChange=(e)=> {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSelectChange = (event) => {
        this.setState({
          MaritalStatus: event.target.value
        })
      }

    render() {
        console.log(this.state.id)
          
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
                            <img src={invetsdashboardicon} alt=""/>
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
                        <div className="update-dot-direction">
                            <div className="update-dot-direction-active"></div>
                            <div className="update-dot-direction-unactive"></div>
                            <div className="update-dot-direction-unactive"></div>
                        </div>
                        <div class="form-check form-check-inline" style={{paddingBottom:"45px",paddingTop:"40px"}}>
                            <label class="form-check-label" for="inlineCheckbox1">Marital Status</label>
                        </div>
                        <select onChange={this.handleSelectChange} class="form-control" >
                            <option>Marital Status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="widowed">Widowed</option>
                            <option value="divorced">Divoreced</option>
                        </select>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Date Of Birth</label>
                            <input 
                            type="date" 
                            className="form-control" 
                            onChange={this.handleChange}
                            name="DateOfBirth" 
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Residential Address</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            onChange={this.handleChange}
                            name="ResidentialAddress" 
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Nearest Bus Stop</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            onChange={this.handleChange}
                            name="NearestBusStop" 
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">City/Town</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            onChange={this.handleChange}
                            name="CityTown"
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">State of Residence</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            onChange={this.handleChange}
                            name="State"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Nationality</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            onChange={this.handleChange}
                            name="Nationality" />
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

export default withRouter(UnupdateProfile);