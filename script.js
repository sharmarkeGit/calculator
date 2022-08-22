let a = 0
let b = null
let lastKeyOperator = null
let keyOperator = null
let screen = document.querySelector('.screen');

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


// Adding listeners to the calculator's number buttons 
const btnNumbers = document.querySelectorAll('.number')
btnNumbers.forEach(btn => {
    btn.addEventListener('click',setOperands);
        
});

// Adding listeners to the calculator's operator buttons
const btnOperators = document.querySelectorAll('.operator')
btnOperators.forEach(btn => {
    btn.addEventListener('click',operatorClicked);
        
});

// Adding listeners to the calculator's '=' button
const btnEqual = document.querySelectorAll('#equal')
btnEqual.forEach(btn => {
    btn.addEventListener('click',calculate);
        
});


// Adding listeners to the calculator's 'C' button (clear)
const btnClear = document.querySelectorAll('#clear')
btnClear.forEach(btn => {
    btn.addEventListener('click',clearScreen);
        
});


// Adding listeners to the calculator's '+/-' button
const btnSign = document.querySelectorAll('#changeSign')
btnSign.forEach(btn => {
    btn.addEventListener('click',changeSign);
        
});

// Adding listeners to the calculator's '%' button
const btnPercent = document.querySelectorAll('#percentage')
btnPercent.forEach(btn => {
    btn.addEventListener('click',percentage);
        
});

// Adding listeners to the calculator's ',' button
const btnFloat = document.querySelectorAll('#floater')
btnFloat.forEach(btn => {
    btn.addEventListener('click',floater);
        
});


function display(string){
    if(typeof string !== 'string') string = string.toString()

    if(string === 'Error: Division by 0'){
        screen.textContent = string
        a = 0
        return
    }
    
    if(string.length <= 18) screen.textContent = string
   
    else if (b===null) a = a.toString().slice(0,-1)
    else b = b.toString().slice(0,-1)

}


function clearScreen(e){
    
    if(b === null && keyOperator === null){
        screen.textContent = ''
        a = 0
    }else if(b === null && keyOperator !== null){
        keyOperator = null
    }else{
        screen.textContent = ''
        b = null
    }

    

}

function changeSign(e){
    if(b === null){
        a *= -1 
        display(a)
    }else{
        b *= -1 
        display(b)
    }
}

function percentage(e){
    if(b === null){
         a = parseFloat(a)/100 
        display(a)
    }else{
        b = parseFloat(b) / 100
        display(b)
    }
}

function floater(e){
    console.log('heere')
    if(b === null){
        a += '.' 
        display(a)
    }else{
        b += '.'
        display(b)
    }

}

function setOperands(e){
    const currentKey = e.target.textContent
    if(keyOperator === null){
        a = (a === 0) ? currentKey : a + currentKey
        display(a)
    }else{
        b = (b === null) ? currentKey : b + currentKey
        display(b)
    }
}


function operatorClicked(e){
    const currentKey = e.target.textContent
    if(b === null){
        keyOperator = currentKey
    }else{
        a = operate(keyOperator, parseFloat(a), parseFloat(b))
        display(a)
        b = null
        keyOperator = currentKey
    }
}

function calculate(e){
    
    if(b===null){
        a = screen.textContent
    }else{
        a = operate(keyOperator,parseFloat(a),parseFloat(b))
        b = null
        keyOperator = null
        display(a)
    }
}
