import React, { Component } from "react";
import Navigation from "../../Navigation/Navigation";
import "./Settings.css";
class Settings extends Component {
    state={
        isOpen:false
    }
    swap=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    cancle=()=>{
        this.setState({
            isOpen:false
        })
    }
  render() {
    return (
      <div>
        <Navigation />
        <div className="settings-main space-dashbbord-box">
          <div className="settings-controls">
            <div style={{ boxShadow: "0px 6px 4px #295FA6" }}>
              <i className="fa fa-user" style={{ color: "#295FA6" }}></i>
              <br />
              <span style={{ color: "#295FA6" }}>Account</span>
            </div>
            <div>
              <i class="fa fa-lock" aria-hidden="true"></i>
              <br />
              <span>Privacy & Security</span>
            </div>
            <div>
              <i class="fa fa-headphones" aria-hidden="true"></i>
              <br />
              <span>Help & Support</span>
            </div>
            <div>
              <i class="fa fa-question-circle" aria-hidden="true"></i>
              <br />
              <span>About</span>
            </div>
          </div>

          <div className="settings-main-part">
            <form>
              <h1>Account info</h1>
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <br />
                <div style={{ display: "inline-flex" }}>
                  <input type="email" class="form-control" />
                  <span className="edit-btn-settings" onClick={this.swap}>Edit Email</span>
                </div>
                {this.state.isOpen?<div className="modal-edit-email">
                    <span className="close-icon-sett fa fa-times" onClick={this.swap}  aria-hidden="true"></span>
                  <h3>Change you Email</h3>
                  <div className="modal-edit-email-text">
                    <p>Your current email address is</p>
                    <span>emmanuelnwankwo@mail.com</span>
                  </div>
                  <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="modal-edit-email-btn">
                      <button onClick={this.cancle}>cancle</button>
                      <button>Save</button>
                    </div>
                  </form>
                </div>:null}
              </div>
            </form>
            <form>
              <h1>Contact info</h1>
              <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>Residentiial Address</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>Nearest Bus stop</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>State</label>
                <input type="text" class="form-control" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
