console.log('Logical Operator');

let myNumber1 = 10;
let myNumber2 = '20';

console.log(typeof myNumber1, typeof myNumber2 );
if(isNaN(myNumber2)){
    console.log('myNumber2 is not a number thus conversion not possible');
    
}
else{
    console.log(myNumber1 + Number(myNumber2) );
}

let myNumber3 = '30';
let myNumber4 = 10;

console.log(typeof myNumber3, typeof myNumber4 );

console.log(myNumber3 - myNumber4);
console.log(myNumber3 * myNumber4);
console.log(myNumber3 / myNumber4);
console.log(Number(myNumber3) + myNumber4);

// Assignement Operator '=', '==', '==='
let myNumber = 50;

myNumber = 60;

// comparision operator, > , <, <=, >= !=, ==, ===

let myNumber6 = 10;
let myNumber7 = 20;

console.log(myNumber6 > myNumber7);
console.log(myNumber6 < myNumber7);

// Logical Operator (&&, ||, !)

console.log(true && false);
console.log(true && true);
console.log(myNumber6 > 0 && myNumber6 > 5);


let myString1 = 'Sachin';
let myString2 = 'Mulkewar';

console.log(myString1 && myString2);


console.log(true || false);
console.log(true || true);
console.log(myNumber6 > 0 || myNumber6 > 5);

console.log(myString1 || myString2);

let isSalaryCredited = false;

console.log('isSalaryCredited', isSalaryCredited);

isSalaryCredited = !isSalaryCredited;

console.log('isSalaryCredited', isSalaryCredited);


// Ternary Operator
let age = 21;
let ageOutput = age < 18 ? 'Too Young':'Old Enough';
console.log(ageOutput);

//----------------------------//
// == it only check for values
// === check for value and type
let number10 = 3;
let number11 = '3';
console.log(typeof number10, typeof number11);
console.log( number10,  number11);
console.log(number10 == number11);
console.log(number10 === number11);


console.log('Sachin'== 'sachin');
console.log('Sachin'=== 'sachin');

// null vs undefined

let myString10 = null;
let mystring11;

console.log(typeof myString10, typeof mystring11);
console.log( myString10 ==  mystring11);
console.log( myString10 ===  mystring11);





