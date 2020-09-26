import React, { Component } from 'react';
import Navigation from "../../Navigation/Navigation";
import "./Forms.css"
import { Link } from 'react-router-dom';
class Forms extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className="space-dashbbord-box" style={{paddingBottom:"40px"}}>
                    <div className="forms-update-top">
                        <Link to="/dashboard/user/updates/section">
                            <div className="forms-update-top-item" style={{backgroundColor:"#295FA6"}}>
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
                            <div className="forms-update-top-item">
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
                    </div>
                    <div className="forms-update-renew">
                    <div className="forms-update-renew-header-section">
                        <span>Current Plan : <strong>Silver</strong></span><br/>
                        <strong>1,000,000</strong><br/>
                        <span style={{color:"#C4C4C4",fontSize:"15px"}}>5.5% roi monthly (24%)</span>
                        </div>
                        <div>
                        <table class="table table-borderless">
                            <tbody>
                                <tr> 
                                    <td className="boldtable">investment plan</td>
                                    <td>Otto</td>
                                </tr>
                                <tr>
                                    <td className="boldtable">expire at</td>
                                    <td>Thornton</td>
                                </tr>
                                <tr>
                                <td className="boldtable">After renewal</td>
                                <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <button>Renew now</button>
                    </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Forms;