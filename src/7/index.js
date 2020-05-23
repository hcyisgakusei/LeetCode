/*
7. Reverse Integer
问题:
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。


/**
 * @param {number} x
 * @return {number}
 */
// const reverse = function (x) {
//     const max = Math.pow(2, 31);
//     let flag = x < 0;
//     flag ? x = -x : '';
//     const length = Math.floor(Math.log10(x));
//     let result = 0;
//     for (let i = 0; i <= length; i++) {
//         const cur = x % 10;
//         if (flag && ((max - cur) / 10 <= result) || ((max - cur - 1) / 10 <= result)) {
//             return 0;
//         }
//         result = result * 10 + cur;
//         x = Math.floor(x / 10);
//
//     }
//     return flag ? 0 - result : result;
// };

const reverse = function (x) {
  const flag = x > 0;
  const max = Math.pow(2, 31);
  if (!flag) x = -x;
  let result = 0;
  while (x) {
    const cur = x % 10;
    if (flag) {
      if ((max - cur - 1) / 10 <= result) {
        return 0;
      }
    } else {
      if ((max - cur) / 10 <= result) {
        return 0;
      }
    }
    result = result * 10 + cur;
    x = (x - cur) / 10;
  }
  return flag ? result : -result;
};
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1563847412));


