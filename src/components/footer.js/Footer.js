import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link} from "react-router-dom";
import logosm from '../../images/logo-sm.png'
import './Footer.css'
import Footersm from "./Footersm";
const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4" >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <div className="footer-part-1">
             <img alt="" src={logosm}/>
             <h5 className="title-footer">Vision</h5>
             <p>
               To be a world class and reputable financial solution company in Nigeria and beyond.
            </p>
            </div>
            
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title" style={{padding:"0 0 0 60px"}}>Quick Links</h5>
            <ul style={{padding:"0 0 0 100px",color:"#000"}} className="quick-links-footer">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="register">Register</Link>
              </li>
            </ul>
            
          </MDBCol>
          <MDBCol md="4">
            <div className="footer-search-section">
                <h5 className="title">Search our website</h5>
                <form>
                  <input type="text"/><br/>
                  <button>Search</button>
                </form>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footersm/>
    </MDBFooter>
  );
}

export default Footer;