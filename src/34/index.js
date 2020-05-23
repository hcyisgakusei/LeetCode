/*
34. 在排序数组中查找元素的第一个和最后一个位置(中等)

问题：
给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
你的算法时间复杂度必须是 O(log n) 级别。
如果数组中不存在目标值，返回 [-1, -1]。

示例 1:
输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]

示例 2:
输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  const searchRangeHelper = function (left, right) {

    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) return searchRangeHelper(left, mid - 1);
    if (nums[mid] < target) return searchRangeHelper(mid + 1, right);
  };

  const index = searchRangeHelper(0, nums.length - 1);

  if (index === -1) return [-1, -1];

  let i = index;
  while (nums[i] === nums[i - 1]) {
    i--;
  }
  let j = index;
  while (nums[j] === nums[j + 1]) {
    j++;
  }
  return [i, j];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 5));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
