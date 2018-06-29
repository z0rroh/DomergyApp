import React, { Component } from 'react';
import DeviceDashBoard from '../DeviceDashBoard/DeviceDashBoard'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'

class DomergyApp extends Component {
  static isPrivate = true;
  render() {
    return (
      <div className="DomergyAppContainer">
        <NavBar/>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
               <DeviceDashBoard/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default DomergyApp;
