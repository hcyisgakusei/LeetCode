/*
面试题53 - I. 在排序数组中查找数字 I（简单）

问题：
统计一个数字在排序数组中出现的次数。

示例 1:
输入: nums = [5,7,7,8,8,10], target = 8
输出: 2

示例 2:
输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
 

限制：
0 <= 数组长度 <= 50000

 */

function search(nums, target) {
    function searchHelper(left, right) {
        if (left > right) return 0;
        const middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) {
            let count = 1;
            let leftBorder = middle;
            while (nums[leftBorder - 1] === nums[leftBorder]) {
                count++;
                leftBorder--;
            }
            let rightBorder = middle;
            while (nums[rightBorder] === nums[rightBorder + 1]) {
                count++;
                rightBorder++;
            }
            return count;
        }
        if (nums[middle] > target) {
            return searchHelper(left, middle - 1);
        }
        return searchHelper(middle + 1, right);
    }

    return searchHelper(0, nums.length - 1);
};


console.log(search([5, 7, 7, 8, 8, 10], 8));
console.log(search([5, 7, 8, 9, 10], 10));
console.log(search([5, 7, 8, 9, 10], 100));
