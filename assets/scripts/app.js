const defaultResult = 0;

let result = defaultResult;


function add(number1, number2){
    const result = number1 + number2;
    alert('The result is '+ result)
}

add(2, 3);
add(1, 2);
result = (result + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(result,calculationDescription);