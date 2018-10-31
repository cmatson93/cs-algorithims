function findMinAndMax(arr) {

    let minNum = arr[0];
    let maxNum = arr[0];

    let minIndex = 0;
    let maxIndex = 0;

    let minArray = [];
    let maxArray = [];

    for (let i = 0; i<arr.length; i++){

        if (arr[i] < minNum) {
            minNum = arr[i];
            minIndex = i;
        } else if (arr[i] > maxNum) {
            maxNum = arr[i];
            maxIndex = i;
        }

    }
    for (let i = 0; i<arr.length; i ++){
        if (i != minIndex){
            maxArray.push(arr[i]);
        }
        if (i != maxIndex){
            minArray.push(arr[i]);
        }
    }
    console.log("min: ",minArray);
    console.log("max: ",maxArray);

    const minSum = minArray.reduce((a, b) => a + b, 0);
    const maxSum = maxArray.reduce((a, b) => a + b, 0);

    console.log("Min Sum: ", minSum);
    console.log("Max Sum: ", maxSum);

    return answer = minSum + " " + maxSum;

}

console.log(findMinAndMax([5, 5, 5, 5, 5]));