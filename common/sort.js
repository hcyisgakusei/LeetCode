// 冒泡
// function sort1(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 const temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
//
// console.log(sort1([2, 1, 4, 8, 6, 99, 21]));

//快排
function quickSort(arr) {
  function _quickSort(left, right) {
    if (left >= right) return;
    let i = left, j = right, pivot = arr[left];
    while (i !== j) {
      while (j > i && arr[j] >= pivot) {
        j--;
      }
      while (j > i && arr[i] <= pivot) {
        i++;
      }
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    if (j > i) {
      [arr[left], arr[i]] = [arr[i], arr[left]];
    }
    _quickSort(left, i - 1);
    _quickSort(i + 1, right);
  }

  _quickSort(0, arr.length - 1);
  return arr;
}

console.log(quickSort([99, 2, 1, 4, 5, 5, 8, 6, 99, 21]));

// 冒泡
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log(sort([99, 2, 1, 4, 5, 5, 8, 6, 99, 21]));
// function sort2(arr) {
//     const quicklySort = (arrSort) => {
//         if (arrSort.length <= 1) {
//             return arrSort;
//         }
//         const left = [];
//         const right = [];
//         const middle = Math.floor(arrSort.length / 2);
//         for (i = 0; i < arrSort.length; i++) {
//             if (i === middle) continue;
//             if (arrSort[i] < arrSort[middle]) {
//                 left.push(arrSort[i]);
//             } else {
//                 right.push(arrSort[i]);
//             }
//         }
//         return quicklySort(left).concat([arrSort[middle]], quicklySort(right));
//     };
//     return quicklySort(arr);
// }
//
// console.log(sort2([2, 1, 4, 8, 6, 99, 21]));
