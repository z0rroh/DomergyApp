import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import moment from 'moment'

class ColumnChart extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [
        {time: '01:00', $: 1000, kW: 100},
        {time: '02:00', $: 1110, kW: 510},
        {time: '03:00', $: 1120, kW: 520},
        {time: '04:00', $: 1130, kW: 530},
        {time: '05:00', $: 1140, kW: 540},
        {time: '06:00', $: 1150, kW: 550},
        {time: '07:00', $: 1160, kW: 560},
      ]
    }
  }

  componentDidMount(){
    this.delayState();
  }

  componentDidUpdate(){
    console.log("hola");
  }
  delayState() {
    setTimeout(() => {
        var newData = {name: moment(new Date()).format('HH:mm'), $: 1000, kW: 200}
        var data = this.state.data;
        data.splice(0,1)
        data.push(newData)
        this.setState({
          data: data
        })
    }, 1000);
  }

  render() {
    const data = this.state.data;
    return (
      <div className="ColumnChartContainer">
        <div className="ConsumoActualTitle">
          <h6>Consumo Actual</h6>
        </div>
        <div className="ConsumoActualBody">
          <BarChart width={585} height={283} data={data} margin={{top: 20, right: 10, left: 10, bottom: 10}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="time"/>
            <YAxis yAxisId="left" orientation="left" stroke="#ff9d0c"/>
            <YAxis yAxisId="right" orientation="right" stroke="#6e0081"/>
            <Tooltip/>
            <Legend />
            <Bar yAxisId="left" dataKey="kW" fill="#ff9d0c" />
            <Bar yAxisId="right" dataKey="$" fill="#6e0081" />
          </BarChart>
        </div>
      </div>
    );
  }

}

export default ColumnChart;
