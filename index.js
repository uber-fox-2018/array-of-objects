var arr = []
const createObj =  (name, phase, gender) => {
  let obj = {
    name: name,
    phase: phase,
    gender: gender
  }
  arr.push(obj)
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Rifki', 1, 'male')
// console.log(arr);

const getData = (name) => {
  for (let key in arr) {
    if (arr[key].name === name) {
      return arr[key]
    } 
  } 
  return 'Data tidak ditemukan!'
}
console.log('Get Data');
console.log(getData('Icha'))
console.log(getData('Akbar'))
console.log(getData('Ari'))
