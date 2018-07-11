let arr = [];

const createArrOfObj = (name, phase, gender) => {
  let obj = {
    name : name,
    phase : phase,
    gender : gender,
  };
  return arr.push(obj)
}

createArrOfObj('Akbar', 1, 'male')
createArrOfObj('Icha', 1, 'female')
createArrOfObj('Adhit', 2, 'male')
createArrOfObj('Tama', 2, 'male')
createArrOfObj('Rifky', 3, 'male')

console.log (arr)

const getData = (name) => {
  let obj = {};
  for (let i in arr){
    if (arr[i].name === name){
      return arr[i]
    }
  }
}

console.log(getData('Icha'))