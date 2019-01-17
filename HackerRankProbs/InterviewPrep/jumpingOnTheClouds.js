//6
// 0 0 0 0 1 0 ---> 3

function jumpClouds( arr){
    let steps = 0;
    let inc = 2;
    for (let i=1;i<=arr.length;i += inc){
        console.log(`i=${i} cloud=${arr[i]}`)
        if (arr[i] != 1){
            console.log("CLOUD")
            steps ++;
            inc = 2;
            // if (i === arr.length -2){
            //     i = 1;
            // }
        } else {
            console.log("THUNDER")
            inc =  - 1;
        }
        console.log(`steps: ${steps}`);
    }
}


let clouds = [0,0,0,0,1,0]; //3
// let clouds = [0, 0, 1, 0, 0, 0, 0, 1,0,0]; //6

 //0010010 --> 4
// let clouds = [0,0,1,0,0,1,0];
 jumpClouds(clouds);