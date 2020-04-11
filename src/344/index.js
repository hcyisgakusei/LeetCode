/*
 344. Reverse String （easy）

 Question:
 Write a function that reverses a string. The input string is given as an array of characters char[].
 Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

 You may assume all the characters consist of printable ascii characters.

 Example 1:
 Input: ["h","e","l","l","o"]
 Output: ["o","l","l","e","h"]

 Example 2:
 Input: ["H","a","n","n","a","h"]
 Output: ["h","a","n","n","a","H"]
 */

/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
    const length = s.length;
    for (let i = 0; i < (length - 1) / 2; i++) {
        const current = s[i];
        s[i] = s[length - 1 - i];
        s[length - 1 - i] = current;
    }
    return s;
};
console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["H","a","n","n","a","h"]));
