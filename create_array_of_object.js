var arr = []

function createObj(name, phase, gender) {
    let objPerson = {
        name, phase, gender
    }
    arr.push(objPerson)
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 1, 'male')
createObj('Tama', 1, 'male')
createObj('Rifky', 1, 'make')

function getData(name) {
    // arr adalah hasil dari function creatObj
    let data_person = arr
    let result = {}
    for(let person of data_person){
        if (person.name == name) result = person
    }
    return result
}

console.log(arr);

console.log(getData('Icha'));
console.log(getData('Rifky'));