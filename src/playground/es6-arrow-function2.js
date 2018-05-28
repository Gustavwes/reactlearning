//arguments object - no longer bount with arrow functions

const add = (a, b) => {
    return a + b;
}
console.log(add(55, 1, 1001));


//this keyword - no longer bound with arrow functions

const user = {
    name: 'Gustav',
    cities: ['Stockholm', 'London', 'New York'],
    printPlacesLived() {
        return this.cities.map((city) =>  this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

//challenges

const multiplier = {
     numbers: [1,5,20],
     multiplyBy(number) {
         return this.numbers.map((arrayNumber) => arrayNumber*number);
     }
}

console.log(multiplier.multiplyBy(2));