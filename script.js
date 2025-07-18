const calculator = {
    displayValue : '0',
    firstOperand: null,
    waitingForOperand: false,
    operator: null
}


document.getElementById('btn0').addEventListener('click', () => inputNumber('0'));
document.getElementById('btn1').addEventListener('click', () => inputNumber('1'));
document.getElementById('btn2').addEventListener('click', () => inputNumber('2'));
document.getElementById('btn3').addEventListener('click', () => inputNumber('3'));
document.getElementById('btn4').addEventListener('click', () => inputNumber('4'));
document.getElementById('btn5').addEventListener('click', () => inputNumber('5'));
document.getElementById('btn6').addEventListener('click', () => inputNumber('6'));
document.getElementById('btn7').addEventListener('click', () => inputNumber('7'));
document.getElementById('btn8').addEventListener('click', () => inputNumber('8'));
document.getElementById('btn9').addEventListener('click', () => inputNumber('9'));

document.getElementById('add').addEventListener('click', () => inputOperator('+'));
document.getElementById('subtract').addEventListener('click', () => inputOperator('-'));
document.getElementById('multiply').addEventListener('click', () => inputOperator('*'));
document.getElementById('divide').addEventListener('click', () => inputOperator('/'));
document.getElementById('clear').addEventListener('click', () => clear());
document.getElementById('equals').addEventListener('click', () => performCalculation())

function inputNumber(digit) {
    if(calculator.waitingForOperand){
    
        calculator.displayValue = digit;
        calculator.waitingForOperand = false;
    }else if(calculator.displayValue === '0'){
        calculator.displayValue = digit;
    }
    else{
        calculator.displayValue += digit;
    }
    updateDisplay()
}

function inputOperator(nextOperator){
    const inputValue = parseFloat(calculator.displayValue);

    if (calculator.firstOperand === null){
        calculator.firstOperand = inputValue;
    }else if (calculator.displayValue){
        const result = calculate(calculator.firstOperand, inputValue, calculator.operator);
        calculator.displayValue = String(result);
        calculator.firstOperand = result;
        updateDisplay();
    };
    calculator.waitingForOperand = true;
    calculator.operator = nextOperator;

}

function updateDisplay(){
    document.getElementById('input').value = calculator.displayValue;

}

function calculate(firstOperand, secondOperand, operator){
    switch(operator){
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    } 
}

function clear() {
    calculator.displayValue = '0';
    calculator.firstOperand =  null;
    calculator.waitingForOperand = false;
    calculator.operator = null;
    updateDisplay();
}

function performCalculation(){
    const inputValue = parseFloat(calculator.displayValue);

    if (calculator.firstOperand != null && calculator.operator){
        const result = calculate(calculator.firstOperand, inputValue, calculator.operator);
        calculator.displayValue = String(result);
        calculator.firstOperand = null;
        calculator.operator = null;
        calculator.waitingForOperand = false;
        updateDisplay()
    }
}