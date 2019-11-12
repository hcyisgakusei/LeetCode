/*
  242. Valid Anagram （easy）

 Question:
 Given two strings s and t , write a function to determine if t is an anagram of s.

 Example 1:
 Input: s = "anagram", t = "nagaram"
 Output: true

 Example 2:
 Input: s = "rat", t = "car"
 Output: false
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const hash = {};
    for (let chat of s) {
        hash[chat] = hash[chat] + 1 || 1;
    }
    for (let chat of t) {
        if (!hash[chat]) return false;
        hash[chat] -- ;
        if(hash[chat] === 0){
            delete hash[chat];
        }

    }
    return true;
    // return s.split('').sort().join('') === t.split('').sort().join('');
    // for (let i = 0; i < s.length; i++) {
    //     if (t.indexOf(s[i]) === -1) {
    //         return false;
    //     } else {
    //       t = t.replace(s[i],'');
    //     }
    // }
    // return t.length === 0;
};

console.log(isAnagram('', ''));
console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
