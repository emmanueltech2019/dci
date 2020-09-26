import React, { Component } from 'react';
import Navigation from '../../Navigation/Navigation';
import "./Savings.css"
import img1 from '../../../../../images/invetsdashboardicon.PNG'
import img2 from '../../../../../images/invetsdashboardicon2.PNG'
import img3 from '../../../../../images/savingsactive.PNG'
import { Link } from 'react-router-dom';
import axios from 'axios'
class Savings extends Component {
    state={
        image:"",
        name:""
    }
    componentDidMount(){
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
            this.setState({
                image:res.data.user.image.path ? res.data.user.image.path:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png",
                name:res.data.user.fullname ? res.data.user.fullname:"res.data.user.fullname"
            })
          })
    }
    render() {
        const id =localStorage.getItem("id")
        const { name,image } =this.state
        return (
            <div>
                <Navigation/>
                <div className="Savings">
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
                        <Link to="/dashboard/user/dashboard/section">
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
                        
                        <p className="savings-des-text">DCI Loans are open to all bankable adult with secured and veified 
                    collateral, whether it is a business, <br/>personal,salary advances loan,
                     our platform is the best for your prompt and less bureaucratic procedure</p>
                    </div>
                    <div className="savings-1">
                    <div className="savings-1-1">
                        <h1>your earnings</h1>
                        <span>0.00</span>
                    </div>
                    <div className="savings-1-2">
                        <form>
                            <label>Amount</label>
                            <input placeholder="Enter Amount"/>
                            <Link target="_blank" to={`https://paystack.com/pay/hisjko2bb9`} >
                                <button>Add to your savings</button>
                            </Link>
                        </form>
                    </div>
                    
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Savings;