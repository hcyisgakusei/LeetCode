/*
994. Rotting Oranges (Easy)
Question:
In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

Example1:
Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example2:
Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:
Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.

Note:
1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] is only 0, 1, or 2.

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
    // BFS（Breadth-First-Search） 广度优化搜索求最短路径
    // 将所有腐烂橘子放在队列中，并得到新鲜橘子数
    let queue = [];
    let freshOrangeCount = 0;
    const boardWidth = (grid[0] || 0).length;
    const boardHeight = grid.length;

    for (let i = 0; i < boardHeight; i++) {
        for (let j = 0; j < boardWidth; j++) {
            if (grid[i][j] === 1) {
                freshOrangeCount++;
            }
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            }
        }
    }
    let times = 0;
    // 遍历队列
    while (queue.length && freshOrangeCount) {
        const newQueue = [];
        let infectedOrangeCount = 0;
        while (queue.length) {
            const rottenOrange = queue.splice(0, 1)[0];
            infectedOrangeCount += infectedOrange(rottenOrange, newQueue);
        }
        if (infectedOrangeCount > 0) {
            freshOrangeCount -= infectedOrangeCount;
            times++;
        } else {
            if (freshOrangeCount > 0) {
                return -1;
            }
        }
        queue = newQueue;
    }

    // 腐败橘子影响周边的橘子
    function infectedOrange(rottenOrange, q) {
        let infectedOrangeCount = 0; // 本轮影响的橘子数
        const i = rottenOrange[0]; // 腐败橘子的X坐标
        const j = rottenOrange[1]; // 腐败橘子的Y坐标
        // 找出腐败橘子四周的橘子
        const existOrange = (i, j) => {
            return i >= 0 && i < boardHeight && j >= 0 && j < boardWidth;
        };
        if (existOrange(i - 1, j) && grid[i - 1][j] === 1) {
            grid[i - 1][j] = 2;
            q.push([i - 1, j]);
            infectedOrangeCount++;
        }
        if (existOrange(i + 1, j) && grid[i + 1][j] === 1) {
            grid[i + 1][j] = 2;
            q.push([i + 1, j]);
            infectedOrangeCount++;
        }
        if (existOrange(i, j - 1) && grid[i][j - 1] === 1) {
            grid[i][j - 1] = 2;
            q.push([i, j - 1]);
            infectedOrangeCount++;
        }
        if (existOrange(i, j + 1) && grid[i][j + 1] === 1) {
            grid[i][j + 1] = 2;
            q.push([i, j + 1]);
            infectedOrangeCount++;
        }
        return infectedOrangeCount;
    }

    return freshOrangeCount > 0 ? -1 : times;
};

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]])); // 4
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]])); // -1
console.log(orangesRotting([[0, 2]])); // 0
console.log(orangesRotting([[0, 1]])); // -1
console.log(orangesRotting([[1, 1, 1, 1, 1]])); // -1
console.log(orangesRotting([[1, 1, 2, 0, 2, 0]])); // 2
console.log(orangesRotting([[1, 2, 1, 1, 2, 1, 1]])); //2