var arr = [];

function createObj(name, phase, gender) {
    arr.push({name: name, phase: phase, gender: gender});
}

function getDataByName(name) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].name === name)
            return arr[i];
    }
    return -1;
}

createObj('Ali', 1, 'male')
createObj('Budi', 2, 'male')
createObj('Ana', 3, 'female')

console.log(arr);
console.log(getDataByName('Ali'));
console.log(getDataByName('Ana'));
console.log(getDataByName('Dimas'));