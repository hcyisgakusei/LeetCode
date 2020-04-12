首先浏览器有一个执行栈，浏览器在解析执行代码的过程中，会将同步执行的代码放在执行栈中，执行完同步代码之后会清空执行栈。
在执行同步代码过程中，如果遇到promise，在执行promise的resolve或reject方法后，会将then方法放在微队列中。
setTimeOut会有一个线程在执行，等时间到了就会将里面方法放在宏任务中。
会把微列队里的第一个方法取出，放在执行栈中执行。
每次都会先去微队列看是否有待执行任务，然后没有就去宏队列中取出第一个方法，放在执行栈中执行。

```javascript
console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3)
  });
});

new Promise((resolve, reject) => {
  console.log(4)
  resolve(5)
}).then((data) => {
  console.log(data);
})

setTimeout(() => {
  console.log(6);
})

console.log(7);
```