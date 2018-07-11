// release 0
var arr =[]
function createObj (name,phase,gender){
    arr.push({name,phase,gender})
}

createObj('Akbar',1,'male')
createObj('Icha',1,'female')
createObj('Adhit',2,'male')
createObj('Tama',2,'male')
createObj('Rifky',3,'male')

// console.log(arr)

// release 1
function getData (name){
    for (var i=0 ; i < arr.length ; i++){
        if (arr[i].name == name){
            return arr[i]
        }
    }
}

console.log(getData('Akbar'))
console.log(getData('Icha'))
console.log(getData('Adhit'))