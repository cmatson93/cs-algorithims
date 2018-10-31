var insertSort = function(array) {
    for (let i = 1; i < array.length; i++) {
        let compare = true;
        let key = array[i];
        console.log("Key", key);
        let compIndex = i - 1;
        console.log("compIndex", compIndex);
        while (compare) {
            console.log("array[compIndex]", array[compIndex])
            if (key < array[compIndex]) {
                array[compIndex + 1] = array[compIndex];
                compIndex = compIndex - 1;
                console.log("New index", compIndex);
            } else {
                array[compIndex + 1] = key;
                compare = false;
            }
        }
        console.log(array);
    }
}

var arr = [1, 6, 2, 4, 8, 5, 7, 3, 9, 44, 2, 41, 21, 13, 32];
insertSort(arr);