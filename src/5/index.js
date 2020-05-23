/*
5.最长回文子串（中等）
问题:
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。

示例 2：
输入: "cbbd"
输出: "bb"
*/


/**
 * @param {string} s
 * @return {string}
 */
// const longestPalindrome = function (s) {
//   let palindromic = '', cur = '', j;
//   for (let i = 0; i < s.length; i++) {
//     j = 1;
//     cur = s[i];
//
//     while (s[i - j] && s[i + j] && s[i - j] === s[i + j]) {
//       cur = s[i - j] + cur + s[i + j];
//       j = j + 1;
//     }
//
//     if (cur.length > palindromic.length) {
//       palindromic = cur
//     }
//
//     j = 0;
//     cur = '';
//     while (s[i - j] && s[i + j + 1] && s[i - j] === s[i + j + 1]) {
//       cur = s[i - j] + cur + s[i + j + 1];
//       j = j + 1;
//     }
//     if (cur.length > palindromic.length) {
//       palindromic = cur
//     }
//   }
//   return palindromic;
// };

// 动态规划
const longestPalindrome = function (s) {
  const reverseS = s.split('').reverse().join('');
  const resultArr = [];
  let max = Number.MIN_SAFE_INTEGER;
  let lastIndex;
  const length = s.length;
  for (let i = 0; i < length; i++) {
    const lastResultArr = [...resultArr];
    for (let j = 0; j < length; j++) {
      if (s[i] !== reverseS[j]) {
        resultArr[j] = 0;
      } else {
        resultArr[j] = (lastResultArr[j - 1] || 0) + 1;
      }
      if (resultArr[j] > max) {
        // 求出最长公共子串后，并不一定是回文串，我们还需要判断该字符串倒置前的下标和当前的字符串下标是不是匹配。
        const startIndex = j - resultArr[j] + 1;
        if (length - 1 - startIndex === i) {
          max = resultArr[j];
          lastIndex = j;
        }


        // const beforeRev = length - 1 - j;
        //
        // if (beforeRev + resultArr[j] - 1 === i) {
        //   max = resultArr[j];
        //   lastIndex = j;
        // }
      }

      console.log('***i****', i, '***max****', max, '***lastIndex***', lastIndex);
      console.log('***j****', j, '***max****', max, '***lastIndex***', lastIndex);
    }

  }

  return reverseS.substring(lastIndex - max + 1, lastIndex + 1);
};

console.log(longestPalindrome('adceaa'));
// console.log(longestPalindrome('babad'));
// console.log(longestPalindrome('cbbd'));


