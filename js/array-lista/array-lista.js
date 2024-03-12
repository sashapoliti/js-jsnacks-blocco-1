const refrigerator = [
    'banana',
    'mela',
    'pera',
    'ciliegia',
    'arancia',
    'mandarino',
    'cocomero',
    'limone',
    'fragola'
];
const table = 'pesca';

refrigerator.push(table);
//console.log(refrigerator);

let flag = false;
for (let i = 0; i < refrigerator.length; i++) {
    const watermelon = 'cocomero';

    if (refrigerator[i] === watermelon) {
        flag = true;
    };
};
if (flag) {
    console.log('Trovato! Devo solo preparare il cocktail.');
} else {
    console.log('Oh no, devo uscire a comprare il cocomero!');
}
