import React, { Component } from 'react';
import {Icon} from '@blueprintjs/core'

class NavSideBar extends Component {

  render() {
    return (
      <div className="NavSideBarContainer">
        <nav className="main-menu">
          <ul>
            <li className="has-subnav">
              <a>
                <div className="pt-navbar-group">
                  <Icon icon="dashboard"/>
                  <span className="nav-text">DashBoard</span>
                </div>
              </a>
            </li>
            <li className="has-subnav">
              <a>
                <div className="pt-navbar-group">
                  <Icon icon="control"/>
                  <span className="nav-text">Control</span>
                </div>
              </a>
            </li>
            <li className="has-subnav">
                <a>
                  <div className="pt-navbar-group">
                    <Icon icon="layers"/>
                    <span className="nav-text">Contextos</span>
                  </div>
                </a>
            </li>
            <li className="has-subnav">
                <a>
                  <div className="pt-navbar-group">
                    <Icon icon="list-detail-view"/>
                    <span className="nav-text">Dispositivos</span>
                  </div>
                </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

}

export default NavSideBar;
