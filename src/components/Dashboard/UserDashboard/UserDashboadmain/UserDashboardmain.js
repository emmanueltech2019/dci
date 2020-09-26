import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import UnupdateProfile from '../UnupdateProfile/UnupdateProfile';
import axios from 'axios';
import Dashboard from './Dashboard/Dashboard';
import img1 from '../../../../images/dashboard-preloader.PNG';

class UserDashboardmain extends Component {
    state={
        upToDate:false,
        id:this.props.match.params.id,
        isLoading:false
    }
    componentDidMount(){
        const id= this.state.id
        const token = localStorage.getItem("token")
        axios({
            method: 'post',
            url: `https://stormy-wildwood-75014.herokuapp.com/api/v1/user/dashboarduser/${id}`,
            data: {},
            headers: {
              Authorization: 'Bearer ' + token
            }
          }).then( response=> {
            console.log(response);
            // this.setState({
            //     upToDate:true
            // })
          })
          setTimeout(() => {
            this.setState({
                isLoading:true
            })
          }, 1000);
    }
    render() {
        const {upToDate,isLoading} =this.state
        
        if(this.state.upToDate === false){
        return(
        <div>{isLoading ? (
        <UnupdateProfile/>
        ):(
        <img src={img1} alt="" style={{width:"100vw",height:"100vh"}}/>
        )}
            
        </div>)
        }
        else if(this.state.upToDate === true){
            return(
                <div>{isLoading ?(
                <>
                    <Navigation/>
                    <Dashboard/>
                    </>
                    ):(
                    <img src={img1} alt=""  style={{width:"100vw",height:"100vh"}}/>
                    )}  
                </div>)
            
        }
    }
}

export default UserDashboardmain;