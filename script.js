let value = null;

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    if(b === 0) return 'Error: Division by 0'
    return a / b
}


function operate(operator, a, b){
    switch(operator){
        case "+" : return add(a, b)
        case "-" : return subtract(a, b)
        case "/" : return divide(a, b)
        case "x" : return multiply(a, b)
    }
}


// Adding listeners to the calculator's buttons
const items = document.querySelectorAll('.grid-items')
items.forEach(item => {
    item.addEventListener('click',display);
        
});

function display(e){

    const currentKey = e.target.textContent;
    if(currentKey === 'C'){
        clearData();
        return;
    };
    const screen = document.querySelector('.screen');
    


    //if the key is a number
    isKeyNum = Number.isInteger(parseInt(currentKey))


    
    if(isKeyNum && keyOperator === null && keyB === null){
        if(keyA === null) keyA = currentKey
        else keyA += currentKey 
        screen.textContent += currentKey
    }else if(!isKeyNum && keyA === null && keyB === null){
        keyA = 0
        keyOperator = currentKey
    }else if(!isKeyNum && keyB === null){
        keyOperator = currentKey
    }else if(!isKeyNum && keyB !==null && currentKey !== '='){
        clearScreen();
        const lastResult = operate(keyOperator, parseInt(keyA), parseInt(keyB))
        screen.textContent = lastResult
        keyA = lastResult
        keyOperator = currentKey
        keyB = null
        
    }else if(!isKeyNum && keyB !==null && currentKey === '='){
        clearScreen();
        const lastResult = operate(keyOperator, parseInt(keyA), parseInt(keyB))
        screen.textContent = lastResult
        keyA = lastResult
        keyOperator = null
        keyB = null
        
    }else if (keyB === null){
        clearScreen();
        keyB = currentKey;
        screen.textContent += currentKey
     }else if (keyB !==null){
         keyB += currentKey;
         screen.textContent += currentKey
     }
    

}

function clearData(){
    const screen = document.querySelector('.screen');
    screen.textContent = ''
    keyA = null
    keyB = null
    keyOperator = null
}

function clearScreen(){
    const screen = document.querySelector('.screen');
    screen.textContent = ''

}




let keyA = null
let keyB = null
let keyOperator = null

