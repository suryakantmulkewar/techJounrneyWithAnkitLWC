console.log('Destructuring in JS');
let myFavFruits = ['Apple', 'Cherry', 'Banana', 'Guava'];

// let myFavFruits1 = myFavFruits[0];
// let myFavFruits2 = myFavFruits[1];
// let myFavFruits3 = myFavFruits[3];

let [myFavFruits1, , ,  myFavFruits3] = myFavFruits;

console.log('myFavFruits1', myFavFruits1);
// console.log('myFavFruits2', myFavFruits2);
console.log('myFavFruits3', myFavFruits3);

let [favFruit1, favFruit2, ...rest] = myFavFruits;

console.log('favFruit1', favFruit1);
console.log('favFruit2', favFruit2);
console.log('rest', rest);


// Destructuring on Objects

let myDetails = {
    fname : 'Sachin',
    lname : 'Mulkewar',
    age : 30
};

let {fname: firstName, age} = myDetails;

console.log('fname',  firstName);
// console.log('lname',  lname);
console.log('age',  age);

let myString = 'Sachin';

let myCharArray = [...myString];

console.log(myCharArray);

//----------------//

console.log('String Interpolation');

let string1 = 'my name is';
let string2 = 'Sachin';
let string3 = 'I stay in';
let string4 = 'Pune';

let finalString = `my name is ${string2}. I stay in ${string4}`;

console.log(finalString);
