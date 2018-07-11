let arr = []

function createObj(name, phase, gender) {
  let obj = {
    name: name,
    phase:phase,
    gender:gender
  }
  arr.push(obj)
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')
// console.log(arr);

function getData(name) {
  arr.forEach(data => {
    if(data.name === name) {
      console.log(data);
    }
  })
  return ''
}

console.log(getData('Akbar'));