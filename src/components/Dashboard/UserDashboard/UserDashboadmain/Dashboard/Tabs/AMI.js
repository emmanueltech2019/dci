import React, { Component } from 'react';
import PlanCard from '../../../../../HOC/PlanCard';

class AMI extends Component {
    render() {
        return (
            <>
                <PlanCard
                 li1="Total return on investment as much as 60% annually." 
                 li2="5% return on investment is paid monthly" 
                 li3="Contract for  one year"
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Bronze" 
                 Minimum="Minimum 1000 NGN"
                 link="/dashboard/user/dashboard/amibronze/section"
                 />
                <PlanCard
                 li1="Total return on investment as much as 66% annually." 
                 li2="5.5% return on investment ispaid monthly" 
                 li3="Contract for  one year"
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Silver" 
                 Minimum="Minimum 1,000,000 NGN"
                 link="/dashboard/user/dashboard/amisilver/section"
                 />
                <PlanCard
                 li1="Total return on investment as much as 72% annually." 
                 li2="6% return on investment is paid monthly" 
                 li3="Contract for  one year" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Gold" 
                 Minimum="Minimum 2,000,000 NGN"
                 link="/dashboard/user/dashboard/amigold/section"
                 />
                <PlanCard
                 li1="Total return on investment as much as 78% annually." 
                 li2="6.5% return on investment is paid monthly" 
                 li3="Contract for  one year" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Diamond" 
                 Minimum="Minimum 3,000,000 NGN"
                 link="/dashboard/user/dashboard/amidiamond/section"
                 />
                <PlanCard
                 li1="Total return on investment as much as 84% annually." 
                 li2="7% return on investment is paid monthly" 
                 li3="Contract for  one year" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Platinum" 
                 Minimum="Minimum 4,000,000 NGN"
                 link="/dashboard/user/dashboard/amiplatinium/section"
                 />
            </>
        );
    }
}

export default AMI;