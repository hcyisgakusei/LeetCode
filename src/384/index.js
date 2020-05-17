/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const nums = [].concat(this.nums);
  for (let i = nums.length - 1; i > 0; i--) {
    const index = Math.floor(Math.random() * (i + 1));
    [nums[i], nums[index]] = [nums[index], nums[i]]
  }
  return nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

var obj = new Solution([1, 2, 3]);
var param_1 = obj.reset();
var param_2 = obj.shuffle();
console.log(param_2);
console.log(param_1);
