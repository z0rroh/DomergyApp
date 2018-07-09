var fs = require('fs')


const transformFunc = async ()=> {
  const data = await fs.readFileSync('./potencia.json', 'utf8')
  const obj = JSON.parse(data)
  const objJson = await dataToJson(obj);
  const saved = await fs.writeFile('potencia2.json', objJson, 'utf8');
  console.log("complete",saved);
}

const dataToJson = async (obj)=>{
  const columns = obj.results[0].series[0].columns
  const valuesArr = obj.results[0].series[0].values

  let keys = columns;
  let values = valuesArr;

  let objects = values.map(array => {
    let object = {};
    keys.forEach((key, i) => object[key] = array[i]);
    return object;
  });
  let json = JSON.stringify(objects);
  return json;
}

transformFunc()
