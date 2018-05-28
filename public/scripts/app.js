'use strict';

//arguments object - no longer bount with arrow functions

var add = function add(a, b) {
    return a + b;
};
console.log(add(55, 1, 1001));

//this keyword - no longer bound with arrow functions

var user = {
    name: 'Gustav',
    cities: ['Stockholm', 'London', 'New York'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

//challenges

var multiplier = {
    numbers: [1, 5, 20],
    multiplyBy: function multiplyBy(number) {
        return this.numbers.map(function (arrayNumber) {
            return arrayNumber * number;
        });
    }
};

console.log(multiplier.multiplyBy(2));
