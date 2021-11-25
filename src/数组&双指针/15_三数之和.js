/**
 * 15. 三数之和 【中等】
 * 链接：https://leetcode-cn.com/problems/3sum/
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 *
 * 示例 1：
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 *
 * 示例 2：
 * 输入：nums = []
 * 输出：[]
 *
 * 示例 3：
 * 输入：nums = [0]
 * 输出：[]
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  /*
  * 算法流程：
  *  1. 特判，对于数组长度 nn，如果数组为 [] 或者数组长度小于 3，返回 []。
  *  2. 对数组进行排序。
  *  3. 遍历排序后数组：
  *     若 nums[i]>0：因为已经排序好，所以后面不可能有三个数加和等于 0，直接返回结果
  *     如果 nums[i] === nums[i-1]，则说明该数字重复，会导致结果重复，所以应该跳过
  *     令左指针 L=i+1，右指针 R=n-1，当 L< R 时，执行循环：
  *     当 sum == 0 时，nums[L] == nums[L+1] 则会导致结果重复，应该跳过，L++; nums[R] == nums[R-1] 则会导致结果重复，应该跳过，R--
  *     若和大于 0，说明 nums[R] 太大，R 左移
  *     若和小于 0，说明 nums[L] 太小，L 右移
  *
  * */
  if (nums.length < 3) return [];
  nums.sort();
  const result = [];
  let left, right = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    // if (nums[i] === nums[i - 1]) continue;
    left = i + 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        // if (nums[left] === nums[left + 1]) left++;
        // if (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([3, 0, -2, -1, 1, 2])); // [[-2,-1,3],[-2,0,2],[-1,0,1]]
console.log(threeSum([]));
