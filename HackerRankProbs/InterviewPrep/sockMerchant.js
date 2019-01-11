/* 
John works at a clothing store. He has a large pile of socks that he must pair by color for sale. 
Given an array of integers representing the color of each sock,
 determine how many pairs of socks with matching colors there are.

 Complete the sockMerchant function in the editor below.
  It must return an integer representing the number of matching pairs of socks that are available.
*/

//9
//10 20 20 10 10 30 50 10 20 --> 3

// 1 2 3 --> 3
// i 1 
// j 2
// j 

function getPairs(n, arr){
    let matches = 0;
    // let count;
        for (let i=0; i < arr.length - 1; i++) {
            console.log(`-------------${i}------------------`)
            let currentSock = arr[i];
            console.log(`Current Sock: ${currentSock}, i: ${i}`);
            for (let j = i + 1; j < arr.length; j++) {
                let compareSock = arr[j];
                console.log(`>>current ${currentSock}  Sock: ${compareSock}, i: ${i} j: ${j}`);
                if (compareSock === currentSock) {
                    console.log("~~~~MATCH~~~~")
                    matches++;
                    console.log(arr)
                    arr.splice(i, 1);
                    arr.splice(j - 1, 1);
                    console.log(arr)
                    i = -1; 
                    break;
                }

            }
        }
    // }
        
    // }
    // loopThrough(arr);
    console.log(matches);
}

// const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];
var socks =[6,5,2,3,5,2,2,1,1,5,1,3,3,3,5];
// var socks =[4,5,5,5,6,6,4,1,4,4,3,6,6,3,6,1,4,5,5,5];

getPairs(9, socks);



function sockSort(arr){
    arr.sort()
    console.log(arr);
}

// sockSort(socks);