// Function Declaration === calling function before declaration is fine ---support hoisting  
// legacy
function calc1(number1, number2){
    let sum = number1 + number2;
    return sum;
}

// Function Expression ----- calling funtion before declaration is not possible -- does not support hoisting
// recommended 
let calc2 = function(number1, number2){
   if(number2){
     let sum = number1 + number2;
    return sum;
   }
   else{
    return number1;
   }
};

let calc1Result =  calc1(10, 5);
console.log('calc1Result', calc1Result);

let calc2Result =  calc2(10, 30);
console.log('calc2Result', calc2Result);

let calc3Result =  calc2(10);
console.log(calc3Result);


// Arrow Functions -- ES6
// Modern way to write function expression
let calc3 = (number1, number2)=>{
   if(number2){
     let sum = number1 + number2;
    return sum;
   }
   else{
    return number1;
   }
};

let calc4Result =  calc2(10, 30);
console.log('calc4Result', calc4Result);

let greet = function(username){
    return `${username} , Welcome to the JS`;
}
console.log(greet('Surya'));
let greetArrowFunction = (username)=>{
    return `${username} , Welcome to the JS`;
}
console.log(greetArrowFunction('Sachin'));

let welcomeMessage = ()=> 'Welcome to learn JS';

console.log(welcomeMessage());

// callback function
console.log('Callback function');

// A callback is a function passed as an argument to another function. 
function welcomeMe(name, callMe){
    console.log(`Hello ${name}`);
    callMe();
    
}

function greetMetoo(){
    console.log(`Welcome to Tech Journey With Ankit`);
    
}
function goodBye(){
    console.log(`See you in future session of the bootcamp`);
    
}

welcomeMe('Sachin', greetMetoo);
welcomeMe('Suryakant', goodBye);

