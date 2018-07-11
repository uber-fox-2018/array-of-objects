var arr = []

function createObj (name, phase, gender) {
    let res = {
        name: name,
        phase: phase,
        gender: gender,
    }
    return arr.push(res)
}

createObj('Udin', 1, 'male')
createObj('Udin', 2, 'male')
createObj('Unid', 1, 'male')
createObj('Duni', 3, 'female')
createObj('Nidu', 7, 'female')
createObj('Icha', 1, 'female')

// console.log(arr)

function getData(name) {
    let res = []

    // loop untuk mencari nama yg sesuai dari keinginan user pada data `arr`
    for (let i = 0; i < arr.length; i++) {
        if (name.toLowerCase() === arr[i].name.toLowerCase()) {
            res.push(arr[i])
        }
    }
    // kondisi dimana nama tidak ditemukan
    if (res.length === 0) {
        return 'Hasil untuk pencarian untuk nama ' + '"'+ name +'"' + ' tidak ditemukan'
    }
    // format informasi untuk jumlah data yg ditemukan 
    let str = 'Ditemukan sebanyak ' + res.length + ' Data untuk pencarian dengan nama '+ '"'+ name +'"'

    // mendisplay format informasi
    console.log(str)
    return res
}

console.log(getData('Icha'))