//Goal is to find the number of valleys Gary walked through during his hike. 
//Given a string
//Either U || D

function countValleys(n, steps){
    let valleys = 0; 
    let altitude = 0;
    let valleyArray = [0]
    for (let i=0; i<steps.length; i++){
        if (steps[i] === "U") {
            altitude ++;
        } else {
            altitude --;
        }
        if (altitude <= 0 ){
            valleyArray.push(altitude);
        }
    }
    console.log(".....DONE......")
    console.log(altitude);
    console.log(valleyArray)
    let zero = 0;
    for (let i=0;i<valleyArray.length;i++){
        if (valleyArray[i] === 0 && valleyArray[i+1] != 0){
            zero ++;
            if (zero === 2){
                valleys ++;
                zero = 1;
            }
        }
    }
    console.log(`VALLEYS = ${valleys}`)
}

// var steps = "UDDDUDUU";
var steps = "DDUUDDUDUUUD ";
// var steps = 'UDUUUDUDDD';
countValleys(8, steps);