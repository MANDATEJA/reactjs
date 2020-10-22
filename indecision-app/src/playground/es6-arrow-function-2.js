// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}

console.log(add(55, 1, 1000));

// this keyword - no longer bound in arrow functions

const user = {
  name: 'Teja',
  cities: ['Bangalore', 'Hyd', 'Anantapur'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city );
  }
}

console.log(user.printPlacesLived());

// challenge

const multiplier = {
  numbers: [10, 20, 30, 40, 50],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());