//Given nums = [2, 7, 11, 15], target = 9,

//Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].
// Can assume each input has only one solution and
// can't use same element twice. 

function sumOfTwo(array, target) {
    let answers = [];
    for (let i = 0; i < array.length; i++) {
        let firstNum = array[i];
        for (let j = 0; j < array.length; j++) {
            let secondNum = array[j];
            if (firstNum + secondNum === target) {
                answers.push(i, j);
                return answers;
            }
        }

    }
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(sumOfTwo(nums, target));