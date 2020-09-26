import React, { Component } from 'react';
import { MDBContainer, } from "mdbreact";
class Footersm extends Component {
    render() {
        return (
            <div>
                <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>Copyright 
          &copy; {new Date().getFullYear()} Double Coin Investment - Designed by TechPadi NG
        </MDBContainer>
      </div>
            </div>
        );
    }
}

export default Footersm;