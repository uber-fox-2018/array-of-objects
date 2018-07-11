var arr = []
function createObj(name, phase, gender) {
    var obj = {
        name : name,
        phase : phase,
        gender : gender
    }
    // obj.name =  name
    // obj.phase = phase
    // obj.gender = gender
    arr.push(obj)
}

createObj('akbar',1,'male')
createObj('icha',1,'female')
createObj('adhit',2,'male')
createObj('tama',2,'male')
createObj('rifki',3,'male')

console.log(arr);

function getData(name){
    for(var i = 0; i < arr.length;i++){
        if(arr[i].name === name){
            return arr[i]
        }
    }
}

console.log(getData('icha'));


