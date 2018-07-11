var arr =[];
function createObj(name,phase,gender){
    let obj = {
        name:name,
        phase:phase,
        gender:gender
    };
    arr.push(obj)
}

function getData(name){
    let result;
    for(let i=0 ; i<arr.length-1; i++){
        // console.log(arr[i])
        let objData = arr[i];
        // console.log(objData.name)
        if(objData.name === name){
            result = objData
        }
    }
    return result
}

createObj('Akbar',1,'male')
createObj('Icha',1,'female')
createObj('Adhit',2,'male')
createObj('Tama',2,'male')
createObj('Rifky',3,'male')

console.log(arr)
console.log(getData('Icha'))