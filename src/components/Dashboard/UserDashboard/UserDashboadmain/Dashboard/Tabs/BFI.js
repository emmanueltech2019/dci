import React, { Component } from 'react';
import PlanCard from '../../../../../HOC/PlanCard';

class BFI extends Component {
    render() {
        return (
            <>
                <PlanCard
                 li1="Total return on investment as much as 33% annually." 
                 li2="Contract for  six month" 
                 li3="One-off payment of capital and return on investment" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Bronze" 
                 Minimum="Minimum 1000 NGN"
                 link="/dashboard/user/dashboard/bfibronze/section"
                 />
                <PlanCard
                 li1="Total return on investment as much as 36% annually." 
                 li2="Contract for  six month" 
                 li3="One-off payment of capital and return on investment" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Silver" 
                 Minimum="Minimum 1,000,000 NGN"
                 link="/dashboard/user/dashboard/bfisilver/section"
                 />
                <PlanCard
                 li1="Total return on investment as much as 39% annually." 
                 li2="Contract for  six month" 
                 li3="One-off payment of capital and return on investment" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Gold" 
                 Minimum="Minimum 2,000,000 NGN"
                 link="/dashboard/user/dashboard/bfigold/section"
                 />
                <PlanCard
                 li1="Total return on investment as much as 42% annually." 
                 li2="Contract for  six month" 
                 li3="One-off payment of capital and return on investment" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Diamond" 
                 Minimum="Minimum 3,000,000 NGN"
                 link="/dashboard/user/dashboard/bfidiamond/section"
                 />
                <PlanCard
                 li1="Total return on investment as much as 45% annually." 
                 li2="Contract for  six month" 
                 li3="One-off payment of capital and return on investment" 
                 li4="Contract can be repudiated at any point subject to agree the terms and conditions"
                 planName="DCI Platinum" 
                 Minimum="Minimum 4,000,000 NGN"
                 link="/dashboard/user/dashboard/bfiplatinium/section"
                 />
                 
                
            </>
        );
    }
}

export default BFI;