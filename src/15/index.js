/*
15. 三数之和（中等）
问题:
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组
注意：答案中不可以包含重复的三元组。

Note:
The solution set must not contain duplicate triplets.

示例：

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  if (nums.length === 0 || nums[0] > 0) {
    return [];
  }
  let left, right, target;
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    target = 0 - nums[i];
    left = i + 1;
    right = nums.length - 1;
    if (nums[left] > target) {
      continue;
    }
    while (left < right) {
      if (nums[left] + nums[right] === target) {
        result.push([nums[i], nums[left], nums[right]]);
      }
      if (nums[left] + nums[right] > target) {
        right--;
        continue;
      }
      left++;
    }
  }
  return result;
  return [...new Set(result.map((item) => item.sort((a, b) => a - b).join(',')))].map((item) => item.split(','));

};
console.log(threeSum([-2, 0, 1, 1, 2]));
