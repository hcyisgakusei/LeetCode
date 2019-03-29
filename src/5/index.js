/*
5.Longest Palindromic Substring
Question:
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Input: "cbbd"
Output: "bb"
*/


/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    let palindromic = '', cur = '', j;
    for (let i = 0; i < s.length; i++) {
        j = 1;
        cur = s[i];
        if (s[i - j] && s[i + j] && s[i - j] === s[i + j]) {
            while (s[i - j] && s[i + j] && s[i - j] === s[i + j]) {
                cur = s[i - j] + cur + s[i + j];
                j = j + 1;
            }
        }
        cur.length > palindromic.length ? palindromic = cur : '';
        j = 0;
        if (s[i - j] && s[i + j + 1] && s[i - j] === s[i + j + 1]) {
            cur = '';
            while (s[i - j] && s[i + j + 1] && s[i - j] === s[i + j + 1]) {
                cur = s[i - j] + cur + s[i + j + 1];
                j = j + 1;
            }
        }
        cur.length > palindromic.length ? palindromic = cur : '';
    }
    return palindromic;
};




