function bubbleSort(arr){
    console.log(arr);

    //look at index and next index
    // if i + 1 is < i swap

    for (let i = 0; i<arr.length; i++) {
        for(let j = 1; j<arr.length; j++){
            if (arr[j] < arr[j - 1]) {
                let tempNum = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tempNum;
            }
        }
        
    }
    console.log(arr);

}

let array = [7,3,4,6,2,5];

bubbleSort(array);