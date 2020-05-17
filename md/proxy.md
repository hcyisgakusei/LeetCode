## es6 新特性 Proxy

### Proxy 可以做些啥

可以拦截以下方法的调用

- getPrototypeOf
- setPrototypeOf
- isExtensible
- preventExtensions
- getOwnPropertyDescriptor
- defineProperty
- getOwnPropertyNames
- getOwnPropertySymbols

还可以拦截一些操作符

- in
- delete
- new

本身一些操作的拦截

- 拦截自身属性的get和set
- 拦截方法调用

### 与Object.defineProperty 有和不同

- Object.defineProperty 无法拦截数组的修改，proxy 可以
- proxy 底层做了性能优化，proxy 可以拦截的东西比 Object.defineProperty 更多，但是兼容性比较差

### vue 3.0 使用 proxy 的原因

- proxy 可以拦截对数组的修改
- proxy 可以拦截整个对象，Object.defineProperty 需要遍历每一个属性去挟持



```javascript
((...arg)=>{
  const obj = {};
  obj.__proto__ = MyClass.prototype;
  const result = MyClass.call(obj,...arg); 
  return typeof result === 'object' ? result : obj;
})();
```


