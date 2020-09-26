import React, { Component } from 'react';
import Navigation from "../../../../Navigation/Navigation";
import img1 from '../../../../../../../images/invetsdashboardicon-4.PNG'
import img2 from '../../../../../../../images/invetsdashboardicon2.PNG'
import img3 from '../../../../../../../images/invetsdashboardicon-3.PNG'
import AMIGoldTable from './Subs/AMIGoldTable';

class AMIGold extends Component {
    state={
        image:null,
        name:null,
        content:"<BMI/>",
        border1:"border-buttom",
        border2:"",
        border3:"",
        border4:""
    }
    render() {
        const {image,name,content,border1,border2,border3,border4}=this.state
        return (
            <div>
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
                        <div className={`tab-control ${border2}`} onClick={this.Switch2}>
                            <div>Annual Monthly<br/>Interest (AMI)</div>
                        </div>
                        
                        </div>
                        
                    </div>
                    {false?<div className="dashboard-user-2 PlanCard-grid">
                    {content}
                        
                    </div>:<AMIGoldTable/>}
                </div>
                
            </div>
        );
    }
}

export default AMIGold;