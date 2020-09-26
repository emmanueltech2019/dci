import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../Navigation/Navigation";
import img1 from "../../../../../images/invetsdashboardicon.PNG";
import img2 from "../../../../../images/loan-active.PNG";
import img3 from "../../../../../images/invetsdashboardicon-3.PNG";
import axios from "axios";
class Loandets extends Component {
  state = {
    image: null,
    name: null,
  };
  componentDidMount() {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    axios({
      method: "post",
      url: `https://stormy-wildwood-75014.herokuapp.com/api/v1/user/dashboarduser/${id}`,
      data: {},
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      console.log(res);
      this.setState({
        image: res.data.user.image ? res.data.user.image.path : null,
        name: res.data.user.fullname,
      });
    });
  }
  render() {
    const { image, name } = this.state;
    return (
      <div>
        <Navigation />
        <div className="dashboard-user space-dashbbord-box">
          <div className="dashboard-user-1" style={{ height: "280px" }}>
            <div className="dashboard-user-1-main">
              <div className="dashboard-user-1-1">
                <img src={image} alt="" />
                <div>
                  <h3>Welcome {name}</h3>
                  <span>Select a feature to begin</span>
                </div>
              </div>
              <Link>
                <div className="dashboard-user-1-2">
                  <img src={img1} alt="" />
                </div>
              </Link>

              <Link>
                <div className="dashboard-user-1-3">
                  <img src={img2} alt="" />
                </div>
              </Link>
              <Link to="/savings">
                <div className="dashboard-user-1-4">
                  <img src={img3} alt="" />
                </div>
              </Link>
            </div>
            <p className="dashboard-user-1-main-loan-p">
              DCI loans are open to all bankable adults with secured and
              verified collateral. Whether its a <br />
              buisness, personal, salary adavance loan, our platform is the best
              for your prompt and less bureaucratic procedure.{" "}
            </p>
          </div>
          <div className="loan-types-all">
            <div className="loan-types-tab-control">
              <ul>
                <li>
                  <span></span>
                  <br />
                  Loan type
                </li>
                <li>
                  <span style={{ backgroundColor: "#334E96 " }}></span>
                  <br />
                  Loan Details
                </li>
                <li>
                  <span></span>
                  <br />
                  Documents
                </li>
                <li>
                  <span></span>
                  <br />
                  success
                </li>
              </ul>
            </div>
            <div className="loan-types-title">
              <hr></hr>
              <div className="loan-types-title-text">Loan Details</div>
            </div>
            <div className="form-loan-dets">
              <form>
                <div class="form-group">
                  <label for="Desired Loan Amount">Desired Loan Amount</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Use Of Loan</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Annual Income</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Employers Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <Link to="/loans/dashboard/loan-docsloan-docs">
                  <button type="submit" class="btn-loan-dets">
                    Submit
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loandets;
