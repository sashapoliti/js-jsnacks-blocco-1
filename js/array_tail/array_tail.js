const arrayNumber = parseInt(prompt("Di quanti elementi vuoi sia composto l'array?"));
const stampNumber = parseInt(prompt("Quanti elementi dell'array vuoi stampare?"))
const numbers = [];
const stamp = arrayNumber - stampNumber;

if (stamp >= 0) {
    for (let i = 0; i < arrayNumber; i++) {    
        const randomNumber = getRndInteger(1, 100);
        numbers.push(randomNumber);
    };
    console.log(numbers);


    for (let i = numbers.length - 1; i >= stamp; i--) {
        console.log(numbers[i]);
    };  
} else {
    console.log('Il tuo array è troppo corto per stampare questa quantità di elementi, riprova.');
}

