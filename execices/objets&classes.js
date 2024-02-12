//task 1
let person = {
    firstname: "chaymae", 
    lastname: "farkouchi",   
    age: 25,            

    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    },

    set fullname(name) {
        
        let firstName = "";
        let lastName = "";
        let isFirstName = false;

        for (let char of name) {
            if (char === ' ') {
                isFirstName = true;
            } else if (isFirstName) {
                lastName += char;
            } else {
                firstName += char;
            }
        }

        this.firstname = firstName;
        this.lastname = lastName;
    }
};

console.log("Fullname1:", person.fullname);
person.fullname = "yassmine farkouchi";
console.log("Fullname2:", person.fullname);

//task2
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(otherPerson) {
        if (this.age < otherPerson.age) {
            return `${otherPerson.name} is older than me.`;
        } else if (this.age > otherPerson.age) {
            return `${otherPerson.name} is younger than me.`;
        } else {
            return `${otherPerson.name} is the same age as me.`;
        }
    }
}

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2)); 
console.log(p2.compareAge(p1)); 
console.log(p1.compareAge(p3)); 
 
//task3


