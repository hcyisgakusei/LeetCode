/*
498. 对角线遍历(中等)

给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。

示例:
输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

输出:  [1,2,4,7,5,3,6,8,9]
*/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */


var findDiagonalOrder = function (matrix) {
    const height = matrix.length;
    const width = height === 0 ? 0 : matrix[0].length;
    let i = 0;
    let j = 0;
    let direction = 'up';
    const result = [];
    while (result.length < height * width) {
      result.push(matrix[i][j]);

      if (direction === 'up') {
        if (i > 0 && j < width - 1) {
          i = i - 1;
          j = j + 1;
        } else {
          direction = 'down';
          if (i === 0 && j < width - 1) {
            j = j + 1;
          } else if (j === width - 1) {
            i = i + 1;
          }
        }
      } else {
        if (i < height - 1 && j > 0) {
          i = i + 1;
          j = j - 1;
        } else {
          direction = 'up';
          if (j === 0 && i < height - 1) {
            i = i + 1;
          } else if (i === height - 1) {
            j = j + 1;
          }
        }

      }
    }
    return result
  };

console.log(findDiagonalOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));

console.log(findDiagonalOrder([[6, 9, 7]]));
console.log(findDiagonalOrder([[2, 5], [8, 4], [0, -1]]));
