/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
  function quickSort(left, right) {
    if (left >= right) return;
    let i = left, j = right, pivot = nums[left];
    while (i !== j) {
      while (j > i && nums[j] >= pivot) {
        j--
      }
      while (j > i && nums[i] <= pivot) {
        i++
      }
      if (j > i) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
    [nums[i], nums[left]] = [nums[left], nums[i]];
    quickSort(left, i - 1);
    quickSort(i + 1, right);
  }

  quickSort(0, nums.length - 1);
  return nums[nums.length - k];
};

console.log(findKthLargest([3,2,1,5,6,4],2));
console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4));
