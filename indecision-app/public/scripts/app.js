'use strict';

var square = function square(x) {
  return x * x;
};

console.log(square(3));

var squareArrow = function squareArrow(x) {
  return x * x;
};

console.log(squareArrow(6));

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// }

var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));
