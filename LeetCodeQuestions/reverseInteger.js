/* 
Given a 32-bit signed integer, reverse digits of an integer. 

Example: 
input: 123 
output: 321

*/

function reverseInteger(num) {
    num = num.toString();
    let reversedArray = [];
    console.log(`Num: ${num}, length: ${num.length}`);
    for (let i= num.length -1; i >= 0; i--) {
        console.log(num[i]);
        reversedArray.push(num[i]);
    }
    const reversed = reversedArray.join("");
    console.log(reversed);
    return parseInt(reversed);
}

reverseInteger(235);