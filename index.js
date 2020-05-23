/*
53. Maximum Subarray
Question:
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the
largest sum and return its sum.


Example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
// const maxSubArray = function (nums) {
//   let result = nums[0];
//   let max = result;
//   for (let i = 1; i < nums.length; i++) {
//     if (result < 0) {
//       result = nums[i];
//     } else {
//       result += nums[i];
//     }
//     max = Math.max(max, result);
//   }
//   return max;
// };
//
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubArray([-2,-1]));

// class a {
//   constructor() {
//     console.log(1);
//   }
//   log(){
//     console.log("a.log");
//   }
// }
//
// class b extends a{
//   constructor() {
//     super();
//   }
//   log(){
//     console.log("b.log");
//     super.log();
//   }
// }
//
// const _b = new b();
// _b.log();

// Function.prototype.bind = function (obj, ...args) {
//   const _this = this;
//   return function () {
//     _this.apply(obj, [...args, ...arguments]);
//   }
// };
//
// const obj = {
//   a: 1,
//   b: 2
// };
//
// function log(a1, a2) {
//   console.log('***a***', this.a + a1);
//   console.log('***b***', this.b + a2);
// }
//
// const newLog = log.bind(obj, 2);
// console.log(newLog(3));


// Promise.all([Promise.resolve(1), Promise.reject(2)]).then((val) => {
//   console.log('****val****', val);
// }, (error) => {
//   console.log('****error****', error);
// });
//
// const p1 = new Promise((resolve, reject) => {
//   resolve('hello');
// }).then(result => result)
//   .catch(e => e);
//
// const p2 = new Promise((resolve, reject) => {
//   throw new Error('报错了');
// }).then(result => result)
//   .catch(e => e);
//
// Promise.all([p1, p2])
//   .then(result => console.log('***result***', result))
//   .catch(e => console.log(e));


// function quickSort(arr) {
//   function _quickSort(left, right) {
//     if (left >= right) return;
//     let i = left;
//     let j = right;
//     let pivot = arr[left];
//     while (i !== j) {
//       while (j > i && arr[j] >= pivot) {
//         j--;
//       }
//       while (j > i && arr[i] <= pivot) {
//         i++;
//       }
//
//       if (j > i) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//     [arr[left], arr[i]] = [arr[i], arr[left]];
//     _quickSort(left, i - 1);
//     _quickSort(i + 1, right);
//   }
//
//   _quickSort(0, arr.length - 1);
//
//   return arr;
// }
//
// console.log(quickSort([3, 4, 6, 4, 6, 68, 9, 3, 6, 9]));

//
// function flatten(arr) {
//   while (arr.some(item => Array.isArray(item))) {
//     arr = [].concat(...arr);
//   }
//   return arr;
// }
//
// console.log(flatten([1,[2,[3,[5]],8,],6,7]));

//
// class MyClass {
//   constructor() {
//   }
// }
//
// MyClass.prototype.data = {
//   name: 'abc',
//   age: 20,
// };
//
// let class1 = new MyClass();
// let class2 = new MyClass();
// console.log(class1.data.age === class2.data.age);
// class1.data.age  = 23;
// console.log(class2.data.age);

// class myVue {
//   constructor(){
//
//   }
// }
//
// myVue.prototype.data = {
//
// };

// class MyVue {
//   constructor(data) {
//     this.data = data;
//     return this;
//   }
// }
//
// const Button = new MyVue({
//   name: 'abc',
//   age: 20,
// });
//
// const button1 = new Button();
// button1.data.age = 23;
// const button2 = new Button();
// console.log(button2.data.age);
// function vueComponents() {
//
// }
//
// vueComponents.prototype.$options = {
//   data: {
//     age: 12
//   }
// };
//
// const component1 = new vueComponents();
// component1.$options.data.age = 24;
// const component2 = new vueComponents();
// console.log(component2.$options.data.age);

function sort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  return nums;
}

function quickSort(nums) {
  function _quickSort(left, right) {
    if (left >= right) return;
    let i = left, j = right, pivot = nums[left];
    while (i !== j) {
      while (j > i && nums[j] >= pivot) {
        j--;
      }
      while (j > i && nums[i] <= pivot) {
        i++
      }
      if (j > i) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
    [nums[i], nums[left]] = [nums[left], nums[i]];
    _quickSort(left, i - 1);
    _quickSort(i + 1, right);
  }

  _quickSort(0, nums.length - 1);
  return nums;
}

// console.log(sort([-29, 0, 3, 0, 1, -1, 5, 100, -35]));
// console.log(quickSort([-29, 0, 3, 0, 1, -1, 5, 100, -35]));
//


// const promise1 = Promise.resolve(3);
// const promise2 = Promise.resolve(42);
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });
//
// Promise.myAll = function (promiseAll) {
//   const resolveArr = [];
//   return new Promise(async (resolve, reject) => {
//     for (let i = 0; i < promiseAll.length; i++) {
//       try {
//         resolveArr.push(await promiseAll[i])
//       } catch (e) {
//         reject(e);
//       }
//     }
//     resolve(resolveArr);
//   });
// };
//
// Promise.myAll([promise1, promise2, promise3]).then((values) => {
//   console.log('resolve', values);
// }, (values) => {
//   console.log('reject', values);
// });

// 防抖
function debounce(wait, fn) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      return;
    }
    timer = setTimeout(() => {
      fn();
    }, wait);
  };
}

//  节流
function throttle(wait, fn) {
  let endTime = null;
  return function () {
    const now = new Date();
    if (!endTime || now - endTime >= wait) {
      fn();
      endTime = now;
    }
  }

}


// https://juejin.im/entry/58dfbe0361ff4b006b166388


// 继承
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log('speak1');
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    super.speak();
    console.log('speak2');
  }
}

function A(name) {
  this.name = name;
}

A.prototype.speak = function () {
  console.log('speak1', this.name);
};

function B() {
  A.call(this, ...arguments);
}

B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;

B.prototype.speak = function () {
  A.prototype.speak.call(this, ...arguments);
  console.log('speak2');
};

const b1 = new B('test');
b1.speak();

function transfer(str) {
  return str.replace(/-\w/g, (item) => item.toUpperCase())
}


console.log(transfer('ab-cd-ef'));

function transferUp(str) {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}


console.log(transferUp('testHost'));

// function money(num) {
//   const str = num.toString();
//  return str.replace(/\B(?=(\d{3})+$)/g,',');
// }

function money(num) {
  const numArr = num.toString().split('').reverse();
  return numArr.reduce((acc, cur, index) => {
    acc.push(cur);
    if (index !== numArr.length - 1 && (index + 1) % 3 === 0) {
      acc.push(',');
    }
    return acc
  }, []).reverse().join('');
}

console.log(money(100))
console.log(money(1000))
console.log(money(10000))
console.log(money(100000000))


function findTarget(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [i, map[target - nums[i]]];
    }
    map[nums[i]] = i;
    console.log(map)
  }
  return [];

}

console.log(findTarget([1,2,3,4,5],6));
