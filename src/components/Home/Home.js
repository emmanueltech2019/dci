import React, { Component } from 'react';
import Showcase from './SubComponents/Showcase/Showcase';
import About from './SubComponents/About/About';
import Investment from './SubComponents/investment/Investment';
import Loan from './SubComponents/Loan/Loan';
import Saving from './SubComponents/Saving/Saving';
import Future from './SubComponents/Future/Future'
import Footer from '../footer.js/Footer';

 
class Home extends  Component {
    render() {
        return (
            <div style={{overflowX:"hidden"}}>
                <Showcase/>
                {/* this is the top showcase */}
                <About/>
                {/* this iste about section component */}
                <Investment/>
                {/* this is he investment section component */}
                <Loan/>
                {/* this si the home componet section */}
                <Saving/>
                <Future/>
                <Footer/>
                
            </div>
        );
    }
}

export default Home;