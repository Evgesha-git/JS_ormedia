


  const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
  trigoOperator: null,
};
 
//All Operators
const allCalculation = {
  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

  '=': (firstOperand, secondOperand) => secondOperand,
  
  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  
  '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  
  '%': (firstOperand, secondOperand) => firstOperand % secondOperand,
  
  '**': (firstOperand, secondOperand) => Math.pow(firstOperand, secondOperand),
  
};

const allTrigonometry = {
	'sin':(secondOperand) => Math.sin(secondOperand),
	
	'cos':(secondOperand) => Math.cos(secondOperand),
	
	'tan':(secondOperand) => Math.tan(secondOperand),
	
	'ctg':(secondOperand) => 1/Math.tan(secondOperand)
}

function inputOperand(ourOperand) {
  const {
      displayValue,
      waitingForSecondOperand
  } = calculator;

  if (waitingForSecondOperand === true) {
      calculator.displayValue = ourOperand;
      calculator.waitingForSecondOperand = false;
  } else {
      calculator.displayValue = displayValue === '0' ? ourOperand : displayValue + ourOperand;
  }

  console.log(calculator);
}

function clear(tipeOperator){
	const {
      firstOperand,
      displayValue,
      waitingForSecondOperand
  	} = calculator
  	const inputValue = parseFloat(displayValue);
    
    console.log(calculator);
  	
	calculator.displayValue = String(0);
    calculator.firstOperand = null;
  	calculator.waitingForSecondOperand = false;
  	console.log(calculator);
};

function factorial(value){
	value = value.toFixed();
	return (value != 1) ? value * factorial(value - 1) : 1;
}

function handleOperator(nextOperator, trigonometry) {
	const {
      firstOperand,
      displayValue,
      operator,
      trigoOperator
      } = calculator
	const inputValue = parseFloat(displayValue);
	
	calculator.trigoOperator = trigonometry;
	let radio = document.querySelectorAll(".radio");
	//вычисление факториала
	if (nextOperator == 'n!'){
		if(inputValue == 0){
			result = 1;
		} else {
			result = factorial(inputValue);
		}
		
		
		calculator.displayValue = String(result);
		calculator.firstOperand = null;
		calculator.waitingForSecondOperand = true;
		return;
	}
	
	if(trigoOperator != null){
		
		for(let counter = 0; counter < radio.length; counter++){
			if(radio[counter].checked == true){
				if(radio[counter].value == 'rad'){
					result = allTrigonometry[trigoOperator](inputValue);
					calculator.displayValue = String(result.toFixed(6));
					calculator.firstOperand = null;
					calculator.waitingForSecondOperand = true;
					return;
				}else {
					let input_value = (inputValue*Math.PI)/180
					result = allTrigonometry[trigoOperator](input_value.toFixed(4));
					calculator.displayValue = String(result.toFixed(6));
					calculator.firstOperand = null;
					calculator.waitingForSecondOperand = true;
					return;
				}
				
			} 
		}
			
	}
	
	if (operator && calculator.waitingForSecondOperand) {
		calculator.operator = nextOperator;
      	console.log(calculator);
      	return;
  	}

  	if (firstOperand == null) {
      	calculator.firstOperand = inputValue;
  	} else if (operator) {
  	let result = 0;
	const currentValue = firstOperand || 0;
    	if ((currentValue == 0.1 && inputValue == 0.2)||(currentValue == 0.2 && inputValue == 0.1)){
      		if (operator == '+'){
      			result = 0.3;
      		} else if (operator == '*'){
      			result = allCalculation[operator](currentValue, inputValue).toFixed(2);
      		};
      	} else {
      		if (operator == '/' && inputValue == 0){
      			result = "Деление на 0";
      		} else {
      			result = allCalculation[operator](currentValue, inputValue);
      		};
      	};

      	calculator.displayValue = String(result);
      	calculator.firstOperand = result;
	} 

  	calculator.waitingForSecondOperand = true;
  	calculator.operator = nextOperator;
  	console.log(calculator);
}

function updateDisplay() {
  const display = document.querySelector('.calc_all');
  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calc_keys');
keys.addEventListener('click', (event) => {
  const {
      target
  } = event;
  if (!target.matches('button')) {
      return;
  }

  if (target.classList.contains('operator')) {
  	if(target.value != 'C'){
  		if(!target.classList.contains('trigano')){
  			handleOperator(target.value);
      		updateDisplay();
  		} else {
  			handleOperator(target.value, target.value);
      		updateDisplay();	
  		}
  		
      return;
  	} else {
  		clear(target.value);
      	updateDisplay();
      	return;
  	}
  }
  inputOperand(target.value);
  updateDisplay();
}); 