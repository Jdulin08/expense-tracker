'use strict';

//arguments object - no longer bound with arrow functions - undefined
var add = function add(a, b) {
  // console.log(arguments);
  return a + b;
};

console.log(add(55, 1));

//this keyword - no longer bound with arrow functions
var user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};
console.log(user.printPlacesLived());

//Challenge Area
var multiplier = {
  //numbers - array of numbers
  numbers: ['10', '20', '30'],
  //multiplyBy - single number
  multiplyBy: 3,
  //multiply - new array where numbers have been multiplied using map
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};
console.log(multiplier.multiply());
