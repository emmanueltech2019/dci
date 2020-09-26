import React, { Component } from 'react';
import Showcase from "./Showcase/Showcase"
import WhoWeAre from './WhoWeAre/WhoWeAre';
import Mission from './Mission/Mission';
import Footer from '../footer.js/Footer';
import TeamAbout from './TeamAbout/TeamAbout';
import Weinvest from './WeInvest/Weinvest';
class About extends Component {
    render() {
        return (
            <div>
                <Showcase name="About Us"/>
                <WhoWeAre/>
                <Mission/>
                <Weinvest/>
                <TeamAbout/>
                <Footer/>
            </div>
        );
    }
}

export default About;