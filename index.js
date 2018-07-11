// RELEASE 0 //
var arr= []
function createObj (name, phase, gender) {

    var detail= {}
    detail.name= name
    detail.phase= phase
    detail.gender= gender

    arr.push(detail)
}

createObj ('Akbar', 1, 'male')
createObj ('Icha', 1, 'female')
createObj ('Adhit', 2, 'male')
createObj ('Tama', 2, 'male')
createObj ('Rifky', 3, 'male')

console.log(arr)


// RELEASE 1 //

function getData (name) {
    for (var i=0; i<arr.length; i++) {
        if (name===arr[i]['name']) {
            return arr[i]
        }
    } 
}

console.log(getData('Icha'))