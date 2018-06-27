import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer'

class Login extends Component {
  static isPrivate = false;
  render() {
    return (
      <div className="LoginContainer">
        <div className="row">
          <div className="col-xs-12">
            Login
          </div>
          <div className="col-xs-12">
            <Footer/>
          </div>
        </div>
      </div>
    );
  }

}

export default Login;
