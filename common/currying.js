function add(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
}

function curry(fn,...arr) {
    let length = fn.length;
    return function (...args) {
        arr.push(...args);
        if (arr.length === length) {
            return fn(...arr);
        } else {
            return curry(fn, ...arr);
        }
    }
}

const curryAdd = curry(add);
console.log(curryAdd(1,2)(3,4,5)(6));


