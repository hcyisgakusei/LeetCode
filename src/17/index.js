/*
17. Letter Combinations of a Phone Number (Medium)
Question:
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
    const twoArrCombinations = (arr1, arr2) => {
        const result = [];
        arr1.forEach((arr1Item) => {
            arr2.forEach((arr2Item) => {
                result.push(`${arr1Item}${arr2Item}`);
            });
        });
        return result;
    };
    const mapObj = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    };
    const digitsArr = [];
    for (let i = 0; i < digits.length; i++) {
        digitsArr.push(mapObj[digits[i]])
    }
    while (digitsArr.length > 1) {
        const combinations = twoArrCombinations(digitsArr.shift(), digitsArr.shift());
        digitsArr.unshift(combinations);
    }
    return digitsArr[0] || [];
};
// console.log(letterCombinations(''));
// console.log(letterCombinations('2'));
// console.log(letterCombinations('234'));