const defaultResult = 0;

let result = defaultResult;

function add() {
  result = result + parseInt(userInput.value);
  outputResult(result, '');
}

addBtn.addEventListener('click', add);