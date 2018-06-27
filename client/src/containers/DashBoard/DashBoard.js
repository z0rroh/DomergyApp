import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';
import { Card, Elevation, Icon } from "@blueprintjs/core";
import GoogleMaps from '../../components/DashBoard/GoogleMaps/GoogleMaps'
import BoardChart from '../../components/DashBoard/BoardChart/BoardChart'
import ColumnChart from '../../components/DashBoard/ColumnChart/ColumnChart'
import energyConsumed from '../../assets/Videos/ConsumoKw/energy-consumed.mp4'

class DashBoard extends Component {

  render() {
    var layout = [
      {i: 'dispositivoInfo', x: 0, y: 0, w: 3, h: 3, static: true},
      {i: 'ubicacionMap', x: 5.5, y: 0, w: 6.5, h: 3, static: true},
      {i: 'consumoEnergetico', x: 3, y: 0, w: 2.5, h: 3, static: true},
      {i: 'consumoGrap', x: 6, y: 3, w: 6, h: 3, static: true},
      {i: 'consumoGrap2', x: 0, y: 3, w: 6, h: 3, static: true},
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
            <div className="DispositivoTitle">
              <h6>Dispositivo XXXX</h6>
            </div>
            <div className="DispositivoBody">
              <div className="DispositivoElements row">
                <div className="DispositivoElement col-xs-12">
                  <p>ID: 123456789</p>
                </div>
                <div className="DispositivoElement col-xs-12">
                  <p>Nombre: Bodega 1</p>
                </div>
                <div className="DispositivoElement col-xs-12">
                  <p>Tipo: blabla</p>
                </div>
                <div className="DispositivoElement col-xs-12">
                  <p>Descripcion: lalalalalalala</p>
                </div>
                <div className="DispositivoElement col-xs-12">
                  <p>Estado: Encendido</p>
                </div>
              </div>
              <div className="DispositivoElementButton">
                <div className="IconBox">
                  <Icon className="IconTitle" icon="power" iconSize={50}/>
                </div>
              </div>
            </div>
          </Card>
          <Card
            key="ubicacionMap"
            className="DashBoardCard"
            interactive={true} elevation={Elevation.TWO}>
            <div className="UbicacionTitle">
              <h6>Ubicación</h6>
            </div>
            <div className="UbicacionBody">
              <GoogleMaps/>
            </div>
          </Card>
          <Card
            key="consumoEnergetico"
            className="DashBoardCard"
            interactive={true} elevation={Elevation.TWO}>
            <div className="ConsumoKwhTitle">
              <Icon className="IconTitle" icon="offline" iconSize={25}/>
              <h6>Resumen Energetico</h6>
            </div>
            <div className="ConsumoKwhBody">
              <video src={energyConsumed} loop muted autoPlay/>
              <div className="ConsumoInfo">
                <div className="MedicionMaxima">
                  <h4>Medición Maxima</h4>
                  <h1>1830 kWh</h1>
                </div>
                <div className="TotalMonetario">
                  <h4>Total Monetario</h4>
                  <h1>$15.540</h1>
                </div>
              </div>
            </div>
          </Card>
          <Card
            key="consumoGrap"
            className="DashBoardCard"
            interactive={true} elevation={Elevation.TWO}>
            <div className="ConsumoActualTitle">
              <h6>Consumo Actual</h6>
            </div>
            <div className="ConsumoActualBody">
              <ColumnChart/>
            </div>
          </Card>
          <Card
            key="consumoGrap2"
            className="DashBoardCard"
            interactive={true} elevation={Elevation.TWO}>
            <div className="ConsumoActualTitle">
              <h6>Consumo Actual</h6>
            </div>
            <div className="ConsumoActualBody">
              <ColumnChart/>
            </div>
          </Card>
        </GridLayout>
      </div>
    );
  }

}

export default DashBoard;
