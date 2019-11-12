/*
 125. Valid Palindrome （easy）

 Question:
 Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 Note: For the purpose of this problem, we define empty string as valid palindrome.

 Example 1:
 Input: "A man, a plan, a canal: Panama"
 Output: true

 Example 2:
 Input: "race a car"
 Output: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
    s = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, '');
    for (let i = 0; i < s.length / 2; i++) {
        const prefix = s[i];
        const suffix = s[s.length - 1 -i];
        if(prefix!== suffix){
            return false;
        }
    }
    return true;
    // for (let i = s.length - 1; i >= 0; i--) {
    //     result += s[i];
    // }
    // return s === result;
};
console.log(isPalindrome("Damosel, a poem? A carol? Or a cameo pale? (So mad!)"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(""));