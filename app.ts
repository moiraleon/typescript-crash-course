let calcSum = (first: number, second:number, third?:number)=>{
    return first+second;
};

calcSum(2,2)



let arrString: string[] = ['a','b','c'];
let arrNum: number[] = [1,2,3];
let arrBool: boolean[]=[true,false];


//union of types
let arrMix: (string|number|boolean)[] = [1,'a',true];
arrMix[0]='b';
arrMix.push(true);
arrMix.push(5);

let mixArr = [1,'a', true];

//tuples allow us to specify certain types as certain spots in an array does not use |

let arrTup: [string, number] = ['a string', 5]; //types is being defined inside the array  

//objects 
let person ={
    name:'Jesse',
    age: 25
}

//person.age = 'string'; incompatible 
person.age = 30;


//creating custom types for a project

type stringOrNum = string | number; //this can be reused as often as you would like
let year: stringOrNum;
 year = 2021;
 year = '2021';

 //

 function calculateSum(a:number, b:number):number{
     return a+b;
 }

 let calcSum2: (a:number, b:number, c?:number)=> number;
//adding a third and optional parameter can simply be marked with a ?
calcSum2 =(first:number, second:number, third?:number)=>{ //if you add a ? to a value be sure to add it to the last parameter
    return first+second;
}
calcSum2(2,2);
//or
calcSum2(2,2,2);

//interfaces

interface PersonInterface{
    name:string;
    age:number;
}

let mike: PersonInterface ={  //the interface verifies the types and guidelines are met 
    name:'mike',
    age: 34
}

//classes - we can also have classes implement interfaces

class Person implements PersonInterface{
    name:string;
    age:number;

//we always need to add a constructor to a class

constructor(n:string,a:number){
    this.name =n;
    this.age =a;
}

greet(){
    return `Hi my name is ${this.name} and I am ${this.age}`
}

}

//creating a new instance of the class 
let john = new Person('John', 35);

//applying the method to an instance
console.log(john.greet());