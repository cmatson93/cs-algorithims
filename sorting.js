var animals = ["dog", "lizard", "cat", "lion", "dolphin", "manatee", "turtle", "bear"];
animals.sort();
// console.log(animals);

//Swap Function: 
arr = [10, 7, 6, 5, 3, 9, 4, 8, 1, 2];

function swap(array) {
    var smallest = 100000;
    var currentNum;
    var newNum;
    var smallestIndex;
    console.log(array);
    var counter = 0;
    for (let i = 0; i < array.length; i++) {
        counter = counter + 1;
        console.log("counter", counter);
        console.log("index", i);
        currentNum = array[i];
        console.log("currentNum", currentNum);
        for (let t = 1; t < array.length; t++) {
            newNum = array[t];
            console.log("newNum", newNum);
            if (newNum < currentNum && smallest) {
                smallest = newNum;
                console.log("smallest", smallest);
                smallestIndex = t;
                console.log("smallestIndex", smallestIndex);
            }
        }
        array[i] = smallest;
        array[smallestIndex] = currentNum;
        console.log(array);

    }
}

swap(arr);