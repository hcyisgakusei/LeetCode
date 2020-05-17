const array = [1, [1, [2, [3, 4]], 5, [5, 6]], 7, [8, 9], 10];

// function flatten(arr) {
//   while(arr.some(item => Array.isArray(item))) {
//      [].concat(...arr);
//   }
//   return arr;
// }

function flatten(arr) {
  return arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, [])
}

console.log(flatten(array));

function steps(n, n1 = 1, n2 = 1) {
  if (n <= 1) {
    return n2;
  }
  return steps(n - 1, n2, n1 + n2);
}
console.log(steps(10));
