console.log('Array and Array Methods');
//An array is a special variable, which can hold more than one value.
let myCars = ['BMW', 'Audi', 'Ferrari', 'Volvo'];
console.log('myCars', myCars);
console.log('typeof myCars', typeof myCars);
console.log(myCars[2]);
let myFavCars = [];
console.log(myCars.length);
console.log(myFavCars.length);

// add the elements in the array
// push --- add element in array at end
//unshift --- add element in array at beginning
// spread operator

myCars.push('Hyundai');
console.log('myCars', myCars);

myCars.unshift('Tata');
console.log('myCars', myCars);

// spread operator
myCars = ['Maruti', ...myCars];
console.log('myCars', myCars);

myCars = [...myCars, 'Honda'];
console.log('myCars', myCars);

// remove the element from the array
// pop ==> remove the element from array from end, return the removed element.
// shift ==> remove the element from array from start.

console.log(myCars);
let popItem = myCars.pop();
console.log(popItem);
console.log(myCars);

let shiftItem = myCars.shift();
console.log(shiftItem);
console.log(myCars);

// modify the elements from the array
// replace Ferrari with Honda

myCars[3] = 'Honda';
console.log(myCars);

let myFavPeople = ['Mark', 'John', 'Tim', 'Sachin', 'Sachin'];
console.log(myFavPeople);

let mySet = new Set(myFavPeople);
console.log(mySet);

// search element
// indexOf
// includes

console.log(myCars.indexOf('Audi'));
console.log(myCars.indexOf('Ferrari'));

console.log(myCars.includes('Audi'));
console.log(myCars.includes('Ferrari'));

// how to convert array into string
// toString() --> all the arary entries seperated by ','
// join() --> we can decide seperator

console.log(myCars.toString());
console.log(myCars.join(';'));

//splice
//slice

//splice -- > to add element in array, to remove element from array
// splice(param1, param2, rest)
//param1 = position where new element will be added
//param2 = how many elements needs to be removed.
// rest = new elements you have to add
// splice == return the array of deleted element
// splice == splice modify the original array

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// add 2 fruits
fruits.splice(2,0,'Lemon', 'Kiwi');
console.log('fruits', fruits);

//remove 2 fruits
let removedFruits = fruits.splice(0, 2);
console.log('removedFruits', removedFruits);
console.log('fruits', fruits);


// slice --> extract any portion from array go for the slice
// slice = return the new array, it will not modify the original array
//slice(param1, param2)
//param1 == index of starting argument
//param2 == index of end argument + 1

let slicedArray = fruits.slice(1, 3);
console.log('slicedArray', slicedArray);

// extract lemon and kiwi
let slicedLemonKiwi = fruits.slice(0, 2);
console.log('slicedLemonKiwi', slicedLemonKiwi);
console.log('fruits', fruits);


console.log('Iteration on Array');

let bankingTransaction = [5000, -7000, 9000, -4000, 2000];
console.log('bankingTransaction', bankingTransaction);

// forEach() -- it takes parameter as callback function
// callback function have the three different parameter
//forEach((currItem, index, originalArray) => {
    // write code here
    // });

bankingTransaction.forEach((currItem) => {
    console.log('currItem', currItem);
    // console.log('index', index);
    // console.log('array', array);
    
});

bankingTransaction.map((currItem)=>{
    console.log('currItem', currItem);

});
let updatedArray = bankingTransaction.map((currItem)=>{
    // console.log('currItem', currItem);
    currItem = currItem / 10;
    return currItem;
});

console.log('updatedArray', updatedArray);

// get all the deposit entries
//filter -- return value is boolean
// return an array

let depositArray = bankingTransaction.filter((currItem)=>currItem > 0);

console.log('depositArray', depositArray);

let withdrawArray = bankingTransaction.filter(currItem => currItem < 0);

console.log('withdrawArray', withdrawArray);

let myFruits = ['Fig', 'Apple', 'Guava', 'Cherry'];
//give me the fruits for which the fruits name is greater than 3 character
let filteredFruits = myFruits.filter((currItem)=> currItem.length > 3);

console.log('filteredFruits', filteredFruits);

// find() --> always return one entry / item
// check if transaction array have 9000 entry

let entryFor9000 = bankingTransaction.find((currItem) =>{
    return currItem == 9000;
});

console.log('entryFor9000', entryFor9000);
