/*
9.回文数（简单）
问题:
判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:
输入: 121
输出: true

示例 2:
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

示例 3:
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。

进阶:
你能不将整数转为字符串来解决这个问题吗？
 */



/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    const original = x;
    if (x < 0) {
        return false;
    }
    const length = Math.floor(Math.log10(x));
    let result = 0;
    for (let i = 0; i <= length; i++) {
        result = result * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return result === original;
};


