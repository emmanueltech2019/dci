import React, { Component } from 'react';
import './Navigation.css'
import img1 from '../../../../images/logo-sm.png'
import {Link, NavLink} from 'react-router-dom';
import axios from 'axios';

class Navigation extends Component {
    state={
        image:"",
        dashboardurl:"/dashboard/user/dashboard/section",
        active1:"active",
        active2:"",
        active3:"",
        active4:"",
    }
    step1=()=>{
        this.setState({
            active1:"active",
            active2:"",
            active3:"",
            active4:"",
        })
    }
    step2=()=>{
        this.setState({
            active1:"",
            active2:"active",
            active3:"",
            active4:"",
        })
    }
    step3=()=>{
        this.setState({
            active1:"",
            active2:"",
            active3:"active",
            active4:"",
        })
    }
    step4=()=>{
        this.setState({
            active1:"",
            active2:"",
            active3:"",
            active4:"active",
        })
    }
    logout=()=>{
        localStorage.removeItem("id")
        localStorage.removeItem("ID")
        localStorage.removeItem("token")
        localStorage.removeItem("email")
        localStorage.removeItem("updated")
        window.location="/"
    }
    componentDidMount(){
        setInterval(() => {
            if(!localStorage.getItem("id")){
                window.location="/login"
            }
        }, 2000);
            
        const id= localStorage.getItem("id")
        const token = localStorage.getItem("token")
        axios({
            method: 'POST',
            url: `https://stormy-wildwood-75014.herokuapp.com/api/v1/user/dashboarduser/${id}`,
            data: {},
            headers: {
              Authorization: 'Bearer ' + token
            }
          }).then( res=> {
            console.log(res);
            if(res.data.user.activeplan===true){
                this.setState({
                    dashboardurl:"/dashboard/user/dashboard/active-plan"
                })
            }
            this.setState({
                image:res.data.user.image ? res.data.user.image.path:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png",
            })
          })
    }
    render() {
        const id =localStorage.getItem("id")
        const {image,dashboardurl,active1,active2,active3,active4} =this.state
        return (
            <div className="nav-dashboard">
                <div className="nav-dashboard-top">
                    <div className="nav-dashboard-top-search">
                        <label>
                            <input type="search" placeholder="Search"/><i className="fa fa-search"></i>
                        </label>
                    </div>
                    <div className="nav-dashboard-top-icons">
                        <i class="fa fa-bell-o fa-2x " aria-hidden="true">
                            <div className="notification-dashboard-icon">
                            </div>    
                        </i> 
                    </div>
                    <div className="nav-dashboard-top-pic">
                        <img src={image} alt=""/>
                    </div>
                </div>
                <div className="nav-dashboard-side">
                    <div className="nav-dashboard-side-logo">

                    <img alt="" src={img1}/>
                    <h1>Double Coin</h1>
                    <h3>Investment</h3>
                    </div>
                    <div className="dashboard-items-all">
                        <NavLink to={dashboardurl} >
                            <div className="dashboard-items">
                                <div  className={`dashboard-items-sub ${active1}`} onClick={this.step1}>
                                    <i className="fa fa-tasks fa-2x"></i>
                                    <div>Dashboard</div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/dashboard/user/account/section">
                            <div className="dashboard-items">
                                <div className={`dashboard-items-sub ${active2}`} onClick={this.step2}>
                                <i className="fa fa-user fa-2x"></i>
                                    <div>Account</div>
                                </div>
                            </div>
                        </NavLink>
                        <Link to="/dashboard/user/updates/section">
                            <div className="dashboard-items">
                                <div className={`dashboard-items-sub ${active3}`} onClick={this.step3}>
                                <i className="fa fa-newspaper-o fa-2x"></i>
                                    <div>Forms</div>
                                </div>
                            </div>
                        </Link>
                        <NavLink to="/dashboard/user/settings/section" onClick={this.step4}>
                            <div className="dashboard-items">
                                <div className={`dashboard-items-sub ${active4}`} onClick={this.step4}>
                                <i className="fa fa-cog fa-2x"></i>
                                    <div>Settings</div>
                                </div>
                            </div>
                        </NavLink>
                        
                        <div className="dashboard-items-last">
                            <div className="dashboard-items-sub-last" >
                                <button onClick={this.logout}><i class="fa fa-sign-out" aria-hidden="true"></i>Log Out</button>
                                
                            </div>
                        </div>
                    </div>
                    
                        
                       
                </div>        
            </div>
        );
    }
}

export default Navigation;