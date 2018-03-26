//ES6 Swap array
// [ list[x], list[y] ] = [ list[y], list[x] ];

function sortZeros(array) {
    let firstNum = 0;
    let secondNum = array.length - 1;
    while (firstNum < secondNum) {
        if (array[firstNum] < array[secondNum]) {
            firstNum = firstNum + 1;
        } else if (array[firstNum] > array[secondNum]) {
            array[firstNum] = 0;
            array[secondNum] = 1;
            firstNum += 1;
            secondNum -= 1;
        } else if (array[firstNum] === 1 && array[secondNum] === 1) {
            secondNum -= 1;
        } else {
            firstNum += 1;
        }
    }
    return (array);
}

const bitArray = [0, 1, 1, 0, 1, 0];

console.log(sortZeros(bitArray));