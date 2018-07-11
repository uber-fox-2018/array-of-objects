var arr = [];

function createObj (name, phase, gender) {
  var result = [];
  var obj = {
    name : name,
    phase : phase,
    gender : gender,
  };
  arr.push(obj);
}


createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

console.log(arr);

function getData(name) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]['name'] === 'Icha') {
      return arr[i];
    }
  }
}

console.log(getData('Icha'));
