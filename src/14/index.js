/*
14. Longest Common Prefix
Question:
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


Example:
Input: ["flower","flow","flight"]
Output: "fl"

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let length = strs.length;
  if (length === 0) return '';
  let str = strs[0];
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    for (j = 1; j < length; j++) {
      if (!strs[j][i] || strs[j][i] !== current) {
        return result;
      }
    }
    result = result + current;
  }
  return result;
};