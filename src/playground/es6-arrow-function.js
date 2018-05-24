const square = function(x){
    return x * x;
};

// const squareArrow = (x) => {
//     return x * x;
//};


const squareArrow = (x) =>  x * x;

console.log('Square: ', squareArrow(8));


const getFirstName = (fullName) => fullName.split(' ')[0];
const otherGetFirstNAme = (fullName) => {
    return fullName.split(' ')[0];
}
console.log('First Name:', getFirstName('Mike Smith'));
console.log('Other First Name: ', otherGetFirstNAme('Gustav Westberg'));

