function calculateBreaks(scores) {
    let min = scores[0];
    let max = scores[0]; 
    let minBreak = 0;
    let maxBreak = 0;   
    for (let i=1;i<scores.length; i++){
        if(scores[i] < min) {
            min = scores[i];
            minBreak ++;
        }
        if (scores[i] > max){
            max = scores[i];
            maxBreak ++;
        }
    }
    console.log("Min Break: ", minBreak);
    console.log("Max Break: ", maxBreak);
}

calculateBreaks([10, 5,20, 20,4,5,2,25, 1])