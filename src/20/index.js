/*
 20. Valid Parentheses (Easy)

Question:
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Note that an empty string is also considered valid.

    Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    if (s.length % 2 === 1) {
        return false;
    }
    while(~s.indexOf('()') || ~s.indexOf('{}') || ~s.indexOf('[]')){
      s = s.replace('()','').replace('{}','').replace('[]','');
    }
    return s.length === 0 ;
    // if (s.length % 2 === 1) {
    //     return false;
    // }
    // const startArr = ['(', '{', '['];
    // const endArr = [')', '}', ']'];
    // const result = [];
    // let starEnd = false;
    // for (let i = 0; i < s.length; i++) {
    //     if (~startArr.indexOf(s[i])) {
    //         if (starEnd) {
    //             return false;
    //         }
    //         result.push(startArr.indexOf(s[i]));
    //     }
    //     if (~endArr.indexOf(s[i])) {
    //         if (!starEnd) {
    //             starEnd = false;
    //         }
    //         if (result.length === 0 || endArr.indexOf(s[i]) !== result.pop()) {
    //             return false;
    //         }
    //     }
    // }
    // return result.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]]'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));