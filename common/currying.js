function add(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
}

function curry(fn, ...arr) {
    let length = fn.length;
    return function () {
        arr.push(...arguments);
        if (arr.length >= length) {
            return fn(...arr);
        } else {
            return curry(fn, ...arr);
        }
    }
}

const curryAdd = curry(add, 1, 2);
console.log(curryAdd(3, 4, 5)(6,7,8));


