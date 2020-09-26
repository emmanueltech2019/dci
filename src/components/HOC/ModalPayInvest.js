import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ModalPayInvest extends Component {
    state={
        close:"",
        nextOfKins:"",
        relationship:"",
        address:'',
        phone:""
    }
    close=()=>{
        this.setState({
            close:"display-none"
        })
    }
    handleSubmit=()=>{
        const id = localStorage.getItem("id")
        const {nextOfKins,relationship,address,phone} =this.state
        const dataName=localStorage.getItem("dataName")
        const dataPrice=localStorage.getItem("dataPrice")
        axios.put(`https://stormy-wildwood-75014.herokuapp.com/api/v1/plans/${id}/pickedplan`,{nextOfKins,relationship,address,phone,dataName,dataPrice})
        .then(res=>{
            let id = localStorage.getItem("id")
            localStorage.setItem("email",res.data.response.email)
            window.location="/payment/"+id
            // const email = res.data.response.email
            // const dataPrice =localStorage.getItem("dataPrice")
            // const dataName =localStorage.getItem("dataName")
            // const data={
            //     amount:parseInt(dataPrice),
            //     email
            // }
            // console.log(data)
            // axios.post("http://localhost:4000/api/v1/payment/paystack",data)
            // .then(res=>{
            //     console.log(res)
            // })
            // .catch(err=>{
            //     console.log(err)
            // })
            
        })
        console.log(nextOfKins,relationship,address,phone,dataName,dataPrice)
       
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        const id = localStorage.getItem("id")
        const { close } =this.state
        console.log(this.state)
        return (
             <div>
                <div className={`invest-form ${close}`}>
                        <div className="invest-form-modal-box">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title center" id="exampleModalLabel">Fill Investment Details</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" onClick={this.close}>&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <div class="form-group">
                                    <label for="nextofkins">Next Of Kins</label>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    name="nextOfKins"
                                    onChange={this.handleChange}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="relationship">Relationship</label>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    name="relationship"
                                    onChange={this.handleChange}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="phone">Phone</label>
                                    <input 
                                    type="email" 
                                    class="form-control" 
                                    name="phone"
                                    onChange={this.handleChange}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="address">Address</label>
                                    <input 
                                    type="text" 
                                    class="form-control"
                                    name="address"
                                    onChange={this.handleChange}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input 
                                    type="email" 
                                    name="email" 
                                    class="form-control" 
                                    onChange={this.handleChange}
                                    />
                                </div>
                                
                            </form>
                            </div>
                            <div class="modal-footer">
                                <Link onClick={this.handleSubmit}>
                                    <button type="button" class="btn btn-primary">Continue</button>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default ModalPayInvest;