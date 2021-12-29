/**
 * 4. 寻找两个正序数组的中位数 【困难】
 * 链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 算法的时间复杂度应该为 O(log (m+n))
 *
 * 示例 1：
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 *
 * 示例 2：
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 *
 * 示例 3：
 * 输入：nums1 = [0,0], nums2 = [0,0]
 * 输出：0.00000
 *
 * 示例 4：
 * 输入：nums1 = [], nums2 = [1]
 * 输出：1.00000
 *
 * 示例 5：
 * 输入：nums1 = [2], nums2 = []
 * 输出：2.00000
 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  // 找出分割线，使得左边的所有元素 <= 右边的所有元素 ，分割线在元素个数少的数组中确认
  // 分割线位置：m + n 为偶数 --> left size = right size； m + n 为奇数 -->  left size - 1 = right size(左边多一个元素)
  // 分割线条件：由于两个都是有序数组，在同一个数组内，左边的元素肯定小于等于左边的元素。在不同的数组之间，需要满足交叉满足左边小于等于右边！
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]  // 分割线在元素个数少的数组中确认，nums1为个数少的数组
  }
  const m = nums1.length, n = nums2.length, totalLeft = Math.ceil((m + n) / 2); // totalLeft : 左边元素和
  let left = 0, right = m; // 在 [0,m]中找出分割线
  while (left < right) {
    let i = left + Math.ceil((right - left) / 2), j = totalLeft - i;
    if (nums1[i - 1] > nums2[j]) {
      right = i - 1;  // 下一轮搜索区间[left,i-1]
    } else {
      left = i; // 下一轮搜索区间[i,right]
    }
  }
  let i = left, j = totalLeft - left;
  const num1Left = i === 0 ? Number.NEGATIVE_INFINITY : nums1[i - 1]; // Number.NEGATIVE_INFINITY -> 负无穷大
  const num1Right = i === m ? Number.POSITIVE_INFINITY : nums1[i]; // Number.POSITIVE_INFINITY -> 正无穷大
  const num2Left = j === 0 ? Number.NEGATIVE_INFINITY : nums2[j - 1];
  const num2Right = j === n ? Number.POSITIVE_INFINITY : nums2[j];
  const leftMax = Math.max(num1Left, num2Left); // 分割线左边的最大值
  const rightMin = Math.min(num1Right, num2Right); // 分割线右边的最小值
  return (m + n) % 2 === 1 ? leftMax : (leftMax + rightMin) / 2;
};

console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0]));// 0
console.log(findMedianSortedArrays([], [1]));// 1
console.log(findMedianSortedArrays([2], []));// 2
console.log(findMedianSortedArrays([ 2, 3, 4, 6, 7, 8], [1]));// 4
console.log(findMedianSortedArrays([1, 2, 8, 9, 10], [3, 4, 5, 6, 7, 8, 10, 11, 12, 13]));// 4
console.log(findMedianSortedArrays([3], [-2, -1]));
