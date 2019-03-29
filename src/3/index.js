/*
3.Longest Substring Without Repeating Characters
Question:
Given a string, find the length of the longest substring without repeating characters.

Example:
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
 Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/


/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    let maxLength = 0;
    let strArr = [];
    let index;
    for (let i = 0; i < s.length; i++) {
        index = strArr.indexOf(s[i]);
        if (index !== -1) {
            maxLength < strArr.length ? maxLength = strArr.length : '';
            strArr = strArr.splice(+index + 1);
        }
        strArr.push(s[i]);
    }
    maxLength < strArr.length ? maxLength = strArr.length : '';
    return maxLength;
};




