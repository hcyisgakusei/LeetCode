/*
16. 最接近的三数之和(中等)

问题:
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。
返回这三个数的和。假定每组输入只存在唯一答案。


例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const threeSumClosest = function (nums, target) {
  if (nums.length <= 3) {
    return nums.reduce((acc, cur) => acc + cur, 0);
  }
  nums.sort((a, b) => a - b);
  let result;
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (right > left) {
      const sum = nums[i] + nums[left] + nums[right];
      if (result === undefined || Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum;
      }
      if (result === target) {
        return target;
      }
      if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;

};

// console.log(threeSumClosest([0, 2, 1, -3], 1));
// console.log(threeSumClosest([0, 0, 0, 0], 1));
// console.log(threeSumClosest([-1, 2, 1, -4], 1));
// console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82));
// console.log(threeSumClosest([-55, -24, -18, -11, -7, -3, 4, 5, 6, 9, 11, 23, 33], 0));
console.log(threeSumClosest([6, -18, -20, -7, -15, 9, 18, 10, 1, -20, -17, -19, -3, -5, -19, 10, 6, -11, 1, -17, -15, 6, 17, -18, -3, 16, 19, -20, -3, -17, -15, -3, 12, 1, -9, 4, 1, 12, -2, 14, 4, -4, 19, -20, 6, 0, -19, 18, 14, 1, -15, -5, 14, 12, -4, 0, -10, 6, 6, -6, 20, -8, -6, 5, 0, 3, 10, 7, -2, 17, 20, 12, 19, -13, -1, 10, -1, 14, 0, 7, -3, 10, 14, 14, 11, 0, -4, -15, -8, 3, 2, -5, 9, 10, 16, -4, -3, -9, -8, -14, 10, 6, 2, -12, -7, -16, -6, 10]
  , -52));
