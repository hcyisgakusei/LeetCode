/**
 * 169. 多数元素【简单】
 * 链接：https://leetcode-cn.com/problems/majority-element/
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 *
 * 示例 1：
 * 输入：[3,2,3]
 * 输出： 3
 *
 * 示例 2：
 * 输入：[2,2,1,1,1,2,2]
 * 输出：2
 *
 * 进阶：
 * 尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 候选人(result)初始化为nums[0]，票数count初始化为1
  // 当票数count为0时，更换候选人
  // 当遇到与result相同的数，则票数count = count + 1，否则票数count = count - 1
  // 遍历完数组后，result即为最终答案

  let result = nums[0], count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      result = nums[i];
    }
    nums[i] === result ? count++ : count--;
  }
  return result;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([2]));
