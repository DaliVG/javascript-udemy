const defaultResult = 0;

let currentResult = defaultResult;

let historialEntries = [];

function getUserInput(){
  return parseInt(usrInput.value);
}

function operationIdentifier(  operation,
  prevResult,
  operationNumber,
  newResult){
    const logEntry = {
      operation: operation,
      prevResult: prevResult,
      number: operationNumber,
      result: newResult
      };
    historialEntries.push(logEntry);
    console.log(historialEntries)
}

function createAndWriteLog(operator, resultBeforeCacl, calcNumber){
  const calculationDescription = `${resultBeforeCacl} ${operator} ${calcNumber}`;
  outputResult(currentResult, calculationDescription);
}

function calculateResult(calculationType){
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  let mathOperator;
  if(calculationType ==='ADD'){
    currentResult += enteredNumber;
    mathOperator = '+';
  } else {
    currentResult -= enteredNumber;
    mathOperator = '-';
  }

  createAndWriteLog('+', initialResult, enteredNumber);
  operationIdentifier(calculationType, initialResult, enteredNumber, currentResult);
}


function add() {
  calculateResult('ADD')
}

function substrac() {
  calculateResult('SUBSTRAC')
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteLog('*', initialResult, enteredNumber);
  operationIdentifier('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteLog('/', initialResult, enteredNumber);
  operationIdentifier('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substrac);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);