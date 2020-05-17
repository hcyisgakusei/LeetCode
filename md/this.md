# this 、apply、 call、bind

## this的指向

在ES5中，**this永远指向最后调用它的那个对象**

**匿名函数的 this 永远指向 window**

- **例子1**

```javascript
var name = "windowName";
function a(){
    var name = "aName";
    console.log(this.name); // windowsName
    console.log("inner",this); // inner: Window
}
a();
console.log("outer:",  this); // outer: Window
```

“**this 永远指向最后调用它的那个对象**”，调用 `a` 的地方 `a();`，前面没有调用的对象那么就是全局对象 window，这就相当于是 `window.a()`；注意，这里我们没有使用严格模式，如果使用严格模式的话，全局对象就是 `undefined`，那么就会报错 `Uncaught TypeError: Cannot read property 'name' of undefined`。

- **例子2**
  
  ```javascript
    var name = "windowsName";
    var a = {
         name: "aName",
         fn : function () {
              console.log(this.name);      // aName
          }
     }
     a.fn();
  ```
  
  函数`fn`是对象a调用的，所有`this`指向的就是`a`

- **例子3**

```javascript
 var name = "windowsName";
 var a = {
       name: "aName",
       fn : function () {
       console.log(this.name); // aName
    }
 }
 window.a.fn();
```

因为**this永远指向最后调用它的那个对象**，所以`fn`中的`this`还是指向`a`

- **例子4**

```javascript
 var name = "windowsName";
 var a = {
        name :"aName",
        fn : function () {
            console.log(this.name);      // windowsName
        }
  }
  var f = a.fn;
  f();
```

因为虽然将 `a` 对象的` fn` 方法赋值给变量` f `了，但是没有调用，**this 永远指向最后调用它的那个对象**。由于刚刚的 `f` 并没有调用，所以 `fn()` 最后仍然是被 `window` 调用的。所以 `this` 指向的也就是 `window`。

- **例子5**
  
  ```javascript
    var name = "windowsName";
    function fn() {
          var name = "fnName";
          innerFunction();
          function innerFunction() {
              console.log(this.name);      // windowsName
          }
     }
    fn();
  ```
  
  记住：**this永远指向最后调用它的那个对象！！！！**

## 改变this指向

- 使用 ES6 的箭头函数
- 在函数内部使用 `_this = this`
- 使用 `apply`、`call`、`bind`
- new 实例化一个对象

```javascript
var name = "windowsName";
var a = {
        name : "aName",
        func1: function () {
            console.log(this.name)     
        },
        func2: function () {
            setTimeout( function () {
                this.func1()
            },100);
        }
    };
a.func2();     // this.func1 is not a function
```

是会报错，因为最后调用 `setTimeout` 的对象是 `window`，但是在 window` `中并没有 `func1` 函数。

## 箭头函数

**箭头函数里面根本没有自己的`this`，而是引用外层的`this`。**

**箭头函数的this始终指向函数定义时的this，而非执行时。** 箭头函数需要记着这句话：“箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值。如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined”。

```javascript
 var name = "windowsName";
 var a = {
        name : "aName",
        func1: function () {
            console.log(this.name)     
        },
        func2: function () {
            setTimeout( () => {
                this.func1()
            },100);
        }
    };
 a.func2();     // aName
```

## 在函数内部使用 `_this = this`

在不使用es6的情况下，那么这种方式应该是最简单的不会出错的方式了，我们是先将调用这个函数的对象保存在变量 `_this` 中，然后在函数中都使用这个 `_this`，这样 `_this` 就不会改变了。

```javascript
 var name = "windowsName";
 var a = {
        name : "aName",
        func1: function () {
            console.log(this.name)     
        },
        func2: function () {
            var _this = this;
            setTimeout( function() {
                _this.func1()
            },100);
        }
    };
 a.func2();  // aName
```

在 `func2` 中，首先设置 `var _this = this;`，这里的 `this` 是调用 `func2` 的对象 `a`，为了防止在 `func2` 中的 setTimeout 被 `window` 调用而导致的在 `setTimeout` 中的 `this` 为 `window`。我们将 `this`(指向变量 `a`) 赋值给一个变量 `_this`，这样，在 `func2` 中我们使用 `_this` 就是指向对象 `a` 了。

## 使用 apply、call、bind

### apply

```javascript
  var a = {
      name : "aName",
      func1: function () {
           console.log(this.name); // 'aName'
       },
      func2: function () {
          (function(str1,str2) {
            console.log(`${str1} & ${str2}`); // 'test1 & test2'
            this.func1();
           }).apply(a,['test1','test2']);
       }
    };

  a.func2();       
```

### call

```javascript
  var a = {
      name : "aName",
      func1: function () {
           console.log(this.name)
       },
      func2: function () {
           (function(str1,str2) {
             console.log(`${str1} & ${str2}`); // 'test1 & test2'
             this.func1();
           }).call(a,'test1','test2');
       }
    };

  a.func2();        // aName
```

### bind

```javascript
  var a = {
      name : "aName",
      func1: function () {
           console.log(this.name)
       },
      func2: function () {
           (function(str1,str2) {
             console.log(`${str1} & ${str2}`); // 'test1 & test2'
             this.func1();
           }).bind(a,'test1','test2')();
       }
    };

  a.func2();        // aName
```

### 

### new 的过程

```javascript
// new myFunction
(()=>{
    const obj = {};
    obj.__proto__ = myFunction.propertype;
    const result = myFunction.call(obj,...arguments);
   return typeof result === 'object' ? result : obj;
})();
```
