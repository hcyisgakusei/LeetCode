function search(nums, target) {
    function searchHelper(left, right) {
        if (left > right) return 0;
        const middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) {
            let count = 1;
            let leftBorder = middle;
            while (nums[leftBorder - 1] === nums[leftBorder]) {
                count++;
                leftBorder--;
            }
            let rightBorder = middle;
            while (nums[rightBorder] === nums[rightBorder + 1]) {
                count++;
                rightBorder++;
            }
            return count;
        }
        if (nums[middle] > target) {
            return searchHelper(left, middle - 1);
        }
        return searchHelper(middle + 1, right);
    }

    return searchHelper(0, nums.length - 1);
};


console.log(search([5, 7, 7, 8, 8, 10], 8));
console.log(search([5, 7, 8, 9, 10], 10));
console.log(search([5, 7, 8, 9, 10], 100));