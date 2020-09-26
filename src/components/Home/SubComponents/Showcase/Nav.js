import React, { Component } from "react";
import logo from '../../../../images/logo.png'
import { Link } from "react-router-dom";
class NavbarPage extends Component {
    state = {
        isOpen: false,
        addedClass:"",
        fontawesome:"fa-bars"
      };
      
      toggleCollapse = () => {
        this.setState({ 
            isOpen: !this.state.isOpen,
            addedClass:"d-block style-mobile",
            fontawesome:"fa-times"
         });
         
      }
      componentDidMount(){
          this.setState({
              isOpen:true
          })
      }

render() {
  return (
    <nav className="top-main-nav">
        <div className="container nav-items">
            <div>
                <Link to="/">
                    <img src={logo} alt=""/>
                </Link>
            </div>
            <div>
                {this.state.isOpen?<ul className={this.state.addedClass}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </ul>:null}
            </div>
        </div>
        {this.state.isOpen?<i className={`fa fa-times fa-3x menus-icon`} aria-hidden="true" onClick={this.toggleCollapse}></i>:
            <i 
             className={`fa fa-bars fa-3x menus-icon`}
             aria-hidden="true" 
             onClick={this.toggleCollapse}>
            </i>}
        
    </nav>
    );
  }
}

export default NavbarPage;