var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
//Cannot redefine variables with let in es6
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst)

function getPetName() {
  var petName = 'Hal';
  return petName;
}

const petName = getPetName();
console.log(petName);

//Block Scoping

var fullName = 'Andrew Mead';
let firstName;
//var is function scoped, let and const are block scoped
//Define with let above code block so it can be accessed

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}
//cant access this log outside code block if statement
console.log(firstName)
