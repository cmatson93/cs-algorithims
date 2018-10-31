function candleCount(arr){

    var maxNum = Math.max(...arr);

    // console.log(maxNum);

    const maxNums = arr.filter(element => element === maxNum);
    // console.log(minNums);

    console.log(maxNums.length);
}

candleCount([1,1,3,6,6,6]);