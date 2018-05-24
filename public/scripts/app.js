'use strict';

var square = function square(x) {
    return x * x;
};

// const squareArrow = (x) => {
//     return x * x;
//};


var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log('Square: ', squareArrow(8));

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};
var otherGetFirstNAme = function otherGetFirstNAme(fullName) {
    return fullName.split(' ')[0];
};
console.log('First Name:', getFirstName('Mike Smith'));
console.log('Other First Name: ', otherGetFirstNAme('Gustav Westberg'));
