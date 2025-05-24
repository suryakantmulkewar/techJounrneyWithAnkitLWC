console.log('Fetch API and Debugging');
/* 
    The Fetch API ia a modern interface that allows you to make HTTP requests to servers.

    Fetch takes two arguments, the URL and an object, options. Only the URL is mandatory, 
    and the method is set to GET by default if not provided.

    Fetch always returns a promise. So, we have a body that is a "Readable Stream" and to be able to read it, 
    we need to return a JSON format of the response. We use the .json() method for that purpose.

    To extract the data from this response, we can use a .then() method again to get the data to extract the 
    data from this response, we 
*/
//promises
// function loadRandoUser(){
//     fetch('https://reqres.in/api/users')
//     .then((response) => response.json())
//     .then(data => console.log(data));
// }

// loadRandoUser();

// //async/await

// async function loadRandoUser(){
//    let response = await fetch('https://reqres.in/api/users')
//    let data = await response.json();

//    console.log(data);
   
// }

// loadRandoUser();

// async function loadRandomCat() {
//     let response = await fetch('https://api.thecatapi.com/v1/images/search');
//     let data = await response.json();
//     console.log(data);
//     const imageUrl = data[0].url;
//     console.log('imageUrl', imageUrl);

//     let element = document.querySelector('.catimages');
//     element.src = imageUrl
    
// }

// loadRandomCat();

/*
[
    {
        "id": "51k",
        "url": "https://cdn2.thecatapi.com/images/51k.gif",
        "width": 500,
        "height": 281
    }
]
*/


async function loadExchangeRate() {
   let response =  await fetch('https://rest.coinapi.io/v1/exchangerate',{
    method : 'GET',
    headers : {'X-CoinAPI-Key': 'cb29683b-1593-4f87-a624-d607dfc8509f'},
   }
);
    let data = await response.json();
    console.log(data);
    
}

loadExchangeRate();



/*
    Debugging

    All modern browsers have built in Javascript debuggder.

    With a debugger, you can also set breakpoints (places where code execution can be stopped), 
    and examine variables while the code is executing

    Normally, you can activate debugging in your browser with F12, and select 'Console' in the degubbing menu.

    The console.log() method
    Settting breakpoints
    The debugger keywords

*/

function calculateSum(arr){
    debugger;
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum +=arr[i];
    }
    return sum;

}

const numbers = [1, 2, 3, 4, 5];
const total = calculateSum(numbers);
console.log('total', total);
