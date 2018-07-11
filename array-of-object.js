// release 0
var arr = []
function createObj (name, phase, gender) {

    var student = {
        name : name,
        phase : phase,
        gender : gender,
    }

    arr.push(student)
}
createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

// console.log(arr) // untuk melihat list object dalam array

// release 1
function getData (name) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name === name){
            return arr[i]
        }
    }
}

console.log(getData('Icha'))
console.log(getData('Tama'))