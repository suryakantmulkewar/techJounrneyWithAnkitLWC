console.log('String Assignment');

/*Problem 1 : 
Write a function that takes a string as input and returns a new string with the first letter of each word capitalize.
example: 
Input : 'hello world welcome the leanr salesforce'
Output : Hello World
*/
const capitalizeFirstLetter = (inputString)=>{
//  let convertedArray = inputString.split(' ');
//  let convertedMap =  convertedArray.map(curritem => curritem[0].toUpperCase() + curritem.slice(1));
//     console.log(convertedArray);
//     console.log(convertedMap);

//     let resultString = convertedMap.join(' ');
//     console.log(resultString);
    
    let output = inputString
    .split(' ').
    map(curritem => curritem[0].toUpperCase() + curritem.slice(1))
    .join(' ');

    console.log('output =>', output);
    

}

capitalizeFirstLetter('hello world welcome the learn salesforce');


/*
Problem 2 : 
Write a function that takes a string as input and returns the reverse of the string, maintaining the case of each character
Input : 'hello world'
Output : 

*/

const reverseStringWirhCase = (inputString)=>{
    // let inputArray = inputString.split('');
    // console.log('inputArray', inputArray);
    
    // let reversalArray = inputArray.reverse();
    // console.log('reversalArray', reversalArray);
    // let output = reversalArray.join(' ');
    // console.log('output', output);
    
    let result = inputString.split('').reverse().join(' ');
    console.log('result', result);
    
};

reverseStringWirhCase('hello world');

/*

Problem 3 : 
Write a function that takes a string as input and returns the number of occureneces of each character in the string as an 
example: 
Input : 'hello'
Output : {h:1, e:1, l:2, o:1}
*/

const countCharacter = (inputString)=>{
    let output = {};
    console.log('inputString', inputString.split(''));
    let inputArray = inputString.split('');
    for (let currItem of inputArray) {
        console.log('currItem',  currItem);
        if(output.hasOwnProperty(currItem)){
            output[currItem] = output[currItem] + 1;
        }
        else{
            output[currItem] = 1;
        }
        
    }
    
    console.log('output', output);
    
}

countCharacter('hello');

/*
Problem 4 : 
Write a function that generate the username of the user 
input : Suryakant Lalu Mulkewar
Output : SLM
*/

const generateUsername = (inputString)=>{
    let uppercase = inputString.toUpperCase();
    console.log(uppercase);
    let inputArray = uppercase.split(' ');
    console.log('inputArray', inputArray);
    let initialsArray = inputArray.map(currItem => currItem[0])
    
    console.log(initialsArray);
    let outputString = initialsArray.join('');
    console.log(outputString);
    
    
}

generateUsername('suryakant lalu mulkewar');

/* 
Problem 5 :
Write a function that takes an array of numbers as input and returns new array with all the even numbers removed.
Example : 
Input : [1, 2, 3, 4, 5, 6]
output : [1, 3, 5]
*/

/*
Problem 6 :
Write a function that takes an array of string as input and returns a new array with only the string that 
have a length greater than or equal to 5
Example : 
Input : ['Banana', 'Orange','grape', 'Apple', 'Mango', 'kiwi'];
Output : ['Banana', 'Orange', 'Apple', 'Mango'];
*/

/*
Problem 7 : 
Write a function that takes an array of numbers as input and returns new array with only the unique elements (remove duplicate)
Example : 
Input : [1, 2, 2, 3, 4, 4, 5]
Output : [1, 2, 3, 4, 5]
*/