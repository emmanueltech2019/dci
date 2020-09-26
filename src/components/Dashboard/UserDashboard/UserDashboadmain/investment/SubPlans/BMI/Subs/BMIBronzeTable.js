import React, { Component } from 'react';
import "../../../SinglePlanList.css"
import { Link } from "react-router-dom";
import ModalPayInvest from '../../../../../../../HOC/ModalPayInvest';
class BMIBronzeTable extends Component {
    state={
        active1:"",
        active2:"",
        active3:"",
        active4:"",
        active5:"",
        isOpen:false,
        id:null,

        dataName:null,
        dataPrice:null,
    }
    select1=()=>{
        this.setState({
            active1:"active",
            active2:"",
            active3:"",
            active4:"",
            active5:"",
            dataName:"BMIBronze",
            dataPrice:"100000",
        })
        setTimeout(() => {
            localStorage.setItem("dataName",this.state.dataName)
            localStorage.setItem("dataPrice",this.state.dataPrice)
        }, 2000);
    }
    select2=()=>{
        this.setState({
            active1:"",
            active2:"active",
            active3:"",
            active4:"",
            active5:"",
            dataName:"BMIBronze",
            dataPrice:"300000",
        })
        setTimeout(() => {
            localStorage.setItem("dataName",this.state.dataName)
            localStorage.setItem("dataPrice",this.state.dataPrice)
        }, 2000);
    }
    select3=()=>{
        this.setState({
            active1:"",
            active2:"",
            active3:"active",
            active4:"",
            active5:"",
            dataName:"BMIBronze",
            dataPrice:"500000",
        })
        setTimeout(() => {
            localStorage.setItem("dataName",this.state.dataName)
            localStorage.setItem("dataPrice",this.state.dataPrice)
        }, 2000);
    }
    select4=()=>{
        this.setState({
            active1:"",
            active2:"",
            active3:"",
            active4:"active",
            active5:"",
            dataName:"BMIBronze",
            dataPrice:"700000",
        })
        setTimeout(() => {
            localStorage.setItem("dataName",this.state.dataName)
            localStorage.setItem("dataPrice",this.state.dataPrice)
        }, 2000);
    }
    select5=()=>{
        this.setState({
            active1:"",
            active2:"",
            active3:"",
            active4:"",
            active5:"active",
            dataName:"BMIBronze",
            dataPrice:"900000",
        })
        setTimeout(() => {
            localStorage.setItem("dataName",this.state.dataName)
            localStorage.setItem("dataPrice",this.state.dataPrice)
        }, 2000);
    }
    open=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    componentDidMount(){
        this.setState({
            id:localStorage.getItem("id")
        })
    }
    render() {
        const {active1,active2,active3,active4,active5,id} =this.state
        
        return (
            <div className="SinglePlanList">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">S/N</th>
                        <th scope="col">Plan</th>
                        <th scope="col">Investment</th>
                        <th scope="col">Monthly ROI</th>
                        <th scope="col">Total ROI</th>
                        <th scope="col">Total Yearly Return</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={`${active1}`} onClick={this.select1}>
                        <th scope="row">1</th>
                        <td>Bronze</td>
                        <td>100,000</td>
                        <td>55,000</td>
                        <td>66,000</td>
                        <td>1,660,000</td>
                        
                        </tr>
                        <tr className={`${active2}`} onClick={this.select2}>
                        <th scope="row">2</th>
                        <td>Bronze</td>
                        <td>300,000</td>
                        <td>82,500</td>
                        <td>990,000</td>
                        <td>2,490,000</td>
                        
                        </tr>
                        <tr className={`${active3}`} onClick={this.select3}>
                        <th scope="row">3</th>
                        <td>Bronze</td>
                        <td>500,000</td>
                        <td>82,500</td>
                        <td>990,000</td>
                        <td>2,490,000</td>
                        
                        </tr>
                        <tr className={`${active4}`} onClick={this.select4}>
                        <th scope="row">4</th>
                        <td>Bronze</td>
                        <td>700,000</td>
                        <td>82,500</td>
                        <td>990,000</td>
                        <td>2,490,000</td>
                        
                        </tr>
                        <tr className={`${active5}`} onClick={this.select5}>
                        <th scope="row">5</th>
                        <td>Bronze</td>
                        <td>900,000</td>
                        <td>82,500</td>
                        <td>990,000</td>
                        <td>2,490,000</td>
                        
                        </tr>
                    </tbody>
                    </table>
                    <div className="btn-box">
                    <Link to={`/dashboard/user/${id}`}>
                        <button className="btn btn-lg" type="button">back</button>
                    </Link>
                        <button className="btn btn-warning btn-lg" type="button" onClick={this.open}>Invest</button>
                    </div>



                    {this.state.isOpen?<ModalPayInvest/>:null}
            </div>
        );
    }
}

export default BMIBronzeTable;