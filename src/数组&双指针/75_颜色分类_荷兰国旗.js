/**
 * 75. 颜色分类 【中等】
 * 链接：https://leetcode-cn.com/problems/sort-colors/
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 *
 * 示例 1：
 * 输入：nums = [2,0,2,1,1,0]
 * 输出：[0,0,1,1,2,2]
 *
 * 示例 2：
 * 输入：nums = [2,0,1]
 * 输出：[0,1,2]
 *
 * 示例 3：
 * 输入：nums = [0]
 * 输出：[0]
 *
 * 示例 4：
 * 输入：nums = [1]
 * 输出：[1]
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const swap = (arr, index1, index2) => {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  };
  if (nums.length <= 1) return nums;
  // all in [0,start) 0
  // all in [start,i) 1
  // all in [end,len-1] 2
  // i >= p2 中止循环
  let start = 0, i = 0, last = nums.length - 1;
  while (last >= i) {
    if (nums[i] === 0) {
      swap(nums, start, i);
      start++;
      i++;
    } else if (nums[i] === 1) {
      i++;
    } else {
      swap(nums, i, last);
      last--;
    }
  }
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
console.log(sortColors([0]));
console.log(sortColors([1, 0, 2, 1, 2, 1, 1, 1, 0, 1]));
console.log(sortColors([1]));

