import React, { Component } from 'react';
import PlanCard from '../../../../../HOC/PlanCard';

class AFI extends Component {
    render() {
        return (
            <>
                <PlanCard
                 li1="Total return on investment as much as 72% annually." 
                 li2="Contract for  one year" 
                 li3="One-off payment of capital and return on investment" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Bronze" 
                 Minimum="Minimum 100,000 NGN"
                 link="/dashboard/user/dashboard/afibronze/section"
                 />
                <PlanCard
                 li1="Total return on investment as much as 78% annually." 
                 li2="Contract for  one year" 
                 li3="One-off payment of capital and return on investment" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Silver" 
                 Minimum="Minimum 1,000,000 NGN"
                 link="/dashboard/user/dashboard/afisilver/section"
                 />
                <PlanCard
                 li1="Total return on investment as much as 84% annually." 
                 li2="Contract for  one year" 
                 li3="One-off payment of capital and return on investment" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Gold" 
                 Minimum="Minimum 2,000,000 NGN"
                 link="/dashboard/user/dashboard/afigold/section"
                 />
                <PlanCard
                 li1="Total return on investment as much as 90% annually." 
                 li2="Contract for  one year" 
                 li3="One-off payment of capital and return on investment" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Diamond" 
                 Minimum="Minimum 3,000,000 NGN"
                 link="/dashboard/user/dashboard/afidiamond/section"
                 />
                <PlanCard
                 li1="Total return on investment as much as 96% annually." 
                 li2="Contract for  one year" 
                 li3="One-off payment of capital and return on investment" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Platinum" 
                 Minimum="Minimum 4,000,000 NGN"
                 link="/dashboard/user/dashboard/afiplatinium/section"
                 />
                 
                
            </>
        );
    }
}

export default AFI;