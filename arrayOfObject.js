var arr =[]
function createObj (name, phase, gender){
	obj = {}
	obj.name = name
	obj.phase = phase
	obj.gender = gender
	arr.push(obj)
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

function getData(name){
	for (var i = 0 ; i < arr.length ; i++){
		if (arr[i].name === name){
			return arr[i]
		}
	}
	return 'Not Found'
}

console.log(getData('Icha'))
console.log(getData('Rifky'))
console.log(getData('Dummy'))