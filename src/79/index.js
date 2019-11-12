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
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const exist = function (board, word) {
    let result = false;
    const check = (i, j, characterIndex) => {
        if (i < 0 || j < 0 || i >= boardHeight || j >= boardWidth) {
            return;
        }
        if (result || board[i][j] !== word[characterIndex]) {
            return;
        }
        if (word.length - 1 === characterIndex) { // last character
            return result = true;
        }


        board[i][j] = '';
        characterIndex = characterIndex + 1;

        check(i - 1, j, characterIndex);
        check(i + 1, j, characterIndex);
        check(i, j - 1, characterIndex);
        check(i, j + 1, characterIndex);

        board[i][j] = word[characterIndex - 1]; // reset board
    };

    const boardWidth = (board[0] || []).length;
    const boardHeight = (board).length;

    for (let i = 0; i < boardHeight; i++) {
        for (let j = 0; j < boardWidth; j++) {
            check(i, j, 0);
        }
    }
    return result;
};

console.log(exist([["a", "b"], ["c", "d"]], 'bc'));
console.log(exist([
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
], 'SEE'));
console.log(exist([
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
], 'CESCC'));
console.log(exist( [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
], 'ABCCED'));

console.log(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]],
    "ABCESEEEF"));
