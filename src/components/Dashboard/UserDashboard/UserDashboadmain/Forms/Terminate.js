import React, { Component } from 'react';
import Navigation from '../../Navigation/Navigation';
import { Link } from 'react-router-dom';

class Terminate extends Component {
    render() {
        
        return (
            <div>
                <Navigation/>
                <div className="space-dashbbord-box">
                    <div className="forms-update-top">
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
                            <div className="forms-update-top-item" >
                            <i class="fa fa-level-down" aria-hidden="true"></i>
                                <span>Downgrade Form</span>
                            </div>
                        </Link>
                        <Link to="/dashboard/user/updates/terminate">
                            <div className="forms-update-top-item" style={{backgroundColor:"#295FA6"}}>
                            <i class="fa fa-window-close" aria-hidden="true"></i>
                                <span>Termination Form</span>
                            </div>
                        </Link>
                        
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Terminate;