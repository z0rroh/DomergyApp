import React, { Component } from 'react';
import {ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import moment from 'moment'
import values from '../consumodiario2.json'

class SimpleAreaChart extends Component {
  constructor(props){
    super(props);
      this.state = {
        values: [],
        data: [
          {name: 'A', uv: 700},
          {name: 'B', uv: 3000},
          {name: 'C', uv: 2000},
          {name: 'D', uv: 2780},
          {name: 'E', uv: 1890},
          {name: 'F', uv: 2390},
          {name: 'G', uv: 3490}
        ]
      }
  }

  componentDidMount(){
    this.delayState()
    //this.delayValues()
  }

  delayState() {
    setInterval(() => {
      const newData = this.state.data;
      newData.splice(0,1);
      newData.push({name: moment(new Date()).format('HH:mm:ss'), uv: Math.floor((Math.random() * 1000) + 800)})
      this.setState({data: newData})
    }, 1000);
  }

  delayNewValue = (items) =>{
    const values = this.state.values;
    const value = values.slice(-1);
    const valueTime = moment(value[0].time,'HH:mm:ss').add(10,'seconds')
    console.log(value[0].time,valueTime);
    const timeNow = moment().format('HH:mm:ss');
    const item = items.find(item => {return moment(item.time).format("HH:mm:ss") === "00:00:00"});
    const newItem = {
      time: moment(item.time).format("HH:mm:ss"),
      value: item.value
    }
  }
  delayValues = async () =>{
    try{
      const items = values;
      const initialValues = await this.getInitialValues(items)
      console.log(initialValues);
      await this.setState({
        values: initialValues
      })
      this.delayNewValue(items);
    }catch(e){
      console.log(e);
    }
  }

  getInitialValues = async (items)=>{
    try{
      const start = "00:00:00"
      const end = moment().format('HH:mm:ss')
      const newData = []
      await items.forEach((item)=>{
        const itemTime = moment(item.time).format("HH:mm:ss");
        if(itemTime >= start && itemTime <= end){
          var newItem = {
            time: itemTime,
            value: item.value
          }
          newData.push(newItem)
        }
      })
      return newData
    }catch(e){
      console.log(e);
    }
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
              <CartesianGrid strokeDasharray="1 1"/>
              <XAxis dataKey="name"/>
              <YAxis/>
              <Tooltip/>
              <Area
                type='monotone'
                dataKey='uv'
                stroke='#82ca9d'
                fill='#82ca9d' />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

}

export default SimpleAreaChart;
