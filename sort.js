// 冒泡
function sort1(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(sort1([2, 1, 4, 8, 6, 99, 21]));

//快排
function sort2(arr) {
    const quicklySort = (arrSort) => {
        if (arrSort.length <= 1) {
            return arrSort;
        }
        const left = [];
        const right = [];
        const middle = Math.floor(arrSort.length / 2);
        for (i = 0; i < arrSort.length; i++) {
            if (i === middle) continue;
            if (arrSort[i] < arrSort[middle]) {
                left.push(arrSort[i]);
            } else {
                right.push(arrSort[i]);
            }
        }
        return quicklySort(left).concat([arrSort[middle]], quicklySort(right));
    };
    return quicklySort(arr);
}

console.log(sort2([2, 1, 4, 8, 6, 99, 21]));