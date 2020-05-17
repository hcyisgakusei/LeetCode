function add(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

// function curry(fn, ...arr) {
//     let length = fn.length;
//     return function () {
//         arr.push(...arguments);
//         if (arr.length >= length) {
//             return fn(...arr);
//         } else {
//             return curry(fn, ...arr);
//         }
//     }
// }
// const curry = (() => {
//   const arr = [];
//
//   function _curry(fn) {
//     return function () {
//       arr.push(...arguments);
//       if (arr.length >= fn.length) {
//         return fn(...arr);
//       } else {
//         return _curry(fn);
//       }
//     }
//   }
//
//   return _curry;
// })();
//
// const curryAdd = curry(add);
// console.log(curryAdd(1, 2)(3, 4, 5)(6, 7, 8));


function quickSort(arr) {
  function _quickSort(left, right) {
    if(left>=right) return;
    let i = left, j = right, pivot = arr[left];
    while (i !== j) {
      while (j > i && arr[j] >= pivot) {
        j--;
      }
      while (j > i && arr[i] <= pivot) {
        i++;
      }
      if (j > i) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i], arr[left]] = [arr[left], arr[i]];
    _quickSort(left, i - 1);
    _quickSort(j + 1, right);
  }

  _quickSort(0, arr.length - 1);
  return arr;
}

console.log(quickSort([2,1,3,6,7,9,3]));
