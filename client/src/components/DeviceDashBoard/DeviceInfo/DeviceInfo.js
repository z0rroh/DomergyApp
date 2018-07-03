import React, { Component } from 'react';
import { Icon, Alert, Button, Intent } from '@blueprintjs/core'
import Switch from 'react-toggle-switch'
import axios from 'axios'

class DeviceInfo extends Component {

  constructor(props){
    super(props);
    this.state={
      switched: false,
      isOpen: false
    }
  }

  toggleAlert = () => {
    this.setState(prevState => {
      console.log(prevState);
      return {
        isOpen: !prevState.isOpen
      };
    });
  }

  toggleSwitch = () =>{
    this.setState(prevState => {
      return {
        switched: !prevState.switched
      };
    });
  }

  toggleRequest = async () =>{

  }
  deviceRequest = async () =>{
    try{
      const res = await axios.put('http://10.108.0.45:3001/api/device/PIRD-SMARTMETERLAB-1/command/POWER')
      console.log(res);
    }catch(e){
      console.log(e);
    }
  }

  render() {
    const {switched, isOpen} = this.state;
    console.log(isOpen);
    return (
      <div className="DeviceInfoContainer">
        <div className="DeviceInfoTitle">
          <h6>Dispositivo Bodega</h6>
        </div>
        <div className="DeviceInfoBody">
          <div className="DeviceElements row">
            <div className="DeviceElement col-xs-12">
              <span className="spanAtribute">ID:</span>
              <span>123456789</span>
            </div>
            <div className="DeviceElement col-xs-12">
              <span className="spanAtribute">Nombre:</span>
              <span> Bodega 1</span>
            </div>
            <div className="DeviceElement col-xs-12">
              <span className="spanAtribute">Tipo:</span>
              <span>Sonoff 1 entrada</span>
            </div>
            <div className="DeviceElement col-xs-12">
              <span className="spanAtribute">Descripcion:</span>
              <span>Medidor de consumo energetico</span>
            </div>
            <div className="DeviceElement row col-xs-12 middle-xs">
              <Switch className={switched && "SwitchButton"} onClick={this.toggleAlert} on={switched}/>
              <span className="spanSwitchButton">Estado:</span>
              <span>{switched ? ("Encendido") : ("Apagado")}</span>
              <Alert
                icon={"issue"}
                canEscapeKeyCancel={true}
                intent={switched ? (Intent.DANGER) : (Intent.PRIMARY)}
                canOutsideClickCancel={true}
                cancelButtonText={"Cancelar"}
                confirmButtonText={"Aceptar"}
                onClose={this.toggleAlert}
                onConfirm={this.toggleSwitch}
                isOpen={isOpen}>
                <p>¿Estas seguro que deseas {switched ? (<b>Apagar</b>) : (<b>Encender</b>)} el dispositivo?</p>
              </Alert>
            </div>
          </div>
          <div className="DeviceElementButton">
            <div className="IconBox">
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default DeviceInfo;
