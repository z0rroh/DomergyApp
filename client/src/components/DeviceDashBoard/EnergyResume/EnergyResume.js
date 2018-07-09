import React, { Component } from 'react';
import {Icon} from '@blueprintjs/core'
import EnergyConsumed from '../../../assets/Videos/ConsumoKw/energy-consumed.mp4'

class EnergyResume extends Component {

  constructor(props){
    super(props);

    this.state={
      medMax: 100,
      totalMon: 970
    }
  }

  
  render() {
    const {medMax, totalMon} = this.state;
    return (
      <div className="EnergyResumeContainer">
        <div className="ConsumoKwhTitle">
          <Icon className="IconTitle" icon="offline" iconSize={25}/>
          <h6>Resumen Energetico</h6>
        </div>
        <div className="ConsumoKwhBody">
          <video src={EnergyConsumed} loop muted autoPlay/>
          <div className="ConsumoInfo">
            <div className="MedicionMaxima">
              <h4>Medición Maxima</h4>
              <h1>{medMax} kWh</h1>
            </div>
            <div className="TotalMonetario">
              <h4>Total Monetario</h4>
              <h1>${totalMon}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default EnergyResume;
