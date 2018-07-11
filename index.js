let hasil = []
function createObj(name,phase,gender){

    let obj = 
        {
            name:name,
            phase:phase,
            gender:gender
        }
    
    hasil.push(obj)
    return hasil
}
createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Tama', 1, 'male')

function getData(name) {

    for(let i = 0; i < hasil.length; i++){
        if(hasil[i].name === name){
            return hasil[i]
        }
    }

}
console.log(getData('Icha'))