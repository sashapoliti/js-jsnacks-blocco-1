const arrayOne = [1, 2, 3];
const arrayTwo = [1, 2, 3, 4, 5, 6];
let subLength = arrayOne.length - arrayTwo.length;

if (subLength > 0) {
    for (let i = 0; i < subLength; i++) {
        arrayTwo.push(getRndInteger(1, 10));
    };
    console.log(arrayOne);
    console.log(arrayTwo);
} else if (subLength < 0) {
    subLength = Math.abs(subLength);
    for (let i = 0; i < subLength; i++) {
        arrayOne.push(getRndInteger(1, 10));
    };
    console.log(arrayOne);
    console.log(arrayTwo);
} else {
    console.log('Nulla da fare, i due array sono già della stezza lungezza');
}
