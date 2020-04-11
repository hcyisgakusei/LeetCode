/*
231. Power of Two（easy）

 Question:
 Given an integer, write a function to determine if it is a power of two.

Example 1:
Input: 1
Output: true
Explanation: 20 = 1

Example 2:
Input: 16
Output: true
Explanation: 24 = 16

Example 3:
Input: 218
Output: false
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
    return n > 0 && (n & (n-1)) === 0;
    // let result, times = 0;
    // while (!result || n > result) {
    //     result = Math.pow(2, times++);
    // }
    // return n === result;
};

console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(218));
