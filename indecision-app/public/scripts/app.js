'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
  // console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 1000));

// this keyword - no longer bound in arrow functions

var user = {
  name: 'Teja',
  cities: ['Bangalore', 'Hyd', 'Anantapur'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};

console.log(user.printPlacesLived());

// challenge

var multiplier = {
  numbers: [10, 20, 30, 40, 50],
  multiplyBy: 5,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
