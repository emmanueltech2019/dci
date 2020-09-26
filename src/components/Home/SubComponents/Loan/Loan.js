import React, { Component } from 'react';
import "./Loan.css";
import loans from '../../../../images/loans.jpg'
import { Link } from 'react-router-dom';
class Loan extends Component {
    render() {
        return (
            <div className="Loan-section">
                <div className="Loan-section-1">
                    <img src={loans} alt=""/>
                    <span className='quality-tag-loans'>
                        <i className="fa fa-balance-scale fa-2x" aria-hidden="true"></i><br/>
                        <span>Solid Financial Support</span><br/>
                        <h3>For Businesses & Indiviuals</h3>
                    </span>  
                </div>
                <div className="Loan-section-2">
                        <div className="about-text-1">
                        <button className="spot-box"></button>
                            <h2 className="home-about-h2">LOANS</h2>
                        </div>
                        <h1>DCI Loan Is Open To All<br/> Bankable Adults With<br/> Secured And 
                            Verified<br/> Collateral</h1>
                        <div>
                            <p>Whether business, personal or salary advance loan. Our
                                 loan is your preferred platform for your    prompt and less bureaucratic procedure.</p>
                            <p>All loans from DCI shall attract a non-negotiable minimum interest rate of 10%, depending on 
                                the duration of the loan, the principal and 
                                interest shall be repaid on an equal proportion monthly into the company’s designated account.</p>
                                <p>
                                Interest on these loans are one of revenue-generating Avenue for DCI
                                 and through these profits, we service and pay our investors their
                                  monthly interest on investment.
                                </p>
                        </div>
                        <Link to="/contact">
                        <button className="btn-default-color">
                            Start A Conversation
                            <span className="fa fa-chevron-right"></span>
                        </button>
                        </Link>
                        
                </div>
            </div>
        );
    }
}

export default Loan;