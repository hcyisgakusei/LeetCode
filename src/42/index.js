/*
42. 接雨水(困难)
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

示例:
输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6

 */

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
  let leftMax = [];
  let rightMax = [];
  let sum = 0;
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    max = Math.max(max, height[i]);
    leftMax.push(max);
  }
  max = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    max = Math.max(max, height[i]);
    rightMax.unshift(max);
  }
  for (let i = 0; i < height.length; i++) {
    const currentValue = Math.min(leftMax[i], rightMax[i]) - height[i];
    if (currentValue > 0) {
      sum += currentValue;
    }
  }
  return sum;
};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
