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
var john = new Person('John', 35);
//applying the method to an instance
console.log(john.greet());
