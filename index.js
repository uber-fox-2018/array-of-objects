// var arr = [
//     {
//         item: 'Book',
//         quantity: 120
//     },
//     {
//         item: 'Pencil',
//         quantity: 380
//     },
//     {
//         item: 'Eraser',
//         quantity: 24
//     },
// ];

var arr = [];
function createObj(name, phase, gender) {
    var obj = {
        name: name,
        phase: phase,
        gender: gender
    };
    arr.push(obj);
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Asrul', 1, 'male');
createObj('Dimas', 1, 'male');

function getData(name) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].name == name) {
            return arr[i];
        }
    }
}

console.log(getData('Icha'));