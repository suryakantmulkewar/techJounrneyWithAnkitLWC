console.log('String Method');

let myDetails = 'My Name is Sachin';

console.log ('myDetails',  myDetails);
// length of string
console.log ('myDetails',  myDetails.length);

// Extracting the string

let text = 'Apple, Banana, Kiwi';

console.log(text);

// slice(start position, end position + 1) -- end not included
//substring(start position, end position)
//substr(start position, length)

let sliceBanana = text.slice(7,13 );

console.log('sliceBanana', sliceBanana);

let sliceREmainingFruits = text.slice(7);

console.log(sliceREmainingFruits);

// slice with negative start position

let part = text.slice(-12);

console.log('part', part);

// substring(start position, end position)
// in substring if uou pass negative value in positions
// it will be treated as 0 (zero)

let substringBanana = text.substring(7, 13);

console.log('substringBanana', substringBanana);

let partSubstring = text.substring(-12);
// let partSubstring = text.substring(0);
console.log('partSubstring', partSubstring);

//substr(start position, length)
let substrBanana = text.substr(7, 6);

console.log('substrBanana', substrBanana);

// replace()
// replace will only replace the first match
// replace is case sensitive
// replace will not modify existing string
let newFruitText = text.replace('Banana', 'Mango');
console.log('newFruitText', newFruitText);
console.log('text', text);

// uppercase and lowercase
console.log(myDetails);
console.log(myDetails.toUpperCase());
console.log(myDetails.toLowerCase());

let text1 = 'Hello';
let text2 = 'JS';
let text3 = text1.concat(' ', 'World');
let concatedString = `${text1} ${text2}`;
console.log('concatedString', concatedString);
console.log('text3', text3);

// trim(), trimstart(), trimEnd()
let trimMe = '           Hello World           ';
console.log(trimMe);
console.log(trimMe.trim());
console.log(trimMe.trimStart());
console.log(trimMe.trimEnd());

// padStart(), padEnd()
let myNumber = '5'; // 00005
console.log('myNumber', myNumber);
console.log('myNumber', myNumber.padStart(4, '*'));
console.log('myNumber', myNumber.padEnd(4, '$'));

// split ==> return array[]
// convert string into Array
let mycsvDetails = 'Ankit,Sachin,Suryakant';
let mycsvDetailsArray =  mycsvDetails.split(',');
console.log(mycsvDetailsArray);

// convert Array into string
// toString
// join

let myToString = mycsvDetailsArray.toString();
console.log('myToString', myToString);

let joinString = mycsvDetailsArray.join(' ');
console.log('joinString', joinString);

// search the string (search, match)
//indexOf() -- return the index position of a string
          //-- if not found return -1  
//includes() - if present return true, else return false
console.log('text', text);
console.log(text.indexOf('Banana'));
console.log(text.indexOf('Mango'));

console.log(text.includes('Banana'));
console.log(text.includes('Mango'));

//startsWith()

console.log(text.startsWith('Apple'));
console.log(text.startsWith('Banana'));
console.log(text.endsWith('Apple'));
console.log(text.endsWith('Kiwi'));

// break the string into array -- split
// convert array into set -- conversion
// combine the set -- Join

let myString = 'Hello World World';

let myStringArray = myString.split(' ');
console.log(myStringArray);
let finalArray = [];
myStringArray.map(currItem =>{
    if (!finalArray.includes(currItem)) {
        finalArray = [...finalArray, currItem];
    }
});

console.log('finalArray', finalArray);
console.log('finalArray', finalArray.join(' '));
