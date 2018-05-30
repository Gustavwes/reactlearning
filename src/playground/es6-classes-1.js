
class Person {
    constructor(name = 'Anonymous', age = 0) { //this syntax means if no name is provided the default is 'No Name'
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi! I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}


class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}`
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGreeting() {
        let getGreeting = super.getGreeting();
        if(this.hasHomeLocation()){
            getGreeting += ` I'm visiting from Göteborg`;
        }
        return getGreeting;
    }
}

const traveller = new Traveller('Some hippe', 25, 'Wakanda');
console.log(traveller.getGreeting());


const me = new Person('Kratli Trufen', 28);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Student();
console.log(other.getGreeting());
console.log(other.getDescription());

const student1 = new Student('Gustav Westberg', 24, 'Programming')
console.log(student1.getDescription());

