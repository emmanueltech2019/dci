import React, { Component } from 'react';
import PlanCard from '../../../../../HOC/PlanCard';
import Axios from 'axios';
class AMI extends Component {
    state={
        amount:null,
        hide1:null,
        hide2:null,
        hide3:null,
        hide4:null,
        hide5:null,
        hideme:{
            display:"none"
        }
    }
    
    componentDidMount(){
        const id= localStorage.getItem("id")
        const token = localStorage.getItem("token")
        Axios({
            method: 'POST',
            url: `https://stormy-wildwood-75014.herokuapp.com/api/v1/user/dashboarduser/${id}`,
            data: {},
            headers: {
              Authorization: 'Bearer ' + token
            }
          }).then( res=> {
            console.log(res);
            if(res.data.user.planDetails){
                this.setState({
                    amount:res.data.user.planDetails.dataPrice
                })
            }
          })
          setTimeout(() => {
            const hideme =this.state.hideme
                const amount1 = "100000"
                const amount2 = "1000000"
                const amount3 = "2000000"
                const amount4 = "3000000"
                const amount5 = "4000000"
              if(this.state.amount==amount1){
                this.setState({
                    hide1:hideme
                })
              }
              if(this.state.amount==amount2){
                this.setState({
                    hide2:hideme
                })
              }
              if(this.state.amount==amount3){
                this.setState({
                    hide3:hideme
                })
              }
              if(this.state.amount==amount4){
                this.setState({
                    hide4:hideme
                })
              }
              if(this.state.amount==amount5){
                this.setState({
                    hide5:hideme
                })
              }
          }, 1000);
        
    }
    render() {
        
        const {hide1,hide2,hide3,hide4,hide5} = this.state
        
        return (
            <>
            <div style={hide1}>
            <PlanCard 
                 li1="Total return on investment as much as 21% Bi-annually." 
                 li2="3.5% return on investment is paid monthly" 
                 li3="Contract for  six months" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Bronze" 
                 Minimum="Minimum 100,000 NGN"
                 link="/dashboard/user/dashboard/bmibronze/section"
                 amount="100,000"
                 />
            </div>
            <div style={hide2}>
                <PlanCard
                 li1="Total return on investment as much as 24% Bi-annually." 
                 li2="5% return on investment is paid monthly" 
                 li3="Contract for  six months" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Silver" 
                 Minimum="Minimum 1,000,000 NGN"
                 link="/dashboard/user/dashboard/bmisilver/section"
                 />
                </div>
                <div style={hide3}>
                <PlanCard
                 li1="Total return on investment as much as 27% Bi-annually." 
                 li2="4.5% return on investment is paid monthly" 
                 li3="Contract for  six month" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Gold" 
                 Minimum="Minimum 2,000,000 NGN"
                 link="/dashboard/user/dashboard/bmigold/section"
                 />
                 </div>
                 <div style={hide4}>
                <PlanCard
                 li1="Total return on investment as much as 30% Bi-annually." 
                 li2="5% return on investment is paid monthly" 
                 li3="Contract for  six months" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Diamond" 
                 Minimum="Minimum 3,000,000 NGN"
                 link="/dashboard/user/dashboard/bmidiamond/section"
                 />
                 </div>
                  <div style={hide5}>
                <PlanCard
                 li1="Total return on investment as much as 33% Bi-annually." 
                 li2="5.5% return on investment is paid monthly" 
                 li3="Contract for  six months" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Platinum" 
                 Minimum="Minimum 4,000,000 NGN"
                 link="/dashboard/user/dashboard/bmiplatinium/section"
                 />
                 </div>
            </>
        );
    }
}

export default AMI;