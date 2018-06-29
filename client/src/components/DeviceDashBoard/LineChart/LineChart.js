import React, { Component } from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import moment from 'moment'

class SimpleLineChart extends Component {
  constructor(props){
    super(props);
      this.state={
        data: [
          {name: 'A', pv: 1000, uv: 100},
          {name: 'B', pv: 1110, uv: 510},
          {name: 'C', pv: 1120, uv: 520},
          {name: 'D', pv: 1130, uv: 530},
          {name: 'E', pv: 1140, uv: 540},
          {name: 'F', pv: 1150, uv: 550},
          {name: 'G', pv: 1160, uv: 560},
        ]

      }
  }

  componentDidMount(){
    this.delayState()
  }

  delayState() {
    setInterval(() => {
      const newData = this.state.data;
      newData.splice(0,1);
      newData.push({name: moment(new Date()).format('HH:mm:ss'), uv: Math.floor((Math.random() * 1000) + 100), pv: Math.floor((Math.random() * 1000) + 100), amt: 2309})
      this.setState({data: newData})
    }, 1000);
  }


  render() {
    const data = this.state.data;
    return (
      <div className="LineChartContainer">
        <div className="ConsumoActualTitle">
          <h6>Generación Actual</h6>
        </div>
        <div className="ConsumoActualBody">
          <ResponsiveContainer width="100%" height="100%" minHeight={283}>
            <LineChart data={data} margin={{top: 20, right: 30, left: 10, bottom: 10}}>
             <XAxis dataKey="name"/>
             <YAxis/>
             <CartesianGrid strokeDasharray="3 3"/>
             <Tooltip/>
             <Legend />
             <Line type="monotone" dataKey="pv" stroke="#ff9d0c" activeDot={{r: 5}} strokeWidth={2}/>
             <Line type="monotone" dataKey="uv" stroke="#6e0081" activeDot={{r: 5}} strokeWidth={2}/>
            </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
    );
  }

}

export default SimpleLineChart;
