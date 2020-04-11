/*
122. Best Time to Buy and Sell Stock II

 Question:
 Say you have an array for which the ith element is the price of a given stock on day i.
 Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
 Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

 Example 1:
 Input: [7,1,5,3,6,4]
 Output: 7
 Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

 Example 2:
 Input: [1,2,3,4,5]
 Output: 4
 Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.

 Example 3:
 Input: [7,6,4,3,1]
 Output: 0
 Explanation: In this case, no transaction is done, i.e. max profit = 0.
 */


/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    // let profit = 0;
    // let min = prices[0];
    // const length = prices.length;
    // for (let i = 0; i < length; i++) {
    //     if (prices[i] < min) {
    //         min = prices[i];
    //     } else {
    //         if (prices[i + 1] < prices[i] || (i === length - 1)) {
    //             profit += prices[i] - min;
    //             min = prices[i];
    //         }
    //     }
    // }
    // return profit;
    // 贪心算法
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i + 1] - prices[i] > 0) {
            profit += prices[i + 1] - prices[i];
        }
    }
    return profit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([7, 3, 4, 6, 1]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([]));
console.log(maxProfit([3, 2, 6, 5, 0, 3]));
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));