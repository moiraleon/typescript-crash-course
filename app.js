"use strict";
var calcSum = function (first, second, third) {
    return first + second;
};
calcSum(2, 2);
var arrString = ['a', 'b', 'c'];
var arrNum = [1, 2, 3];
var arrBool = [true, false];
//union of types
var arrMix = [1, 'a', true];
arrMix[0] = 'b';
arrMix.push(true);
arrMix.push(5);
var mixArr = [1, 'a', true];
//tuples allow us to specify certain types as certain spots in an array does not use |
var arrTup = ['a string', 5]; //types is being defined inside the array  
//objects 
var person = {
    name: 'Jesse',
    age: 25
};
//person.age = 'string'; incompatible 
person.age = 30;
var year;
year = 2021;
year = '2021';
//
function calculateSum(a, b) {
    return a + b;
}
var calcSum2;
//adding a third and optional parameter can simply be marked with a ?
calcSum2 = function (first, second, third) {
    return first + second;
};
calcSum2(2, 2);
//or
calcSum2(2, 2, 2);
var mike = {
    name: 'mike',
    age: 34
};
//classes - we can also have classes implement interfaces
var Person = /** @class */ (function () {
    //we always need to add a constructor to a class
    function Person(n, a) {
        this.name = n;
        this.age = a;
    }
    Person.prototype.greet = function () {
        return "Hi my name is " + this.name + " and I am " + this.age;
    };
    return Person;
}());
//creating a new instance of the class 
// let john = new Person('John', 35);
//applying the method to an instance
// console.log(john.greet());
//access modifiers
//if we add private before  name:string; in the person class than that method of getting the name will only be accessible in the class but without it we can call john.age or john.name
//writing the code cleaner
// class Person implements PersonInterface{
// constructor(public name :string, public age:number){
// }
// greet(){
//     return `Hi my name is ${this.name} and I am ${this.age}`
// }
// }
//Dom Manipulation and type casting
var inputName = document.querySelector('#name'); //needs to know what type of input it will be this is referred to as type casting
var inputAge = document.querySelector('#age');
var inputForm = document.querySelector('form');
var greeting = document.querySelector('.greeting');
//creating a new instance of the class 
// let john = new Person('John', 35);
//applying the method to an instance
// console.log(john.greet()); these are commented out to allow us to take these inputs from the front end
// inputForm?.addEventListener('submit',()=>{ question mark is added in case it is null so we can place a ! instead of a type cast to let our code know it will not be null
// })
inputForm.addEventListener('submit', function (e) {
    e.preventDefault(); //default behavior when submitting a form is to refresh the page so this will prevent that
    // const person = new Person( inputName.value, inputAge.value)//inputAge as it comes in from the form is retrieved as a string so we need to convert it to a number or grab it as a number even though it is of number type in html
    // })
    var person = new Person(inputName.value, inputAge.valueAsNumber);
    //add greeting to form submission as of now it wont add innerText because we do not have duv value cast
    greeting.innerText = person.greet();
    inputForm.reset();
});
//quick tips - instead of running tsc each time you want to re run your file run tsc -w to have the tsc files watched and auto compiled each time you save the tsc file
