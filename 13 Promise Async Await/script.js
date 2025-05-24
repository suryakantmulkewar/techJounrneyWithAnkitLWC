console.log("Promise Async/Await");

/*
Asynchronous Javascript

The Asynchronous style of programming focuses more on improving the performance of the application 
and callbacks can also be used in such situations.

Callback Hell
The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell.

It makes the code very difficult to understand and maintain.

** Two ways to escape the callback hell in javascript.
1. Promises
2. Async/Await
*/

// setTimeout(()=>{
//     console.log('Hello 1');
//     setTimeout(()=>{
//         console.log('Hello 2');
//         setTimeout(()=>{
//             console.log('Hello 3');

//         }, 5000);
//     }, 5000);
// }, 5000);

/*
Promise

A promise is basically a promise to return something at a later time. Either the thing you wanted is returned, or an error.
Promise are usually used for callouts to get the data or do an operation on data (CRUD, etc). All apex method return promise.

The promise object supports two properties : state and result

Promises takes a callback function as their only parameter which takes two parameters that must be functions. 
The two functions that are taken as parameters will be executed based on whether the promise has been fulfilled or rejected.

We then need to do something with the promise when it's resolved or rejected which is done using the then() function and 
making sure we catch the promise is rejected. 

State : pending,  Result : undefined
State : fulfilled,  Result : a result value
State : rejected,  Result : an error object


*/
// create promise
// function generatePromise(message) {
//   return new Promise((resolve, reject) => {
//     if (!message) {
//       reject("Message is empty");
//     } else {
//       setTimeout(() => {
//         console.log(message);
//         resolve();
//       }, 1000);
//     }
//   });
// }

// generatePromise().then(()=>{
//     console.log('Promise resolved successfully');

// }).catch((error)=>{
//     console.log('Promise rejected', error);

// })

// how to call the promise
// generatePromise("First Call")
//   .then(() => {
//     console.log("Promise recolved successfully");
//     generatePromise("Second Call");
//   })
//   .then(() => {
//     console.log("Second promise resolved successfully");
//     generatePromise();
//   })
//   .catch((error) => {
//     console.log("Promise rejected", error);
//   });

/* 
  Async/Await

  The latest release introduced async functions and a different way of calling native promise.
  The structure of the promise remains the same, but what changes is how the promise is called.

  Async/await is essentially a way to write asynchronous code that looks and behaves more like synchronous code.

  The async keyword is used to define an asynchronous function, which returns a promise. Within this function, 
  you can use the await keyword to pause the execution of the function until a promise is resolved or rejected.

  If an exception is thrown is an async function, the promise it returns will be rejected with that exception. 
  This can be handled by catching errors with try/catch blocks as usual.
*/

// async function generateDifferentPromises() {
//   try {
//     await generatePromise("1 st call");
//     await generatePromise("2 nd call");
//   } catch (error) {
//     console.log(error);
//   }
// }

// generateDifferentPromises();



/*
Promise.all() -- 
It is a built-in helper that accepts an array of promises (or generally an iterable).

If all promises are resolved successfully, then allPromise fulfills with an array containing fulfilled values of the promises.
The order of promises in the array does matter - you'll get the fulfilled values in the same order.

But if at least one promise rejects, then allPromise rejects right away (without waiting for the remaining pending promises 
to resolve)for the same reason.
*/

// function resolvedTimeout(value, delay){
//     return new Promise((resolve)=> setTimeout(()=>resolve(value), delay))
// }

// function rejectTimeout(reason, delay){
//     return new Promise((resolve, reject)=> setTimeout(()=>reject(reason), delay));
// }

// async function load(){
//     let promise1 = resolvedTimeout('Welcome to Tech Journey With Ankit', 5000);
//     // let promise2 = resolvedTimeout('Welcome to LWC', 5000);
//     let promise2 = rejectTimeout('Loading failed', 7000);

//     const allPromise = Promise.all([promise1, promise2]);

//     try{
//         const lists = await allPromise;
//         console.log('Lists', lists);
//     }
//     catch(error ){
//         console.log('Error', error);
        
//     }
// }

// load();

/*
Prpmise.any()

The function accepts an array (or generally an iterable) of promises as an argument.

The promise returned by promise.any() fulfills with any first fulfilled promise. 
Even if some promises get rejected, these rejections are ignored.

However, if all promises in the input array are rejected or if the input array is empty, then Promise.any() 
rejects with an aggregate error containing all the rejection reasons of the input promise.
*/

function resolvedTimeout(value, delay){
    return new Promise((resolve)=> setTimeout(()=>resolve(value), delay))
}

function rejectTimeout(reason, delay){
    return new Promise((resolve, reject)=> setTimeout(()=>reject(reason), delay));
}

async function load(){
    let promise1 = resolvedTimeout('Welcome to Tech Journey With Ankit', 5000);
    // let promise2 = resolvedTimeout('Welcome to LWC', 5000);
    let promise2 = rejectTimeout('Loading failed', 7000);

    const allPromise = Promise.any([promise1, promise2]);

    try{
        const lists = await allPromise;
        console.log('Lists', lists);
    }
    catch(error ){
        console.log('Error', error);
        
    }
}

load();

/*
Promise.race()

The function accepts an array (or generally an iterable) of promises as an argument.

The name of Promise.race() implies that all the promises race against each other with a single winner, either resolved or rejected.

However, if all promises in the input array are rejected or if the input array is empty, then Promise.any() rejects with an 
aggregate error containing all the rejections reasons of the input promise.
*/