import React, { Component } from 'react';
import PlanCard from '../../../../../HOC/PlanCard';


class BMI extends Component {
    render() {
        return (
            <>
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
                <PlanCard
                 li1="Total return on investment as much as 24% Bi-annually." 
                 li2="5% return on investment is paid monthly" 
                 li3="Contract for  six months" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Silver" 
                 Minimum="Minimum 1,000,000 NGN"
                 link="/dashboard/user/dashboard/bmisilver/section"
                 />
                <PlanCard
                 li1="Total return on investment as much as 27% Bi-annually." 
                 li2="4.5% return on investment is paid monthly" 
                 li3="Contract for  six month" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Gold" 
                 Minimum="Minimum 2,000,000 NGN"
                 link="/dashboard/user/dashboard/bmigold/section"
                 />
                <PlanCard
                 li1="Total return on investment as much as 30% Bi-annually." 
                 li2="5% return on investment is paid monthly" 
                 li3="Contract for  six months" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Diamond" 
                 Minimum="Minimum 3,000,000 NGN"
                 link="/dashboard/user/dashboard/bmidiamond/section"
                 />
                <PlanCard
                 li1="Total return on investment as much as 33% Bi-annually." 
                 li2="5.5% return on investment is paid monthly" 
                 li3="Contract for  six months" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Platinum" 
                 Minimum="Minimum 4,000,000 NGN"
                 link="/dashboard/user/dashboard/bmiplatinium/section"
                 />
                 
                
            </>
        );
    }
}

export default BMI;