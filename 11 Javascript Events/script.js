console.log('JS Events');
let element = document.querySelectorAll('div');
let elementArray = Array.from(document.querySelectorAll('div'));
console.log(element);
console.log(elementArray);

function clickMe(){
    alert('Welcome Me');
}


function mouseoverhandler(){
    console.log('Mouse over event executed');
    let element = document.querySelector('.hoverme');
    element.style.display = 'none';
}

function mouseouthandler(){
    let element = document.querySelector('.hoverme');
    element.style.display = '';
}

function changehandler(event){
    console.log(event.target.value);
    
}