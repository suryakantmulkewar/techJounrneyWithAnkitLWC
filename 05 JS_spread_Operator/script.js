console.log('Spread Operator');
let numberOne = [1, 2, 3];
let numberTwo = [4, 5, 6];

// concatenation of array
let combinedArray = [...numberOne, ...numberTwo];
console.log('numberOne',  numberOne);
console.log('numberTwo',  numberTwo);
console.log( 'combinedArray', combinedArray);


// Expand the string

let myName = 'My Name is Suryakant';
console.log(myName);
console.log(...myName);

// Add elements in array

// numberOne = [...numberOne, 10, 11, 12];
numberOne = [ 10, 11, 12, ...numberOne, 21, 22, 23];
console.log('numberOne', numberOne);

// Adding the Object

let myObj1 = {
    "fname" : 'Suryakant', 
    "skills" : ['JS', 'Apex', 'Trigger', 'Admin']
}

let myObj2 = {
    "fname" : 'Sachin', 
    "country" : 'India'
}

let finalObject = {...myObj1, ...myObj2};

console.log( 'finalObject' , finalObject);


// copy of an Array and Object
let myfavFruits = ['Apple', 'Grapes', 'Banana'];
// let myfavFruitsCopy = myfavFruits; // deep copy
let myfavFruitsCopy = [...myfavFruits]; // shallow copy
console.log('myfavFruits', myfavFruits);
console.log('myfavFruitsCopy', myfavFruitsCopy);

myfavFruitsCopy.push('cheerry');
console.log('myfavFruitsCopy', myfavFruitsCopy);
console.log('myfavFruits', myfavFruits); // deep copy -- share common reference


let myDetails = {"fname" : 'Sachin', "lname" : 'Mulkewar'};
// let myDetailsCopy = myDetails; // deep copy
let myDetailsCopy = {...myDetails}; // shallow copy 
myDetailsCopy.age = 30;
console.log('myDetails', myDetails);
console.log('myDetailsCopy', myDetailsCopy);





// console.log('Objects');

// const myDetails = {
//     "fname" : "Suryakant",
//     "lname" : "Mulkewar",
//     "age" : 30,
//     'skills' : ['Admin', 'LWC', 'Apex', 'JS'],
// };

// console.log('myDetails', myDetails);
// console.log(' typeof myDetails', typeof myDetails);

// // json.stringify() -- object into string

// let jsonString = JSON.stringify(myDetails);

// console.log('jsonString', jsonString);
// console.log('typeof jsonString', typeof jsonString);


// //json.parse()  --- string into object

// let jsonObject = JSON.parse(jsonString);

// console.log('jsonObject', jsonObject);
// console.log('typeof jsonObject', typeof jsonObject);

// //Modify object -- '.', []

// myDetails.dob = '01/01/1994';

// console.log('myDetails', myDetails);

// myDetails.age = 31;
// console.log('myDetails', myDetails);

// // myDetails.city name = 'Pune';

// // [] --> whenever we have to populate property dynamically
// mycountry = 'country';

// myDetails[mycountry] = 'India';

// console.log('myDetails', myDetails);

// myDetails['city name'] = 'Pune';

// console.log('myDetails', myDetails);

// // How to access value from object -- 1. '.' , 2. []

// let myCountry = myDetails.country;
// console.log('myCountry', myCountry);

// let myCity = myDetails['city name'];

// console.log('myCity', myCity);

