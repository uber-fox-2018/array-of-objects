var arr = []

function createObj(name,phase,gender) {
    let obj = {
        name: name,
        phase: phase,
        gender: gender,
    }
    arr.push(obj)

    return arr
}

createObj('Akbar',1,'male')
createObj('Icha',1,'female')

function getData(name) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
            return arr[i]
        } 
    }
}

console.log(getData('Icha'));



