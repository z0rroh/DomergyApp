import React, { Component } from 'react';
import '../styles/App.css';
import { Switch } from 'react-router-dom';
import AuthRoute from '../AuthRoute'
import Login from './Login/Login'
import DomergyApp from './DomergyApp/DomergyApp'

class App extends Component {

  render() {
    const user = {
      name: "carlos riquelme",
      isAuthenticated: false,
    }
    return (
      <div className="App">
        <Switch>
          <AuthRoute
            path="/login"
            component={Login}
            user={user}/>
          <AuthRoute
            path="/"
            component={DomergyApp}
            user={user}/>
        </Switch>
        <div className="Footer container">
          <div className="row">
            <div className="FooterCR col-xs">
              <p>Copyright © 2018 Domergy Inc. All rights reserved.</p>
            </div>
            <div className="FooterRedes col-xs">
              <p>Iconos Redes Sociales</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
