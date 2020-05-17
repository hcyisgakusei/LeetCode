/*
6.Z 字形变换(中等)
问题:
将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。


比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
L   C   I   R
E T O E S I I G
E   D   H   N


之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

请你实现这个将字符串进行指定行数变换的函数：

示例 1:
输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"

示例 2:
输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"

解释:
L     D     R
E   O E   I I
E C   I H   N
T     S     G


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// const convert = function (s, numRows) {
//     if (numRows === 1) {
//         return s;
//     }
//     const resultArr = Array.from({length: numRows}, () => '');
//     const range = numRows * 2 - 2;
//     for (let i = 0; i < s.length; i++) {
//         if (i % range < numRows) {
//             resultArr[i % range] = resultArr[i % range] + s[i];
//         } else {
//             resultArr[range - i % range] = resultArr[range - i % range] + s[i];
//         }
//     }
//     return resultArr.reduce((acc, cur) => {
//         return acc += cur;
//     }, '');
// };

const convert = (s, numRows) => {
  if (numRows === 1) return s;
  const numArr = Array.from({length: numRows}, (index) => []);
  let up = false;
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    numArr[index].push(s[i]);
    if (index >= numRows - 1 || index <= 0) {
      up = !up;
    }
    index = up ? index + 1 : index - 1;
  }
  return [].concat(...numArr).join('');
};

// console.log(convert('LEETCODEISHIRING', 3));
// console.log(convert('LEETCODEISHIRING', 4));
console.log(convert('AB', 1));
