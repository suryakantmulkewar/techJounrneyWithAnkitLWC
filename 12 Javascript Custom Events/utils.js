// export during declaration

export let weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
export const DATE_OF_BIRTH_YEAR = 1994;
export function sayHi(message){
    alert(message);
}

// export after declaration

function doAdd(number1, number2){
    alert(number1+number2);
}

export{doAdd};

export default function doMul(number1, number2){
    alert(number1*number2);
}

/* Import */

