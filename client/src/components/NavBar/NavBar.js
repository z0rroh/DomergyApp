import React, { Component } from 'react';
import {
    Alignment,
    Button,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Switch,
    Icon
} from "@blueprintjs/core";
import logo from '../../assets/Images/Logo/LogoDomergy.png'

class NavBar extends Component {

  render() {
    return (
      <div className="NavBarContainer">
          <Navbar className="NavBar">
            <div className="row center-xs">
              <div className="col-xs-11">
                <NavbarGroup className="NavBarElement" align={Alignment.LEFT}>
                    <NavbarHeading className="NavBarHeading"><img src={logo} alt="Logo" /></NavbarHeading>
                    <NavbarDivider className="NavBarDivider"/>
                    <div className="pt-input-group">
                      <Icon icon="search" iconSize={16}/>
                      <input className="Search pt-input pt-round" type="search" placeholder="Buscar Dispositivo ..." dir="auto" />
                    </div>
                </NavbarGroup>
                <NavbarGroup className="NavBarElement" align={Alignment.RIGHT}>
                  <Button className="pt-minimal" icon="home" text="Home" />
                  <NavbarDivider className="NavBarDivider"/>
                  <Button className="pt-minimal" icon="user"/>
                  <Button className="pt-minimal" icon="notifications"/>
                  <Button className="pt-minimal" icon="cog"/>
                </NavbarGroup>
              </div>
            </div>
          </Navbar>
      </div>
    );
  }

}

export default NavBar;
