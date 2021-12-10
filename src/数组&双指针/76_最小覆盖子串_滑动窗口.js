/**
 * 76. 最小覆盖子串 【困难】
 * 链接：https://leetcode-cn.com/problems/minimum-window-substring/
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。
 * 如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 *
 * 注意：
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 *
 * 示例 1：
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 *
 * 示例 2：
 * 输入：s = "a", t = "a"
 * 输出："a"
 *
 * 示例 3：
 * 输入: s = "a", t = "aa"
 * 输出: ""
 * 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
 * 因此没有符合条件的子字符串，返回空字符串。
 *
 */


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  /*
  * 思路和算法
  * 本问题要求我们返回字符串 s 中包含字符串 t 的全部字符的最小窗口。我们称包含 t 的全部字母的窗口为「可行」窗口。
  * 我们可以用滑动窗口的思想解决这个问题。在滑动窗口类型的问题中都会有两个指针，一个用于「延伸」现有窗口的 r 指针，和一个用于「收缩」窗口的指针。
  * 在任意时刻，只有一个指针运动，而另一个保持静止。
  * 我们在 s 上滑动窗口，通过移动 r 指针不断扩张窗口。当窗口包含 t 全部所需的字符后，如果能收缩，我们就收缩窗口直到得到最小窗口。
  * */
  if (s.length < t.length) return '';
  const sArr = s.split(''), tArr = t.split(''), sLen = sArr.length, tLen = tArr.length, sMap = {}, tMap = {};
  let minWindow = sLen + 1, begin = 0, left = 0, right = 0, distance = 0; // left:左窗口 right：右窗口 distance：匹配数量
  tArr.forEach(str => {
    tMap[str] = tMap[str] ? tMap[str] + 1 : 1;
    sMap[str] = 0;
  });
  while (right < sLen) {
    // 延伸窗口，找到符合条件的字符串
    const rightStr = sArr[right];
    if (!tMap[rightStr]) {
      right++;
    }else {
      if (sMap[rightStr] < tMap[rightStr]) {
        distance++;
      }
      sMap[rightStr] = sMap[rightStr] + 1;
      right++;
    }
    while (distance === tLen && right - left >= tLen) { // 收缩窗口，找到最短子串
      if (right - left < minWindow) {
        minWindow = right - left;
        begin = left;
      }
      const leftStr = sArr[left];
      if (!tMap[leftStr]) {
        left++;
      }else{
        if (sMap[leftStr] <= tMap[leftStr]) {
          distance--;
        }
        sMap[leftStr] = sMap[leftStr] - 1;
        left++;
      }

    }
  }
  if (minWindow === sLen + 1) {
    return '';
  }
  return s.substring(begin, begin + minWindow);
};
console.log(minWindow('ADOBECODEBANC', 'ABC')); // "BANC"
console.log(minWindow('a', 'a')); // "a"
console.log(minWindow('a', 'aa')); //  ""
