import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ModalPayInvest from '../../../../../../../HOC/ModalPayInvest';
class AMIBronzeTable extends Component {
    state={
        active1:"",
        active2:"",
        active3:"",
        active4:"",
        active5:"",
        data:null,
        isOpen:false,
        id:null
    }
    plan1={
        plan:"Bronze",
        Investment:"1,000,000",
        MonthlyROI:"55,00",
        TotalROI:"66,000",
        TotalYearlyReturn:"1,660,000"
    }
    plan2={
        plan:"Bronze",
        Investment:"1,500,000",
        MonthlyROI:"82,500",
        TotalROI:"	990,000",
        TotalYearlyReturn:"2,490,000"
    }
    select1=()=>{
        this.setState({
            active1:"active",
            active2:"",
            active3:"",
            active4:"",
            active5:"",
        })
    }
    select2=()=>{
        this.setState({
            active1:"",
            active2:"active",
            active3:"",
            active4:"",
            active5:"",
        })
    }
    select3=()=>{
        this.setState({
            active1:"",
            active2:"",
            active3:"active",
            active4:"",
            active5:"",
        })
    }
    select4=()=>{
        this.setState({
            active1:"",
            active2:"",
            active3:"",
            active4:"active",
            active5:"",
        })
    }
    select5=()=>{
        this.setState({
            active1:"",
            active2:"",
            active3:"",
            active4:"",
            active5:"active",
        })
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

export default AMIBronzeTable;