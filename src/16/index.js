/*
16. 3Sum Closest
Question:
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
Return the sum of the three integers. You may assume that each input would have exactly one solution.


Example:
Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


const threeSumClosest = function (nums, target) {
    if (nums.length <= 3) {
        return nums.reduce((sum, cur) => sum + cur);
    }
    nums = nums.sort((a, b) => a - b);
    let result, start, end, sum;
    for (let i = 0; i < nums.length; i++) {
        start = i + 1;
        end = nums.length - 1;
        while (end > start) {
            sum = nums[i] + nums[start] + nums[end];
            if (result === undefined) {
                result = sum;
            } else if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum;
            }
            if (sum > target) {
                end--;
            } else if (sum < target) {
                start++;
            } else {
                return target;
            }

        }
    }
    return result;
};

console.log(threeSumClosest([0, 2, 1, -3], 1));
console.log(threeSumClosest([0, 0, 0, 0], 1));
console.log(threeSumClosest([-1, 2, 1, -4], 1));
