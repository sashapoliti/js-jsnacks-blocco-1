const arrayNumber = parseInt(prompt("Di quanti elementi vuoi sia composto l'array?"));
const numbers = [];

for (let i = 0; i < arrayNumber; i++) {    
    const randomNumber = getRndInteger(1, 100);
    numbers.push(randomNumber);
};
console.log(numbers);

for (let i = numbers.length - 1; i >= (numbers.length - 1) - 4; i--) {
    console.log(numbers[i]);
};