import React, { Component } from 'react';
import "./PlanCard.css"
import { Link } from 'react-router-dom';
class PlanCard extends Component {
    render() {
        return (
            <div>
                <div className="PlanCard">
                    <div className="PlanCard-top">
                        <h2>{this.props.planName}</h2>
                        <span>{this.props.Minimum}</span>
                    </div>
                    <ul class="fa-ul">
                        {this.props.li1?<li>
                        <span class="fa-li">
                            <i class="fa fa-check"></i>
                        </span>{this.props.li1}
                        </li>:null}
                        {this.props.li2?<li>
                        <span class="fa-li">
                            <i class="fa fa-check"></i>
                        </span>{this.props.li2}
                        </li>:null}
                        {this.props.li3?<li>
                        <span class="fa-li">
                            <i class="fa fa-check"></i>
                        </span>{this.props.li3}
                        </li>:null}
                        {this.props.li4?<li>
                        <span class="fa-li">
                            <i class="fa fa-check"></i>
                        </span>{this.props.li4}
                        </li>:null}
                        {this.props.li5?<li>
                        <span class="fa-li">
                            <i class="fa fa-check"></i>
                        </span>{this.props.li5}
                        </li>:null}
                        {this.props.li6?<li>
                        <span class="fa-li">
                            <i class="fa fa-check"></i>
                        </span>{this.props.li6}
                        </li>:null}
                    </ul>
                    <Link to={this.props.link}>
                        <button className="plans-arrow">
                            <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default PlanCard;