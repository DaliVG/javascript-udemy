const defaultResult = 0;

let result = defaultResult;


function add(number1, number2){
    const result = number1 + number2;
    return result;
}

result = add(7, 3);

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(result,calculationDescription);