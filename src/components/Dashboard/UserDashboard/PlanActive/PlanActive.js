import React, { Component } from 'react';
import Navigation from "../../UserDashboard/Navigation/Navigation"
import { Link } from "react-router-dom";
import img1 from '../../../../images/invetsdashboardicon-4.PNG'
import img2 from '../../../../images/invetsdashboardicon2.PNG'
import img3 from '../../../../images/invetsdashboardicon-3.PNG'
import img4 from '../../../../images/1chart.PNG'
import img5 from '../../../../images/2chart.PNG'
import img6 from '../../../../images/3chart.PNG'
import img7 from '../../../../images/4chart.PNG'
import img8 from '../../../../images/5chart.PNG'
import Axios from 'axios';
import ReactStoreIndicator from 'react-score-indicator'
import "./PlanActive.css"
class PlanActive extends Component {
    state={
        image:null,
        name:null,
        border1:"border-buttom",
        border2:"",
        border3:"",
        border4:"",  
    }
    componentDidMount(){
        const id= localStorage.getItem("id")
        const token = localStorage.getItem("token")
        Axios({
            method: 'post',
            url: `https://stormy-wildwood-75014.herokuapp.com/api/v1/user/dashboarduser/${id}`,
            data: {},
            headers: {
              Authorization: 'Bearer ' + token
            }
          }).then( res=> {
            console.log(res);
            this.setState({
                image:res.data.user.image ?res.data.user.image.path:null,
                name:res.data.user.fullname
            })
          })
    }
    render() {
        const {image,name,content,border1,border2,border3,border4}=this.state
        return (
            <div className="investment-plat-active-page">
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
                        <Link>
                            <div className="dashboard-user-1-2">
                                <img src={img1} alt=""/>
                            </div>
                        </Link>
                        <Link to="/loans/dashboard">
                            <div className="dashboard-user-1-3">
                                <img src={img2} alt=""/>
                            </div>
                        </Link>
                        <Link to="/savings">
                            <div className="dashboard-user-1-4">
                                <img src={img3} alt=""/>
                            </div>
                        </Link>
                        </div>
                    </div>

                <div className="investment-plat-active-page-1">
                    <div className="investment-plat-active-page-1-1">
                        <div className="investment-plat-active-page-1-1-color">
                        <div className="investment-plat-active-page-1-1-text">Total investment</div>
                        <span className="investment-plat-active-page-1-1-text-price">0.00</span>
                        </div>
                        <img src={img4} alt=""/>
                    </div>
                    <div className="investment-plat-active-page-1-2">
                        <div className="investment-plat-active-page-1-2-color">
                        <div className="investment-plat-active-page-1-2-text">Monthly Return of Investment</div>
                        <span className="investment-plat-active-page-1-2-text-price">0.00</span>
                        </div>
                        <img src={img5} alt=""/>
                    </div>
                    <div className="investment-plat-active-page-1-3">
                        <div className="investment-plat-active-page-1-3-color">
                        <div className="investment-plat-active-page-1-3-text">Total Return Of Investment</div>
                        <span className="investment-plat-active-page-1-3-text-price">0.00</span>
                        </div>
                        <img src={img6} alt=""/>
                    </div>
                    <div className="investment-plat-active-page-1-4">
                        <div className="investment-plat-active-page-1-4-color">
                        <div className="investment-plat-active-page-1-4-text">Total Yearly return</div>
                        <span className="investment-plat-active-page-1-4-text-price">0.00</span>
                        </div>
                        <img src={img7} alt=""/>
                    </div>
                    <div className="investment-plat-active-page-1-5">
                        <div className="investment-plat-active-page-1-5-color">
                        <div className="investment-plat-active-page-1-5-text">Total Referrals</div>
                        <span className="investment-plat-active-page-1-5-text-price">0.00</span>
                        </div>
                        <img src={img8} alt=""/>
                    </div>
                    
                </div>

                <div className="investment-plat-active-page-2">
                    <div className="investment-plat-active-page-2-transaction">
                    <div className="investment-plat-active-page-2-transaction-header">
                        <h1>Recent Transactions</h1>
                        <button className="fa fa-arrow-right"></button>
                    </div>

                    </div>
                    <div className="investment-plat-active-page-2-chart">
                        <div className="investment-plat-active-page-2-chart-1">
                            <h1>Balance Return Of Investment</h1>
                            <span>Awaiting Verification</span>
                        </div>
                        <ReactStoreIndicator lineGap={0} lineWidth={18} value={0} maxValue={100}/>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default PlanActive;