var nameVar = 'Teja';
var nameVar = 'Miller';
console.log('nameVar', nameVar);

let nameLet = 'Jessie';
nameLet = 'Rachel'
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);


// Block scoped - let, const

//Function scoped - var

var fullName = 'Teja Manda';

if (fullName) {
  var firstName = fullName.split(' ')[0];
  console.log(firstName)
}

console.log(firstName)

function getPetName() {
  let petName = 'Hal';
  return petName;
}

const petName = getPetName();
console.log(petName)