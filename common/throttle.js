/*
* 函数节流 : 在 wait 毫秒内最多执行 func 一次的函数。如果在同一个单位时间内某事件被触发多次，只有一次能生效。
*
* 使用场景 :
*   1. 游戏中的刷新率
*   2. DOM元素拖拽
*   3. Canvas画笔功能
*
*
*/

/**
 * @params {function} func
 * @params {number} wait
 */
function throttle(func, wait) {
    let lastTime = null;
    return (...arg) => {
        const now = new Date();
        if (!lastTime || now - lastTime > wait) {
            func(...arg);
            lastTime = now;
        }

    }
}

let fn = (str1, str2,) => {
    console.log(str1, str2, new Date());
};

setInterval(throttle(fn.bind(undefined, 'boom', 'bibi'), 1000,), 10);


