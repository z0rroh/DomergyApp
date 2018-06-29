import React, { Component } from 'react';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
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

  delayState() {
    setInterval(() => {
      const newData = this.state.data;
      newData.splice(0,1);
      newData.push({time: moment(new Date()).format('HH:mm:ss'), $: Math.floor((Math.random() * 1200) + 1000), kW: Math.floor((Math.random() * 600) + 500)})
      this.setState({data: newData})
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
          <ResponsiveContainer width="100%" height="100%" minHeight={283}>
            <BarChart data={data.slice()} margin={{top: 20, right: 10, left: 10, bottom: 10}}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="time"/>
              <YAxis yAxisId="left" orientation="left" stroke="#ffc658"/>
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d"/>
              <Tooltip/>
              <Legend />
              <Bar yAxisId="left" dataKey="kW" fill="#ffc658" />
              <Bar yAxisId="right" dataKey="$" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

}

export default ColumnChart;
