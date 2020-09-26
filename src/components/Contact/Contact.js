import React, { Component } from 'react';
import Showcase from '../About/Showcase/Showcase';
import Follow from './Follow/Follow';
import Footersm from '../footer.js/Footersm';
import Connect from './Connect/Connect';
import Locations from './Location/Locations';

class Contact extends Component {
    render() {
        return (
            <div>
                <Showcase name="Contact Us"/>
                <Connect/>
                <Locations/>
                <Follow/>
                <Footersm/>
            </div>
        );
    }
}

export default Contact;