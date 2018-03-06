//arguments object - no longer bound with arrow functions - undefined
const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}

console.log(add(55, 1));

//this keyword - no longer bound with arrow functions
const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
console.log(user.printPlacesLived());


//Challenge Area
const multiplier = {
  //numbers - array of numbers
  numbers: ['10','20','30'],
  //multiplyBy - single number
  multiplyBy: 3,
  //multiply - new array where numbers have been multiplied using map
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply());
