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
  const mid = (nums1.length + nums2.length) / 2;
  let index1 = 0, index2 = 0;
  const result = [];
  while (result.length <= mid) {

    if ((nums1[index1] < nums2[index2] || 0) || index2 >= nums2.length) {
      result.push(nums1[index1]);
      index1++;
    } else {
      result.push(nums2[index2]);
      index2++;
    }
  }

  if (Math.ceil(mid) !== mid) {
    return result[Math.floor(mid)];
  }
  return (result[mid] + (result[mid - 1] || 0)) / 2;
};
console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0]));// 0
console.log(findMedianSortedArrays([], [1]));// 1
console.log(findMedianSortedArrays([2], []));// 2
