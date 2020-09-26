import React, { Component } from 'react';
import "./TransferProof.css"
import Navigation from "../../../Dashboard/UserDashboard/Navigation/Navigation"
import axios from 'axios';
// import FormData from 'formdata-node';
class TransferProof extends Component {
    state = {      
        file: null,
        filemain:null,
        filenotSelected:true,
        Payerdetails:"",
        DCIdetails:"",
        date:"",
        amount:""
    } 
    // handleChange=(e)=> {
    //     this.setState({      
    //         file: URL.createObjectURL(e.target.files[0]),
    //         filenotSelected:false,
    //         filemain:e.target.files[0]
    //        })  
    //        console.log(e.target.files[0])
    //     }  
    // handleInputChange=(e)=>{
    //     this.setState({
    //         [e.target.name]:e.target.value
    //     })

    // }
    handleSubmit=()=>{
        const {file,Payerdetails,DCIdetails,date,amount} =this.state
        const id =localStorage.getItem("id")
        const fd = new FormData()
       
        // fd.append("Payerdetails",Payerdetails)
        // fd.append("DCIdetails",DCIdetails)
        // fd.append("amount",amount)
        // fd.append("date",date)
        fd.append("image",this.state.file)
        axios.post(`https://stormy-wildwood-75014.herokuapp.com/api/v1/transfer/proof/${id}`,
        {file,Payerdetails,DCIdetails,date,amount})
        .then(res=>{
            console.log(res)
        })
    }
    handleChange=(e)=>{
        this.setState({
            file:e.target.files[0]
        })
        setTimeout(() => {
            console.log(this.state)
        }, 2000)
    }
    handleInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        return (
            <div>
                <Navigation/>
                <div className="space-dashbbord-box">
                    <div className="TransferProof">
                        <div className="TransferProof-head">
                            <h1>Upload Proof Of Payment</h1>
                            <p>A proof can be a reciept (either a scan,aphoto or a PDF) or a 
                                screenshot from your online banking clearly showing the following:</p>
                        </div>
                        <div className="TransferProof-body">
                            <div className="TransferProof-body-1">
                            <div className="TransferProof-body-1-box">
                           <div><input type="file" onChange={this.handleChange} />
                               
                                <i class="fa fa-cloud-upload" aria-hidden="true"></i><br/>
                                <p className="TransferProof-body-1-box-p1">jpg or pdf should be more than  500kb</p><br/>
                                <p className="TransferProof-body-1-box-p2">Drag and drop your image 
                                document or image here or <br/><span >browse your computer</span>
                                </p></div>
                            </div>
                            </div>
                            <div className="TransferProof-body-2">


                            <form>
                                <div class="form-group">
                                    <label >Your details</label>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Name , account number and bank name"
                                    onChange={this.handleInputChange}
                                    name="Payerdetails" 
                                    />
                                    
                                </div>
                                <div class="form-group">
                                    <label >DCI details</label>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Name , account number and bank name"    
                                    name="DCIdetails"       
                                    onChange={this.handleInputChange}/>
                                    
                                </div>
                                <div class="form-group">
                                    <label>Date</label>
                                    <input 
                                    type="date"
                                    class="form-control" 
                                    name="date"
                                    onChange={this.handleInputChange}/>
                                    
                                </div>
                                <div class="form-group">
                                    <label>Amount</label>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="the amount sent to DCI account"
                                    name="amount"
                                    onChange={this.handleInputChange}
                                    />
                                    
                                </div>
                               

                            </form>
                            <div className="transfer-proof-btn">
                            <button type="button" class="btn btn-outline-danger">Previous</button>
                            <button type="button" class="btn btn-danger" onClick={this.handleSubmit}>Continue</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TransferProof;