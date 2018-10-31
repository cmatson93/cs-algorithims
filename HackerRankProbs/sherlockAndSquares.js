//Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value describing
//a range of integers. Sherlock must determine the number of square integers within that
//range, inclusive of the endpoints.

//NOTE: A square integer is an integer which is the square of an integer, eg 1,4,9,16,25

//INPUT:
//THe first line contains T, the number of test cases.
//Each of the next T lines contains two space-separated integers denoting A and B, the
//starting and ending integers in the ranges.

//OUTPUT:
//For each test case, print the number of square integers in the range on a new line.

function squares(a, b){
    let squareCount = 0;
    for (let i = a; i < b + 1 ; i++) {
        console.log(i);
        let squared = Math.sqrt(i);
        if (squared % 1 === 0){
            squareCount += 1;
        }
    }
    return squareCount;
}

console.log(squares(30003));
