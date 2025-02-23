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
  } else if (calculationType === 'SUBSTRAC'){
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY'){
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE'){
    currentResult /= enteredNumber;
    mathOperator = '/';
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
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substrac);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);