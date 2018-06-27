import React, { Component } from 'react';
import DashBoard from '../DashBoard/DashBoard'
import NavBar from '../../components/NavBar/NavBar'

class DomergyApp extends Component {
  static isPrivate = true;
  render() {
    return (
      <div className="DomergyAppContainer">
        <NavBar/>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
               <DashBoard/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default DomergyApp;
