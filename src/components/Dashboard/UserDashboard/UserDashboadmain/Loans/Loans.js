import React, { Component } from 'react';
import Navigation from '../../Navigation/Navigation';
import img1 from '../../../../../images/invetsdashboardicon.PNG'
import img2 from '../../../../../images/loan-active.PNG'
import img3 from '../../../../../images/invetsdashboardicon-3.PNG'
import { Link } from 'react-router-dom';
import axios from "axios"
import "./Loans.css"
class Loans extends Component {
    state={
        image:null,
        name:null,
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
                image:res.data.user.image ? res.data.user.image.path:null,
                name:res.data.user.fullname
            })
          })
    }
    render() {
        const {image,name}=this.state
        return (
            <div>
                <Navigation/>
                <div className="dashboard-user space-dashbbord-box">
                    <div className="dashboard-user-1" style={{height:"280px"}}>
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
                        
                        <Link>
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
                        <p className="dashboard-user-1-main-loan-p">DCI loans are open to all bankable adults with secured and verified collateral. Whether its a <br/>
buisness, personal, salary adavance loan, our platform is the best for your prompt and less bureaucratic procedure. </p>
                        
                    </div>
                   <div className="loan-types-all">
                   <div className="loan-types-tab-control">
                        <ul>
                            <li><span style={{backgroundColor:"#334E96 "}}></span><br/>Loan type</li>
                            <li><span></span><br/>Loan Details</li>
                            <li><span></span><br/>Documents</li>
                            <li><span></span><br/>success</li>
                        </ul>
                   </div>
                   <div className="loan-types-title">
                    <hr></hr>
                   <div className="loan-types-title-text">Loan type</div>
                    
                   </div>
                    <div className="loan-type-all-dtypes">
                    <div className="loan-type-all-dtypes-single">
                    <i className="fa fa-dollar"></i>
                    <div>
                        <h3>One  (1) month 20% interest</h3>
                        <p>One-off repayment of principal and interest</p>
                    </div>
                    <Link to="/loans/dashboard/loan-details">
                        <button>Select</button>
                    </Link>
                    </div>
                    <div className="loan-type-all-dtypes-single">
                    <i className="fa fa-dollar"></i>
                    <div>
                        <h3>Two to Six  (2-6) months 18% interest</h3>
                        <p>Monthly repayment of principal and interest</p>
                    </div>
                    <Link to="/loans/dashboard/loan-details">
                        <button>Select</button>
                    </Link>
                    </div>
                    <div className="loan-type-all-dtypes-single">
                    <i className="fa fa-dollar"></i>
                    <div>
                        <h3>Seven to Twelve (7-12) months 17% interest</h3>
                        <p>Monthly repayment of principal and interest</p>
                    </div>
                    <Link to="/loans/dashboard/loan-details">
                        <button>Select</button>
                    </Link>
                    </div>
                    <div className="loan-type-all-dtypes-single">
                    <i className="fa fa-dollar"></i>
                    <div>
                        <h3>DCI investor loans (Duration of investment with DCI) 15%</h3>
                        <p>Monthly repayment of principal and interest</p>
                    </div>
                    <Link to="/loans/dashboard/loan-details">
                        <button>Select</button>
                    </Link>
                    </div>

                    </div>
                   </div>
                </div>
            </div>
        );
    }
}

export default Loans;