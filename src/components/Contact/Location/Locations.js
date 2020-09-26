import React, { Component } from 'react';
import './Locations.css'
import {
    Map, 
    // InfoWindow,
     Marker, 
     GoogleApiWrapper} from 'google-maps-react';
class Locations extends Component {
    // state={

    // }
    render() {
        const containerStyle = {
            position: 'relative',  
            width: '100%',
            height: '100%'
          }
        return (
            <div className="locations">
                <div className="locations-1">
                <Map google={this.props.google} zoom={14} containerStyle={containerStyle}>
 
                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                    {/* <InfoWindow onClose={this.onInfoWindowClose} InfoWindow={null}> */}
                        {/* <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                        </div> */}
                    {/* </InfoWindow> */}
                    </Map>
                </div>
            </div>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyBOnqiu0FugxG8ckCqJwB0Df1VRsJBYTX8")
  })(Locations)