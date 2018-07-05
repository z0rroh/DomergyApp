import React, { Component } from 'react';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import moment from 'moment'
import values from '../consumodiario2.json'

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
      ],
      values: []
    }
  }

  componentDidMount(){
    //this.delayState();
    this.delayValues();
  }

  delayValues = async () =>{
    try{
      const items = values;
      const initialValues = await this.getInitialValues(items)
      console.log(initialValues);
      await this.setState({
        values: initialValues
      })
    }catch(e){
      console.log(e);
    }
  }

  getInitialValues = async (items)=>{
    try{
      const barsValues = []
      const end = moment().format('HH')
      for(var i = 0; i<=end; i++){
        const arr = [];
        if(i < 10){
          if(i === 9){
            items.forEach((item)=>{
              const itemTime = moment(item.time).format("HH:mm:ss");
              if(itemTime >= '0'+i+':00:00' && itemTime < (i+1)+":00:00"){
                arr.push(item.value);
              }
            })
            const max = Math.max.apply(Math, arr);
            const newBar = {
              time: '0'+i+':00:00',
              kWh: max,
              $: max*97
            }
            barsValues.push(newBar);
          }else{
            items.forEach((item)=>{
              const itemTime = moment(item.time).format("HH:mm:ss");
              if(itemTime >= '0'+i+':00:00' && itemTime < "0"+(i+1)+":00:00"){
                arr.push(item.value);
              }
            })
            const max = Math.max.apply(Math, arr);
            const newBar = {
              time: '0'+i+':00:00',
              kWh: max,
              $: max*97
            }
            barsValues.push(newBar);
          }
        }
        else{
          items.forEach((item)=>{
            const itemTime = moment(item.time).format("HH:mm:ss");
            if(itemTime >= i+':00:00' && itemTime < (i+1)+":00:00"){
              arr.push(item.value);
            }
          })
          const max = Math.max.apply(Math, arr);
          const newBar = {
            time: i+':00:00',
            kWh: max,
            $: max*97
          }
          barsValues.push(newBar);
        }
      }
      return barsValues
    }catch(e){
      console.log(e);
    }
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
    const data = this.state.values;
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
              <Tooltip/>
              <Legend />
              <Bar yAxisId="left" dataKey="kWh" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

}

export default ColumnChart;
