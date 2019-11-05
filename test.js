function stringconcat() {
    return [...arguments].join("+");
}

stringconcat.prefix = function (prefix) {
    // return function () {
    //     return stringconcat.call(stringconcat, prefix, ...arguments);
    // }
     return stringconcat.bind(null,prefix)
    // return function () {
    //     return stringconcat(prefix, ...arguments);
    // }
};

const result1 = stringconcat("a", "b");
// result1 = "a+b"
const stringconcatWithPrefix = stringconcat.prefix("hellworld"); // prefix的实现
const result2 = stringconcatWithPrefix("a", "b", "c");
// result2 = "hellworld+a+b+c"

console.log(result1);
console.log(result2);

let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
    name: '姓名',
    age: 18
};
render(template, data); // 我是姓名，年龄18，性别undefined

// function render(template, data) {
//     const reg = /\{\{(\w+)\}\}/; // 模板字符串正則
//     if (reg.test(template)) { // 判斷模板裏是否有模板字符串
//         const name = reg.exec(template)[1]; // 查找當前模板裏第一個模板字符串的字段
//         template = template.replace(reg, data[name]); // 將第一個模板字符串渲染
//         return render(template, data); // 遞歸的渲染並返回渲染後的結構
//     }
//     return template; // 如果模板沒有模板字符串直接返回
// }


function render(template, data) {
  return  template.replace(/\{\{(\w+)\}\}/g, function (x) {
        return data[/\w+/.exec(x)[0]];
    });
}