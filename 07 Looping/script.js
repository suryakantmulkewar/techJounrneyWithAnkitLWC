console.log('Looping in JS');

//for - loops through a block of code a number of times
// for/in -- loops through the properties of an objects
// for/of -- loops through the values of an iterable objects
// while -- loops block of code while a specified condition is true
// do/while -- also loops block of code while a specified condition is true

// Break -- statement "jumps out" of the loops
// continue -- statement "jumps over" one iteration in the loop.


let myFavCars = ['Audi', 'BMW', 'Maruti', 'Hyundai', 'TATA'];
let myDetails = {
      fname : "Sachin",
      lname : "Mulkewar",
      age : 70
}

// for loop (Initialization; condition; increament/decreament)

// for (let i = 0; i < myFavCars.length; i++) {
//    console.log(`${i+1}. ${myFavCars[i]} `);
// }

// while loop -- while(condition)
 
// let currentIndex = 0;
// console.log(myFavCars.length);

// while(currentIndex < myFavCars.length){
//       console.log(`${currentIndex+1}. ${myFavCars[currentIndex]} `);
//       currentIndex = currentIndex +1;
// }

// do while loop

/*
      do{
      
      }

      while(){

      }
*/ 

// do{
//       console.log('Do while loop');
      
// }
// while (1===2) {
      
// }


// for of loop
/*for(let curritem of myFavCars) */

// for(let curritem of myFavCars){
//       console.log('curritem', curritem);
      
// }

// index and item
// for(let [index, car] of myFavCars.entries()){
//       console.log(`${index+1}. ${car}`);
      
// }

/*to make objects iterable, we have three methods 
1. objects.keys
2. Objects.values
3. Objects.entries */
// for(let curritem of Object.keys(myDetails)){
//       console.log('curritem', curritem);
//       console.log('Property value', myDetails[curritem]);
      
// }

// for(let curritem of Object.values(myDetails)){
//       console.log('curritem', curritem);
// }

// for(let [key, value] of Object.entries(myDetails)){
//       console.log(key, value);
// }

// for in loop on Array

/*
      for(let variable in Collection){}
*/

// for(let curritem in myFavCars){
//       console.log(curritem, myFavCars[curritem]);
// }

// // for in for objects

// // for(let item in Object.keys(myDetails)){
// //       console.log(item);
      
// // }

// for(let item in Object.entries(myDetails)){
//       console.log(item);   
// }

// for(let item in myDetails){
//       console.log(item, myDetails[item]);
      
// }

// let openingHours = {
//       fri : {open : '10 AM', close : '11 PM'},
//       sat : {open : '09 AM', close : '10 PM'},
//       sun : {open : '08 AM', close : '09 PM'}
// };

// for(let curritem in openingHours){
//       console.log(curritem);
//       console.log(openingHours[curritem]);
//       let {open, close} = openingHours[curritem];
//       console.log(open, close);
//       console.log(`On ${curritem} office start at ${open} and closed at ${close}`);  
// }

// for of loop

// for(let curritem of Object.entries(openingHours)){
//       console.log(curritem);
// }

// for(let [day, {open, close}] of Object.entries(openingHours)){
//       console.log(day, open, close);
//       console.log(`On ${day} office start at ${open} and closed at ${close}`); 
// }


// Map Collection
// console.log('Map Collection Example');
// let myMap = new Map();
// console.log('myMap', myMap);

// // to add entries in map use set method
// myMap.set('1', 'Sachin');
// myMap.set(2, 30);
// myMap.set(true, 'trainer');

// console.log('myMap', myMap);

// // to access value from map 
// console.log(myMap.get('1'));
// console.log(myMap.get(2));
// console.log(myMap.size);

// let FavPlaces = new Map([
//       ['Jaipur', 'Palace'],
//       ['Pune', 'Fort'],
//       ['Goa', 'Beaches'],

// ]);

// console.log('FavPlaces', FavPlaces);

// // for(let curritem of FavPlaces){
// //       console.log(curritem);
      
// // }
// for(let [key, value] of FavPlaces){
//       console.log(key, value);
      
// }

// for(let curritem  of FavPlaces.keys()){
//       console.log(curritem);
      
// }

// for(let curritem  of FavPlaces.values()){
//       console.log(curritem);
      
// }

// Set Collection
console.log('Set Collection Example');

let mySet = new Set();
console.log('mySet', mySet);
mySet.add('Burger');
mySet.add('Pizza');
mySet.add('Sandwich');
mySet.add('Ghar ka khana');
mySet.add('Pizza');
console.log('mySet', mySet);

//check if sandwich is present in set

console.log( mySet.has('Sandwich'));
console.log( mySet.has('Chinese Food'));

mySet.delete('Sandwich');
console.log('mySet', mySet);

let myFavCities = new Set(['Pune', 'Hyderabad', 'Bengaluru']);

console.log(myFavCities);

for(let curritem of myFavCities){
      console.log(curritem);
      
}
