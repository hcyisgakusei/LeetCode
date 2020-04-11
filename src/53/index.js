/*
53. Maximum Subarray
Question:
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the
largest sum and return its sum.


Example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    let result = nums[0];
    let max = result;
    for (let i = 1; i < nums.length; i++) {
        if (result < 0) {
            result = nums[i];
        } else {
            result += nums[i];
        }
        max = Math.max(max, result);
    }
    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2,-1]));
