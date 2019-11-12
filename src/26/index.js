/*
26. Remove Duplicates from Sorted Array (easy)
Question:
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.


Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of
nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.

Example 2:

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums
being modified to 0, 1, 2, 3, and 4 respectively.

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference,
which means modification to the input array will be known to the caller as well.

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let current = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] > nums[current]) {
            current += 1;
            nums[current] = nums[i + 1];
        }
    }
    return current +1 ;
    // let current;
    // for (let i = 0; i < nums.length; i++) {
    //     if (current === undefined) {
    //         current = nums[i];
    //         continue;
    //     }
    //     if (current === nums[i]) {
    //         nums.splice(nums.indexOf(current), 1);
    //         i = i - 1;
    //         continue;
    //     }
    //     if (nums[i] > current) {
    //         current = nums[i];
    //     }
    // }
    // return nums.length;
};
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));