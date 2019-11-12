/*
11. Container With Most Water
Question:
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Example:
Input: [1,8,6,2,5,4,8,3,7]
Output: 49

/**
 * 思路：
 * 面积 = 长(an,am的最小值) * 宽（n到m的距离)。
 * 宽的最大值为 height.length - 1 ， 指针左右两收时，宽变小，所以只有长变大，面积才有变大
 */

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (right > left) {
    let width = right - left;
    let length = Math.min(height[left], height[right]);
    max = Math.max(max, width * length);
    height[left] > height[right] ? right = right - 1 : left = left + 1;
  }
  return max;
};


