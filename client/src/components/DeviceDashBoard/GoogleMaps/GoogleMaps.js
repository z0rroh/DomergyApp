import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class GoogleMaps extends Component {

  constructor(props){
    super(props);
    this.state={
      cordenates: {
        lat: -33.466904,
        lng: -70.596910
      },
      isMarkerShown: true
    }
  }

  render() {
    const {cordenates, isMarkerShown} = this.state;
    const GoogleMapRender = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultCenter={{lat: cordenates.lat, lng: cordenates.lng}}
        defaultZoom={17}>
        {
          props.isMarkerShown &&
          <Marker
            position={{lat: cordenates.lat, lng: cordenates.lng}}/>
        }
      </GoogleMap>
    ));
    return(
      <div className="GoogleMapContainer">
        <div className="UbicacionTitle">
          <h6>Ubicación</h6>
        </div>
        <div className="UbicacionBody">
          <GoogleMapRender
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAWmdutBvMd8SGai4WAFxUUnbvxzDPeAxo"
            loadingElement={<div style={{height:`100%`}}/>}
            containerElement={<div style={{height:`267px`,width:'100%'}}/>}
            mapElement={<div style={{height:`100%`}}/>}
            isMarkerShown={isMarkerShown}/>
        </div>
      </div>
    );
  }
};
export default GoogleMaps;
