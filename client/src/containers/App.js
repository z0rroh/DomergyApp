import React, { Component } from 'react';
import '../styles//App.css';
import { Switch } from 'react-router-dom';
import AuthRoute from '../AuthRoute'
import Login from './Login/Login'
import DomergyApp from './DomergyApp/DomergyApp'

class App extends Component {

  render() {
    const user = {
      name: "carlos riquelme",
      isAuthenticated: true,
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
      </div>
    );
  }
}

export default App;
