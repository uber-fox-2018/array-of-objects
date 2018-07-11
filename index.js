var arr = []

function createObj(name, phase, gender) {
    var obj = {}
    obj.name = name,
        obj.phase = phase,
        obj.gender = gender

    arr.push(obj)
    return arr

}

createObj('akbar', 1, 'male')
createObj('icha', 1, 'female')
createObj('adhit', 2, 'male')
createObj('tama', 2, 'female')
createObj('rifky', 3, 'male')

// console.log(arr)

function getData(name) {


    for (let j = 0; j < arr.length; j++) {

        if (name === arr[j].name) {

            return arr[j]
        }
    }
}

console.log(getData('icha'))