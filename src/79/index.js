/*
  79. Word Search（medium）

 Question:
 Given a 2D board and a word, find if the word exists in the grid.

 The word can be constructed from letters of sequentially adjacent cell,
 where "adjacent" cells are those horizontally or vertically neighboring.
 The same letter cell may not be used more than once.

 Example:

 board =
 [
   ['A','B','C','E'],
   ['S','F','C','S'],
   ['A','D','E','E']
 ]

 Given word = "ABCCED", return true.
 Given word = "SEE", return true.
 Given word = "ABCB", return false.
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
