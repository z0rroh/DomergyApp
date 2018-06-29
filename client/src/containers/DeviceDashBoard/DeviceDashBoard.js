import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';
import { Card, Elevation, Icon } from "@blueprintjs/core";
import GoogleMaps from '../../components/DeviceDashBoard/GoogleMaps/GoogleMaps'
import ColumnChart from '../../components/DeviceDashBoard/ColumnChart/ColumnChart'
import LineChart from '../../components/DeviceDashBoard/LineChart/LineChart'
import energyConsumed from '../../assets/Videos/ConsumoKw/energy-consumed.mp4'
import EnergyResume from '../../components/DeviceDashBoard/EnergyResume/EnergyResume'
import DeviceInfo from '../../components/DeviceDashBoard/DeviceInfo/DeviceInfo'

class DashBoard extends Component {

  render() {
    var layout = [
      {i: 'dispositivoInfo', x: 0, y: 0, w: 3, h: 3, static: true},
      {i: 'ubicacionMap', x: 5.5, y: 0, w: 6.5, h: 3, static: true},
      {i: 'consumoEnergetico', x: 3, y: 0, w: 2.5, h: 3, static: true},
      {i: 'generacionGrap', x: 6, y: 3, w: 6, h: 3, static: true},
      {i: 'consumoGrap', x: 0, y: 3, w: 6, h: 3, static: true},
    ];
    const margin = [10,10]
    return (
      <div className="DashBoardContainer">
        <GridLayout
          className="layout"
          layout={layout}
          margin={margin}
          cols={12}
          rowHeight={100}
          width={1200}
          isResizable={false}>
          <Card
            key="dispositivoInfo"
            className="DashBoardCard"
            interactive={true} elevation={Elevation.TWO}>
            <DeviceInfo/>
          </Card>
          <Card
            key="ubicacionMap"
            className="DashBoardCard"
            interactive={true} elevation={Elevation.TWO}>
            <GoogleMaps/>
          </Card>
          <Card
            key="consumoEnergetico"
            className="DashBoardCard"
            interactive={true} elevation={Elevation.TWO}>
            <EnergyResume/>
          </Card>
          <Card
            key="generacionGrap"
            className="DashBoardCard"
            interactive={true} elevation={Elevation.TWO}>
            <LineChart/>
          </Card>
          <Card
            key="consumoGrap"
            className="DashBoardCard"
            interactive={true} elevation={Elevation.TWO}>
            <ColumnChart/>
          </Card>
        </GridLayout>
      </div>
    );
  }

}

export default DashBoard;
