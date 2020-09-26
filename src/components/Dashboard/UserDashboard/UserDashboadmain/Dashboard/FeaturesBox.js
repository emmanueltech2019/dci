import React, { Component } from 'react';
import "./Dashboard.css"
import Navigation from '../../Navigation/Navigation';
import img1 from '../../../../../images/invetsdashboardicon-4.PNG'
import img2 from '../../../../../images/invetsdashboardicon2.PNG'
import img3 from '../../../../../images/invetsdashboardicon-3.PNG'
import axios from 'axios'
import BMI from './Tabs/BMI';
import AMI from './Tabs/AMI';
import BFI from './Tabs/BFI';
import AFI from './Tabs/AFI';
import SinglePlanList from "../investment/SinglePlanList"
class Dashboard extends Component {
    state={
        image:null,
        name:null,
        content:<BMI/>,
        border1:"border-buttom",
        border2:"",
        border3:"",
        border4:""
    }
    Switch1=()=>{
        this.setState({
            content:<BMI/>,
            border1:"border-buttom",
        border2:"",
        border3:"",
        border4:""
        })
    }
    Switch2=()=>{
        this.setState({
            content:<AMI/>,
            border1:"",
        border2:"border-buttom",
        border3:"",
        border4:""
        })
    }
    Switch3=()=>{
        this.setState({
            content:<BFI/>,
            border1:"",
        border2:"",
        border3:"border-buttom",
        border4:""
        })
    }
    Switch4=()=>{
        this.setState({
            content:<AFI/>,
            border1:"",
        border2:"",
        border3:"",
        border4:"border-buttom"
        })
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
          }).then( res=> {
            console.log(res);
            this.setState({
                image:res.data.user.image.path,
                name:res.data.user.fullname
            })
          })
    }
    render() {
        const {image,name,content,border1,border2,border3,border4}=this.state
        return (
            <div >
                <Navigation/>
                <div className="dashboard-user space-dashbbord-box">
                    <div className="dashboard-user-1">
                    <div className="dashboard-user-1-main">
                        <div className="dashboard-user-1-1">
                            <img src={image} alt=""/>
                            <div>
                            <h3>Welcome {name}</h3>
                            <span>Select a feature to begin</span>

                            </div> 
                        </div>
                        <div className="dashboard-user-1-2">
                            <img src={img1} alt=""/>
                        </div>
                        <div className="dashboard-user-1-3">
                        <img src={img2} alt=""/>
                        </div>
                        <div className="dashboard-user-1-4">
                        <img src={img3} alt=""/>
                        </div>
                        </div>
                        <div className="dashboard-user-1-main-2">
                        <div className={`tab-control ${border1}`} onClick={this.Switch1}>
                            <div>Bi-annual Monthly<br/>Interest (BMI)</div>
                        </div>
                        <div className={`tab-control ${border2}`} onClick={this.Switch2}>
                            <div>Annual Monthly<br/>Interest (AMI)</div>
                        </div>
                        <div className={`tab-control ${border3}`} onClick={this.Switch3}>
                            <div>BI-annual One-Off<br/>Interest (BFI)</div>
                        </div>
                        <div className={`tab-control ${border4}`} onClick={this.Switch4}>
                            <div>Annual One-Off<br/>Interest (AFI)</div>
                        </div>
                        </div>
                        
                    </div>
                    {false?<div className="dashboard-user-2 PlanCard-grid">
                    {content}
                        
                    </div>:<SinglePlanList/>}
                </div>
            </div>
        );
    }
}

export default Dashboard;