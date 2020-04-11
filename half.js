function halfSearch(arr, target) {
    return halfSearchHelper(0, arr.length - 1);

    function halfSearchHelper(left, right) {
        if (left > right) return -1;
        const half = Math.floor((left + right) / 2);
        if (arr[half] === target) return half;
        if (arr[half] > target) {
            return halfSearchHelper(left, half - 1);
        }
        if (arr[half] < target) {
            return halfSearchHelper(half + 1, right);
        }
    }
}

console.log(halfSearch([1, 2, 3, 4, 4, 5, 6], 3));
