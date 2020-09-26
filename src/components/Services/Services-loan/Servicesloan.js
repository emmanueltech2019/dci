import React, { Component } from 'react';
import './Servicesloan.css'
import img1 from "../../../images/loans.jpg"
import img2 from "../../../images/umbrellaicon.png"

class Servicesloan extends Component {
    render() {
        return (
            <div className="Servicesloan">
                <div className="Servicesloan-1">
                    <h1>Loan</h1>
                    <p>DCI loan is open to all bankable adults with secured and verified
                       collateral. Whether business, personal or salary advance loan. Our 
                       loan is your preferred platform for your prompt and less bureaucratic 
                       procedure.
                    </p>
                    <p>
                    All loans from DCI shall attract a non-negotiable minimum interest rate of 10%,
                    depending on the duration of the loan, the principal and interest shall be repaid 
                    on an equal proportion monthly into the company’s designated account.
                    </p>
                    <img alt="" src={img1}/>
                </div>
                <div className="Servicesloan-2">
                    <h2>TENURE</h2>
                    <span>All DCI loan shall run between one (1) month to a maximum of twelve (12) months</span>
                    <h2>INTEREST</h2>
                    <div>
                        <h2>1. ONE (1) MONTH (ONE-OFF REPAYMENT)</h2>
                        <ul>
                            <li>Duration 1 months</li>
                            <li>One-off interest of 20%</li>
                            <li>One-off repayment of principal and interest</li>
                        </ul>
                    </div>
                    <div>
                        <h2>2. TWO (2) MONTHS TO six (6) MONTHS (MONTHLY INSTALMENT OF
PRINCIPAL & INTEREST IN EQUAL PROPORTION)</h2>
                        <ul>
                            <li> Duration 2 to 6 months</li>
                            <li> Interest rate 18% per cent monthly</li>
                            <li>Monthly repayment plan</li>
                        </ul>
                    </div>
                    <div>
                        <h2>3. SEVEN (7) MONTHS TO TWELVE (12) MONTHS (MONTHLY INSTALMENT
OF PRINCIPAL & INTEREST IN EQUAL PROPORTION)</h2>
                        <ul>
                            <li>Duration 7 to 12 months</li>
                            <li>Interest rate of 17 per cent monthly</li>
                            <li>Monthly repayment plan</li>
                        </ul>
                    </div>
                    <div>
                        <h2>4. LOAN FOR INVESTORS</h2>
                        <ul>
                            <li> No collateral or security required</li>
                            <li> Duration up to the duration of your investment with DCI</li>
                            <li>Interest rate of 15 per cent monthly</li>
                            <li>Monthly repayment plan</li>
                            <li>Provided that the loan applied is not more than 30% of the investment with
DCI</li>
                        </ul>
                    </div>
                </div>
                <div className="Servicesloan-3">
                <img alt="" src={img2}/>
                <h3>ACCEPTABLE SECURITIES</h3>
                <ul>
                    <li>Title Documents (whether empty plot or built up)</li>
                    <li>Cheque</li>
                    <li>Cars</li>
                    <li>Household equipment</li>
                    <li> Investment from DCI</li>
                    <li>Any other verifiable property that the company may deem proper after Valuation
All securities for loans must be verified by the company and the value of the said security
shall be more than 70% of the loan month to be given.</li>
                </ul>
                <button className="btn-default-color">Apply For Loan<span className="fa fa-chevron-down"></span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Servicesloan;