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