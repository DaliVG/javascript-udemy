const defaultResult = 0;

let currentResult = defaultResult;

function getUserInput(){
  return parseInt(usrInput.value);
}

function createAndWriteLog(operator, resultBeforeCacl, calcNumber){
  const calculationDescription = `${resultBeforeCacl} ${operator} ${calcNumber}`;
  outputResult(currentResult, calculationDescription);
}

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteLog('+', initialResult, enteredNumber);
}

function substrac() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteLog('-', initialResult, enteredNumber);
}
function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteLog('*', initialResult, enteredNumber);
}
function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteLog('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substrac);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);