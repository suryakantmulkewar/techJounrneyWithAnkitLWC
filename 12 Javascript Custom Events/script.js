console.log('Javascrpt Custom Events');

/*
The addEventListener() is an inbuilt function in javascript which takes the event to listen for,  
and a second argument to be called whenever the described event gets fired.

        element.addEventListener(event, listener);

The removeEventListener() is an inbuilt function that is used to remove removes an event handler that was previously added
using the addEventListener() function from the element.

        element.removeEventListener(event, listener);

Parameters : 
event : event can be any valid javascript event. Events are used without 'on' prefixes like using 'click' instead of onclick.
listener(handler function) : Function that respond to the event occuring.
*/

/*
Custom Events : 
A custom event can be created using CustomEvent constructor.
This takes two arguments, the first is the name of the event and the second is an object that contains the data.
After creating the events, you need to be able to dispatch them.
To listen for the custom event, add an event listener to the element you want to listen on.

Example : const myEvent = new CustomEvent('myevent', {
details : {},
bubbles : true,
cancelable : true,
composed : false
});

document.querySelector('#element').dispatchEvent(myEvent);
*/

function changeHandler(event){
    console.log(event.target.value);
    let value = event.target.value;

// whenever user enter value as 10,
// then fire the custom event

// step 1 : create custom event
    if(value ==10){
        const myevent = new CustomEvent('valueten', {
            detail : {
                message : 'User enterd the 10 value'
            },
        });
        // Step 2 : Dispatch Event

        document.dispatchEvent(myevent);
    }

}

document.addEventListener('valueten', (event)=>{
    console.log('Access event data : ', event.detail.message);
    
});


// Timing events
/*
    To allows execution of code at specified time intervals there are two key methods to use with javascript are:

    setTimeout -- Executes a function, after waiting a specified number of milliseconds.

                setTimeout(function, milliseconds)
    To stops the execution of the function specified in setTimeout()
                clearTimeout(timeoutVariable)

    setInterval -- Same as setTimeout(), but repeats the execution of the function continuously.

                setInterval(function, milliseconds)
    To stops the execution of the function specified in setInterval()
                clearInterval(timerVariable)
*/

// setTimeout(()=>{
//     console.log('Timeout Done');
    
// }, 5000);
// let intervalDetails = '';

// intervalDetails = setInterval(()=>{
//     console.log('Time Interval Done');
    
// }, 5000);

// setTimeout(()=>{
//     clearInterval(intervalDetails);
//     console.log('Interval Processing Stop');
    
// }, 15000);

let intervalCount = 0;
let timeoutCount = 0;

function intervalFunction(){
    intervalCount++;
    console.log(`Interval tick: ${intervalCount}`);
    if (intervalCount===5) {
        clearInterval(intervalId);
    }
}

function timeoutFunction(){
    timeoutCount++;
    console.log(`Timeout tick : ${timeoutCount}`);
    if (timeoutCount===3) {
        clearTimeout(timeoutId);
    }
}

const intervalId = setInterval(intervalFunction, 1000);
const timeoutId = setTimeout(timeoutFunction, 500);

console.log('Start');


