import React, { Component } from 'react';
import { Card, Elevation, Icon } from "@blueprintjs/core";
import GoogleMaps from '../../components/DeviceDashBoard/GoogleMaps/GoogleMaps'
import ColumnChart from '../../components/DeviceDashBoard/ColumnChart/ColumnChart'
import LineChart from '../../components/DeviceDashBoard/LineChart/LineChart'
import energyConsumed from '../../assets/Videos/ConsumoKw/energy-consumed.mp4'
import EnergyResume from '../../components/DeviceDashBoard/EnergyResume/EnergyResume'
import DeviceInfo from '../../components/DeviceDashBoard/DeviceInfo/DeviceInfo'
import SimpleAreaChart from '../../components/DeviceDashBoard/AreaChart/AreaChart'

class DashBoard extends Component {

  render() {
    return (
      <div className="container col-xs-12">
        <div className="DashBoardContainer row">
          <div className="DashBoardCardContainer col-xs-12 col-sm-6 col-lg-3">
            <Card
              className="DashBoardCard col-xs-12"
              interactive={true} elevation={Elevation.TWO}>
              <DeviceInfo/>
            </Card>
          </div>
          <div className="DashBoardCardContainer col-xs-12 col-sm-6 col-lg-3">
            <Card
              className="DashBoardCard col-xs-12"
              interactive={true} elevation={Elevation.TWO}>
              <EnergyResume/>
            </Card>
          </div>
          <div className="DashBoardCardContainer col-xs-12 col-lg-6">
            <Card
              className="DashBoardCardMap col-xs-12"
              interactive={true} elevation={Elevation.TWO}>
              <GoogleMaps/>
            </Card>
          </div>
          <div className="DashBoardCardContainer col-xs-12 col-sm-12">
            <Card
              className="DashBoardCard col-xs-12"
              interactive={true} elevation={Elevation.TWO}>
              <ColumnChart/>
            </Card>
          </div>
          <div className="DashBoardCardContainer col-xs-12">
            <Card
              className="DashBoardCard col-xs-12"
              interactive={true} elevation={Elevation.TWO}>
              <LineChart/>
            </Card>
          </div>
        </div>
      </div>
    );
  }

}

export default DashBoard;
