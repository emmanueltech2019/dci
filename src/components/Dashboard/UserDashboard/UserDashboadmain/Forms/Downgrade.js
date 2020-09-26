import React, { Component } from 'react';
import Navigation from '../../Navigation/Navigation';
import { Link } from 'react-router-dom';
import BMI from "./DowngradeTab/BMI"
class Downgrade extends Component {
    state={
        border1:"border-buttom",
        border2:"",
        border3:"",
        border4:"",
        planOn:null,
        content:<BMI/>
    }
    render() {
        
        const {border1,border2,border3,border4,content}=this.state
        return (
            <div>
                <Navigation/>
                <div className="space-dashbbord-box">
                    <div className="forms-update-top upgarde-top-box" style={{height:"300px"}}>
                        <Link to="/dashboard/user/updates/section">
                            <div className="forms-update-top-item" >
                                <i class="fa fa-refresh" aria-hidden="true"></i>
                                <span>Renewal Form</span>
                            </div>
                        </Link>
                        <Link to="/dashboard/user/updates/upgrade" >
                            <div className="forms-update-top-item" >
                            <i class="fa fa-level-up" aria-hidden="true"></i>
                                <span>Upgrade Form</span>
                            </div>
                        </Link>
                        <Link to="/dashboard/user/updates/downgrade">
                            <div className="forms-update-top-item" style={{backgroundColor:"#295FA6"}}>
                            <i class="fa fa-level-down" aria-hidden="true"></i>
                                <span>Downgrade Form</span>
                            </div>
                        </Link>
                        <Link to="/dashboard/user/updates/terminate">
                            <div className="forms-update-top-item">
                            <i class="fa fa-window-close" aria-hidden="true"></i>
                                <span>Termination Form</span>
                            </div>
                        </Link>
                        <div className="upgrade-tab">
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
                    <div className="forms-update-upgrade">
                        <h1>Downgrade</h1>
                        <div className="forms-update-upgrade-content">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Downgrade;