/*
* 函数防抖 : 在事件触发wait 毫秒后才会执行函数，如果在wait时间段内又被触发，要重新计时
*
* 生活中的实例 : 如果有人进入电梯（触发事件），则电梯在10秒后出发，在这10秒后又有人进入了电梯，需要重新计时。
*    需要有一个10秒的间隔无人进入电梯，电梯方可出发。
*
* 使用场景 :
*   1. 给按钮添加函数防抖防止表单多次提交
*   2. 输入框连续输入进行AJAX校验时，用函数防抖能有效减少请求次数
*   3. 判断scroll是否滑到底部，滚动事件 + 函数防抖
*
*/

/**
 * @params {function} func
 * @params {number} wait
 */
function debounce(func, wait) {
    let timer = null;
    return (...arg) => {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            func(...arg);
        }, wait);
    }
}

const fn = function (str1,str2) {
    console.log(str1,str2,new Date());
};

setInterval(debounce(fn.bind(undefined,'boom' ,'bibi'),500),1000) ;// 第一次在1500ms后触发，之后每1000ms触发一次

setInterval(debounce(fn.bind(undefined,'boom' ,'lulu'),2000),1000); // 不会触发一次（我把函数防抖看出技能读条，如果读条没完成就用技能，便会失败而且重新读条）

