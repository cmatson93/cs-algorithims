/*
const piValue = Math.PI;
radius is = r 
use r and piValue to caluclate area and perimeter of a circle with radius r.
    area = pi * r squared
    perimeter = 2 * pi * r
print area as the first line and perimeter as seconde. 

sample input: 2.6 
sample  output: 
    21.237166338267002
    16.336281798666924
*/

function getAreaAndPerimeter(r) {
    const piValue = Math.PI;
    let area = piValue * Math.pow(r, 2);
    let perimeter = 2 * piValue * r;
    console.log(area);
    console.log(perimeter);
}

getAreaAndPerimeter(2.6);


