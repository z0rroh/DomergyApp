import React, { Component } from 'react';
import {ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import moment from 'moment'

class SimpleAreaChart extends Component {
  constructor(props){
    super(props);
      this.state={
        data: [
              {name: 'A', uv: 700},
              {name: 'B', uv: 3000},
              {name: 'C', uv: 2000},
              {name: 'D', uv: 2780},
              {name: 'E', uv: 1890},
              {name: 'F', uv: 2390},
              {name: 'G', uv: 3490}]
      }
  }

  componentDidMount(){
    this.delayState()
  }

  delayState() {
    setInterval(() => {
      const newData = this.state.data;
      newData.splice(0,1);
      newData.push({name: moment(new Date()).format('HH:mm:ss'), uv: Math.floor((Math.random() * 1000) + 800)})
      this.setState({data: newData})
    }, 1000);
  }


  render() {
    const data = this.state.data;
    return (
      <div className="LineChartContainer">
        <div className="ConsumoActualTitle">
          <h6>Potencia Actual</h6>
        </div>
        <div className="ConsumoActualBody">
          <ResponsiveContainer width="100%" height="100%" minHeight={283}>
            <AreaChart data={data.slice()} margin={{top: 20, right: 30, left: 0, bottom: 0}}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="name"/>
              <YAxis/>
              <Tooltip/>
              <Area type='monotone' dataKey='uv' stroke='#82ca9d' fill='#82ca9d' />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

}

export default SimpleAreaChart;
