import React, { Component } from 'react';
import Showcase from '../About/Showcase/Showcase';
import Footer from '../footer.js/Footer';
import Saving from '../Home/SubComponents/Saving/Saving';
import ServiceInvest from './Services-invest/ServiceInvest';
import Servicesplans from './Services-plans/Servicesplans';
import Servicesloan from './Services-loan/Servicesloan';
class Services extends Component {
    render() {
        return (
            <div>
                <Showcase name="Services"/>
                <ServiceInvest/>
                <Servicesplans/>
                <Servicesloan/>
                <Saving/>
                <Footer/>
            </div>
        );
    }
}

export default Services;