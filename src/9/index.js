/*
9. Palindrome Number
Question:
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example:
Input: 121
Output: true

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.



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


