var array = [];
function createObj (name, phase, gender) {

    array.push({
        name: name,
        phase: phase,
        gender: gender
    })

}

createObj('Akbar', 1, 'Male');
createObj('Icha', 1, 'Female');
createObj('Adhit', 2, 'Male');
createObj('Tama', 2, 'Male');
createObj('Rifky', 3, 'Male');

console.log(array);

function getData(name) {
    
    for(var i=0; i<array.length; i++){
        if(array[i].name === name) {
            return array[i]
        }
    }

}

console.log(getData('Icha'));