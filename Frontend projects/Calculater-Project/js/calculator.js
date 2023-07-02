let runningTotal = 0;  
let buffer = "0";
let previousOperator = null;


const screen = document.querySelector('.screen');

function buttonClick(value) {
    if(isNaN(value)) {
        handleSymbol(value);
    }
    else {
        handleNumber(value);
    }

screen.innerText = buffer;
if(value === '='){
    

   previousOperator = null;      // reseting everything after pressing equalls
    buffer = '0'; 
}
    

}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':                      // Clear button
            buffer = '0';
            runningTotal = 0;
            break;
        case '←':
            if(buffer.length <= 1){
                buffer = '0'
            }

            else{
                buffer = buffer.slice(0, buffer.length -1)
            }
            break;
            
        case '=':
            if(previousOperator === null) {
                return;

            }
            flushOperation(parseInt(buffer));
            
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '+':
        case '-':
        case '÷':
        case '×':
            handleMath(symbol);
            break;

    }
}

function handleMath(symbol) {
    if(buffer === '0') {
// do nothing
    return;
}

const intBuffer = parseInt(buffer);  // everytime you click the symbol parses it into a number

if (runningTotal === 0) {
    runningTotal = intBuffer;    // this tracks the previous inputted number. This is always the first number inputted

}
else {
    flushOperation(intBuffer);
}
previousOperator = symbol;    // this resets after 

buffer = '0';
}

function flushOperation(intBuffer) {
    if(previousOperator === '+'){
        
       let temp = String(intBuffer + runningTotal)
        if(temp.length >16){
            runningTotal =  parseInt(temp.slice(0, 15))
            return
        } 
        runningTotal += intBuffer
    } 
    else if(previousOperator === '×'){
        temp = String(intBuffer*runningTotal)
        
       
        if(temp.length >16){
            runningTotal =  parseInt(temp.slice(0, 15))
            return
        } 
        runningTotal *= intBuffer
        
      
}

    else if(previousOperator === '-'){
        temp = String(intBuffer - runningTotal)              // limiting the digits to the screen size
        if(temp.length >16){

            runningTotal =  parseInt(temp.slice(0, 15))
            return
        } 
        runningTotal -= intBuffer

    }
    else {
        if(previousOperator === '÷'){

            if(runningTotal%intBuffer != 0) {

            let temp = runningTotal/intBuffer // making sure recurring digits fit to screen
            temp = temp.toFixed(14)
            runningTotal = temp
            return
        

            

            }
          
       
            runningTotal /= intBuffer;

        }

       
    }
}

function handleNumber(numberString) {        // 16 for integer
    if(buffer === '0'){                     // 14 for float
        buffer = numberString;
    }
    else {
        if(buffer.length == 16) {
            return

        }
        buffer += numberString;
    }
}

function init () {
    document.querySelector('.calc-buttons').
    addEventListener('click', function(event){

        buttonClick(event.target.innerText);
    })
}

init();