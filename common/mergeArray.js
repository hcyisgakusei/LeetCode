function merge(arr1, arr2) {
    let result = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] <= arr2[0]) {
            result.push(arr1.shift());
        } else {
            result.push(arr2.shift());
        }
    }

    result.push(...arr1,...arr2);
    return result;
}

console.log(merge([1, 2, 4], [1,2, 5, 8]));
console.log(merge([2], [1, 4]));
// console.log(/(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])^([a-zA-Z0-9_]){8,10}$/g,);

console.log('100000'.replace(/(?!\b)(?=(\d{3}$))/g,','));
// [1, 2, 3].reduce((acc, cur) => acc + cur, 0);

// function test(key) {
//     var object = {};
//     var index = 1;
//     return (function () {
//         object[key] = index++;
//         return object;
//     })();
// }
// const test = function () {
//     const object ={};
//     let index = 1;
//     return function (key) {
//         object[key] =index++;
//         return object;
//     }
// }();
// const test = (() => {
//     const object = {};
//     let index = 1;
//     return function(key) {
//         object[key] = index++;
//         return object
//     }
// })();
// console.log(test('a'));
// console.log(test('b'));
// console.log(test('c'));


// var test = (function (a) {
//     this.a = a;
//     return function (b) {
//         console.log('a:',this.a);
//         console.log('b:',b );
//         return this.a + b;
//     }
// })((function (a, b) {
//     return a;
// })(1, 2));
// console.log(test(4));
