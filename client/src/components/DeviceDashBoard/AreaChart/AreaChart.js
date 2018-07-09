import React, { Component } from 'react';
import {ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import moment from 'moment'
import values from '../potencia2.json'

class SimpleAreaChart extends Component {
  constructor(props){
    super(props);
      this.state = {
        values: []
      }
  }

  componentDidMount(){
    this.delayValues()
  }

  delayState() {
    setInterval(async() => {
      const values = this.state.values;
      const value = values.slice(-1);
      const valueTime = moment(value[0].time, "HH:mm:ss").add(3,'seconds').format("HH:mm:ss")
      values.push({time: valueTime, value: Math.floor((Math.random() * 0.035) + 0.0020)})
      this.setState({values: values})
    }, 3000);
  }

  delayValues = async () =>{
    try{
      const items = values;
      const initialValues = await this.getInitialValues(items)
      //console.log(initialValues);
      await this.setState({
        values: initialValues
      })
      this.delayState()
    }catch(e){
      console.log(e);
    }
  }

  getInitialValues = async (items)=>{
    try{
      const format = "HH:mm:ss"
      const start = moment("00:00:00",format)
      const now = moment().format('HH:mm:ss')
      const end = moment(now, format)
      const newData = []
      await items.forEach((item)=>{
        const itemTime = moment(item.time).format("HH:mm:ss");
        if(moment(itemTime,format).isBetween(start,end)){
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

  delayNewValue = (items) =>{
    setInterval(async ()=>{
      const values = this.state.values;
      const value = values.slice(-1);
      const valueTime = await moment(value[0].time, "HH:mm:ss").add(3,'seconds').format("HH:mm:ss")
      const filterItem = await items.filter((item) =>{ return moment(item.time).format("HH:mm:ss") === valueTime })
      if(filterItem[0]){
        const newItem = {
          time: valueTime,
          value: filterItem[0].value
        }
        values.push(newItem)
        console.log(newItem);
        this.setState({values: values})
      }
    },1000)
  }


  render() {
    const data = this.state.values;
    return (
      <div className="LineChartContainer">
        <div className="ConsumoActualTitle">
          <h6>Potencia Actual</h6>
        </div>
        <div className="ConsumoActualBody">
          <ResponsiveContainer width="100%" height="100%" minHeight={283}>
            <AreaChart data={data.slice()} margin={{top: 20, right: 30, left: 0, bottom: 0}}>
              <CartesianGrid strokeDasharray="1 1"/>
              <XAxis dataKey="time"/>
              <YAxis/>
              <Tooltip/>
              <Area
                type='monotone'
                dataKey='value'
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
