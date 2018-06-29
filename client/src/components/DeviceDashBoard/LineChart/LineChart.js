import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import moment from 'moment'

class SimpleLineChart extends Component {
  constructor(props){
    super(props);
      this.state={
        data: [
              {name: 'Page A', uv: 4000, pv: 2400},
              {name: 'Page B', uv: 3000, pv: 1398},
              {name: 'Page C', uv: 2000, pv: 9800},
              {name: 'Page D', uv: 2780, pv: 3908},
              {name: 'Page E', uv: 1890, pv: 4800},
              {name: 'Page F', uv: 2390, pv: 3800},
              {name: 'Page G', uv: 3490, pv: 4300}]
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
          <LineChart width={585} height={283} data={data} margin={{top: 20, right: 30, left: 10, bottom: 10}}>
           <XAxis dataKey="name"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line type="monotone" dataKey="pv" stroke="#ff9d0c" activeDot={{r: 5}} strokeWidth={2}/>
           <Line type="monotone" dataKey="uv" stroke="#6e0081" activeDot={{r: 5}} strokeWidth={2}/>
          </LineChart>
        </div>
      </div>
    );
  }

}

export default SimpleLineChart;
