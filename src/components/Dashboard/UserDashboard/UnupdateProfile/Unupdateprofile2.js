import React, { Component } from 'react';
import "./UnupdatedProfile.css"
import Navigation from '../Navigation/Navigation'
import invetsdashboardicon from '../../../../images/invetsdashboardicon.PNG'
import invetsdashboardicon2 from '../../../../images/invetsdashboardicon2.PNG'
import invetsdashboardicon3 from '../../../../images/invetsdashboardicon-3.PNG'
import { Link } from 'react-router-dom';
import axios from 'axios';
class UnupdateProfile2 extends Component {
    state={
        id:this.props.match.params.id,
        selectedFile:null
    }
    fileSelectedHandler=(e)=>{
        this.setState({
            selectedFile:e.target.files[0]
        })
        console.log(e.target.files[0])
    }
    handleSubmit=()=>{
        const id =localStorage.getItem("id")
        const fd = new FormData();
        fd.append("image",this.state.selectedFile,this.state.selectedFile.name)
        console.log(fd)
        axios.post(`https://stormy-wildwood-75014.herokuapp.com/api/v1/user/personal/${id}/newuser/image/upload`,fd)
        .then(res=>{
            window.location=`/dashboard/user/account/section`
        })
    }
    render() {
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
                    <div className="unupdated-profile-plan-upload">
                        <input type="file" ref={fileInput =>this.fileInput = fileInput} onChange={this.fileSelectedHandler}/>
                        <i class="fa fa-cloud-upload" aria-hidden="true" onClick={()=>this.fileInput.click()}></i><br/>
                        <span>color images only</span><br/>
                        <span>Minimum resolution 1200 X 700px</span><br/>
                        <span>drag and drop image or browse your computer</span><br/>
                        <Link onClick={this.handleSubmit}>
                        <button className="btn-default-color-sm">Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default UnupdateProfile2;