// buat sebuah variabel yang merupakan array kosong, kemudian buat function yang menerima 3 parameter, dan membentuk array of IDBObjectStore

var arr = []
function createObj (name, phase, gender){
    var obj = {
        name: name,
        phase: phase,
        gender: gender,
    }
    return arr.push(obj)
}
createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

// console.log(arr)

// [ 
//     { 
//         name: 'Akbar', 
//         phase: 1, 
//         gender: 'male' 
//     },
//     { 
//         name: 'Icha', 
//         phase: 1, 
//         gender: 'female' 
//     },
//     { 
//         name: 'Adhit', 
//         phase: 2, 
//         gender: 'male' 
//     },
//     { 
//         name: 'Tama', 
//         phase: 2, 
//         gender: 'male' 
//     },
//     { 
//         name: 'Rifky', 
//         phase: 3, 
//         gender: 'male' 
//     } 
// ]

function getData(name){
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i].name === name){
            return arr[i]
        }
    }
}
console.log(getData('Icha')) // { name: 'Icha', phase: 1, gender: 'female' }
