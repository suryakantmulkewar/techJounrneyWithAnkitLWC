console.log('Variable Declaration');

// Let
// Let keyword can be updated
// let keyword can not be redeclared

let myName = 'Sachin';

console.log('MyName', myName);

// Let keyword can be updated

myName = 'Sachin Mulkewar';

console.log('MyName', myName);

//let myName = 'Sachin';

//Const
// const keyword can not be updated
//const can not be redeclared

const myLastName = 'Mulkewar';

console.log('LastName = ', myLastName);

//myLastName = 'S Mulkeawr';

const myObject = {
    fname : 'Suryakant',
    lname : 'Mulkewar'
}

console.log(myObject);

myObject.fname = 'Sachin';

console.log(myObject);


// myObject = {
//     fname : 'Sachin M',
//     lname : 'Mulkewar'
// }


// var
// can be reassigned
// can be redeclared
// bad practise to use var

var bootcamp = 'LWC';

console.log('Bootcamp', bootcamp);

// can be reassigned
bootcamp = 'LWC Day 3';
console.log('Bootcamp', bootcamp);

// can be redeclared
var bootcamp = 'Bootcamp LWC Day 3';

console.log('Bootcamp', bootcamp);

console.log(window.bootcamp);
