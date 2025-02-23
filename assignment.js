const randomNumber = Math.random();
const anotherRandomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const numbers = [4, 10, 3, 5, 8];


if (randomNumber > 0.7){
    alert('Peackaboo!')
}

for (let i = 0; i < numbers.length; i++) {
    console.log(`${numbers[i]} - first loop`);
}

for (const value of numbers) {
    console.log(`${value} - second loop`);
}

if ((randomNumber > 0.7 && anotherRandomNumber > 0.7) || (randomNumber <= 0.2 || anotherRandomNumber <= 0.2)) {
    alert(`The random numbers are: ${randomNumber} and ${anotherRandomNumber}`);
}