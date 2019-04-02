/*
7. Reverse Integer
Question:
Given a 32-bit signed integer, reverse digits of an integer.

Example:
Input: 123
Output: 321

Input: -123
Output: -321

Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.


/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    const max = Math.pow(2, 31);
    let flag = x < 0;
    flag ? x = -x : '';
    const length = Math.floor(Math.log10(x));
    let result = 0;
    for (let i = 0; i <= length; i++) {
        const cur = x % 10;
        if (flag && ((max - cur) / 10 <= result) || ((max - cur - 1) / 10 <= result)) {
            return 0;
        }
        result = result * 10 + cur;
        x = Math.floor(x / 10);

    }
    return flag ? 0 - result : result;
};




