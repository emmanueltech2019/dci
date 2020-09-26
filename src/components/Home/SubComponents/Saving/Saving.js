import React, { Component } from 'react';
import './Saving.css';
import img2 from '../../../../images/savings-1.jpg'
import img1 from '../../../../images/savings.jpg'

class Saving extends Component {
    state={
        counts:0
    }
    countup=()=>{
        setInterval(() => {
            if (this.state.counts<100000) {
                this.setState({
                    counts:this.state.counts+100
                }) 
            }
        }, 1);
    }
    componentDidMount(){
      this.countup()
      setTimeout(() => {
        this.setState({
            counts:this.state.counts.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        })
      }, 5000);
    }
    render() {
        return (
            <div className="saving-section" onScroll={this.countup}>
                <div className="saving-section-2">
                        <div className="about-text-1">
                        <button className="spot-box"></button>
                            <h2 className="home-about-h2" style={{color:"#fff"}}>SAVINGS ACCOUNT</h2>
                        </div>
                    <h1>Save To Invest, Will Help You Save
                        Bits Of Cash Till It's Big Enough
                        To Invest.
                    </h1>
                    <div className="saving-section-countup">
        <h2>{this.state.counts}</h2>
                        <h3>Save 0 to 100,000</h3>
                        <p>Not everyone has the basic to get started, but ‘Save To Invest’ has your back.</p>
                    </div>
                </div>
                <div className="saving-section-1">
                    <div className="filter-orange"></div>
                    <img src={img1} alt=""/>
                </div>
                <div className="saving-section-3">
                    <div className="saving-section-3-1">
                        <img src={img2} alt=""/>
                    </div>
                    <div className="saving-section-3-2">
                        <p>No fixed deposit amount ; you can save any amount at anytime as you get it.</p>
                        <p>And in no time start earning healthy returns on your investment.</p>
                    </div>
                    <div className="saving-section-3-3">
                        <p>Savings do NOT go beyond 100,000 naira. At this point you are ready to invest.</p>
                    </div>
                    <div className="saving-section-3-4">
                    <button className="btn-default-color">
                        <span className="fa fa-chevron-down"></span>
                    </button>
                        <p>You can cancel your savings any month you feel like. Our standard policy on early 
                            withdrawal applies.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Saving;