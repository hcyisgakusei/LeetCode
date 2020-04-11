/*
88. Merge Sorted Array (Easy)

Question:
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

Example:
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

*/


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
    // nums1.splice(m);
    // let index1 = 0, index2 = 0;
    // while (index2 < n) {
    //     if (nums2[index2] <= nums1[index1]) {
    //         nums1.splice(index1, 0, nums2[index2]);
    //         index1++;
    //         index2++;
    //     } else if (index1 === nums1.length) {
    //         nums1.push(nums2[index2]);
    //         index2++;
    //     } else {
    //         index1++;
    //     }
    // }

    let count = m + n;
    while (m > 0 && n > 0) {
        nums1[--count] = nums1[m - 1] > nums2[n - 1] ? nums1[--m] : nums2[--n];
    }
    if (n > 0) {
        nums1.splice(0, n, ...nums2.splice(0, n));
    }
};
const num1 = [4, 5, 6, 0, 0, 0];
const num2 = [1, 2, 3];
merge(num1, 3, num2, 3);
console.log(num1);

const num11 = [1, 2, 3, 0, 0, 0];
const num22 = [2, 5, 6];
merge(num11, 3, num22, 3);
console.log(num11);


