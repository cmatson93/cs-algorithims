function SimpleAdding(num) {
    var startNum = 0;
    console.log("NUM: ", num)
    for (let i = 1; i <= num; i++) {
        console.log("_________________");
        console.log("startNum: ", startNum);
        console.log("i: ", i);
        startNum += i;
        console.log("Added num: ", startNum);
        console.log("_________________");

    }
    console.log("Returned Num: ", startNum);
    // code goes here  
    return startNum;

}

// keep this function call here 
SimpleAdding(4);                            