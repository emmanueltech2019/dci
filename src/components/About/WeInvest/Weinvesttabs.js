import React, { Component } from 'react';

class Weinvesttabs extends Component {
    render() {
        return (
            <div className="weinvestin-tab">
                <div>
                    <button>
                        <span className="fa fa-tree"></span>
                        Agriculture
                    </button><br/>
                    <button>
                        <span className="fa fa-taxi"></span>
                        Transportation
                    </button><br/>
                    <button>
                        <span className="fa fa-bar-chart"></span>
                        Trading
                    </button><br/>
                    <button>
                        <span className="fa fa-home"></span>
                        Real Estate / Construction
                    </button><br/>
                    <button>
                        <span className="fa fa-user"></span>
                        Oil and Gas Services
                    </button>
                </div>
            </div>
        );
    }
}

export default Weinvesttabs;