import React, { Component } from 'react';
import DeviceDashBoard from '../DeviceDashBoard/DeviceDashBoard'
import NavBar from '../../components/NavBar/NavBar'
import NavSideBar from '../../components/NavSideBar/NavSideBar'

class DomergyApp extends Component {
  static isPrivate = true;
  render() {
    return (
      <div className="DomergyAppContainer">
        <NavBar/>
        <div className="MainContainer">
          <div className="NavSideBar">
            <NavSideBar />
          </div>
          <div className="ContentContainer">
            <DeviceDashBoard/>
          </div>
        </div>
      </div>
    );
  }

}

export default DomergyApp;
