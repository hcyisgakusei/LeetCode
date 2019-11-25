/*
 127. Word Ladder（medium）

 Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
Only one letter can be changed at a time.


Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.


Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
*/


/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function (beginWord, endWord, wordList) {
    if (~wordList.indexOf(endWord)) {
        return 0;
    }
    // 判断两个单词是不是只相差一个字母,word1 和 word2 长度一样
    const canTransform = (word1, word2) => {
        let diffNum = 0;
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) {
                diffNum += 1;
                if (diffNum > 1) return false;
            }
        }
        return diffNum === 1;
    };

    let result = 0;

    for (let i = 0; i < wordList.length; i++) {



        const transformFromWordList = (index) => {
            let word = beginWord;
            let transformTime = 0;
            for (let i = index; i < wordList.length; i++) {
                if (canTransform(word, wordList[i])) {
                    word = wordList[i];
                    transformTime += 1;
                    if (word === endWord) {
                        return transformTime;
                    } else {
                        transformFromWordList(0);
                    }
                }
            }
            return transformTime;

        };



        const transformResult = transformFromWordList(i);
        if (transformResult !== 0 && transformResult < result) {
            result = transformResult;
        }
    }
    return result;

};

console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"]));
console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log"]));
