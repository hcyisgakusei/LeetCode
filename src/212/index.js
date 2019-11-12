/*
 212. Word Search II（hard）

 Question:
 Given a 2D board and a list of words from the dictionary, find all words in the board.

 Each word must be constructed from letters of sequentially adjacent cell,
 where "adjacent" cells are those horizontally or vertically neighboring.
 The same letter cell may not be used more than once in a word.

 Example:

 Input:
 board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
 ]
 words = ["oath","pea","eat","rain"]

 Output: ["eat","oath"]
 */

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

// exist : 79. Word Search（medium）
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

const findWords = function (board, words) {
    const result =[];
    for (let i = 0; i < words.length; i++) {
        if(exist(board,words[i])){
            result.push(words[i]);
        }
    }
    return result;
};

console.log(findWords( [
    ['o','a','a','n'],
    ['e','t','a','e'],
    ['i','h','k','r'],
    ['i','f','l','v']
],["oath","pea","eat","rain"]));