var nameVar = 'Gustav';
var nameVar = 'TestGus';
console.log('nameVar:', nameVar);


let nameLet = 'Gustavlet';
nameLet = 'New Gust';
console.log('nameLet:', nameLet);

const nameConst = "GutavConst";
//nameConst = "NewConst";
console.log('nameConst', nameConst)

const fullName = 'Andrew Mead';
let firstName;
if(fullName){
   firstName = fullName.split(' ')[0];
}
console.log(firstName)
