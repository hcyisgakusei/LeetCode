/*
3. 无重复字符的最长子串（中等）
问题:
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
*/


/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let maxLength = Number.MIN_SAFE_INTEGER;
  let str = '';
  for (let i = 0; i < s.length; i++) {
    const index = str.indexOf(s[i]);
    if (index === -1) {
      str += s[i];
    } else {
      maxLength = Math.max(maxLength, str.length);
      str = str.substring(index + 1) + s[i];
    }
  }
  return Math.max(maxLength, str.length);
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));


