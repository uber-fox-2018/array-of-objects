var arr = []

function createObj(name, phase, gender) {
    let obj = {
        name: name,
        phase: phase,
        gender: gender
    }
    return arr.push(obj)
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Andre', 2, 'male')
createObj('Laurent', 1, 'female')
createObj('Kiko', 3, 'female')

console.log(arr)

function getData(input) {
    for (let i in arr) {
        if (arr[i].name == input) {
            return arr[i]
        }
    }
}

console.log(getData('Icha'))
console.log(getData('Andre'))
console.log(getData('Laurent'))
