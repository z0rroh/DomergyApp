import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

class ColumnChart extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [
        {name: '01:00', $: 1000, kW: 500},
        {name: '02:00', $: 1110, kW: 510},
        {name: '03:00', $: 1120, kW: 520},
        {name: '04:00', $: 1130, kW: 530},
        {name: '05:00', $: 1140, kW: 540},
        {name: '06:00', $: 1150, kW: 550},
        {name: '07:00', $: 1160, kW: 560},
      ]
    }
  }

  componentDidMount(){
    this.delayState()
  }

  delayState() {
    setInterval(() => {
        var newData = {name: '01:00', $:Math.floor((Math.random() * 600) + 1), kW: Math.floor((Math.random() * 1200) + 1)}
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
    console.log(data);
    return (
      <BarChart width={585} height={283} data={data} margin={{top: 20, right: 10, left: 10, bottom: 10}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis yAxisId="left" orientation="left" stroke="#ff9d0c"/>
        <YAxis yAxisId="right" orientation="right" stroke="#6e0081"/>
        <Tooltip/>
        <Legend />
        <Bar yAxisId="left" dataKey="kW" fill="#ff9d0c" />
        <Bar yAxisId="right" dataKey="$" fill="#6e0081" />
      </BarChart>
    );
  }

}

export default ColumnChart;
