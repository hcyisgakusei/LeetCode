## JS类型判断

#### js7种数据类型

> **基本类型：** Boolean、Number、String、Undefined、Null、Symbol
> 
> **引用类型：** Object

**基本类型**也称为简单类型，由于其占据空间固定，是简单的数据段，为了便于提升变量查询速度，将其存储在栈中，即按值访问。

**引用类型**也称为复杂类型，由于其值的大小会改变，所以不能将其存放在栈中，否则会降低变量查询速度，因此，其值存储在堆(heap)中，而存储在变量处的值，是一个指针，指向存储对象的内存处，即按址访问。引用类型除 Object 外，还包括 Function 、Array、RegExp、Date 等。

### 数据类型判断的4种方法

- #### typeof

> typeof 是一个操作符，其右侧跟一个一元表达式，并返回这个表达式的数据类型。返回的结果用该类型的字符串(全小写字母)形式表示，包括以下 7 种：number、boolean、symbol、string、object、undefined、function 等。

```javascript
typeof ''; // string 有效
typeof 1; // number 有效
typeof Symbol(); // symbol 有效
typeof true; //boolean 有效
typeof undefined; //undefined 有效
typeof null; //object 无效
typeof [] ; //object 无效
typeof new Function(); // function 有效
typeof new Date(); //object 无效
typeof new RegExp(); //object 无效
```

1. 对于基本类型，除 null 以外，均可以返回正确的结果。

2. 对于引用类型，除 function 以外，一律返回 object 类型。
- #### instanceof

> instanceof 是用来判断 A 是否为 B 的实例，表达式为：A instanceof B，如果 A 是 B 的实例，则返回 true,否则返回 false。 在这里需要特别注意的是：**instanceof 检测的是原型**

我们用一段伪代码来模拟其内部执行过程：

```javascript
instanceof(A,B)=>{
    return A.__proto__ === B.prototype;
}
```

```javascript
[] instanceof Array; // true
{} instanceof Object;// true
new Date() instanceof Date;// true

function Person(){};
new Person() instanceof Person;

[] instanceof Object; // true
new Date() instanceof Object;// true
new Person instanceof Object;// true
```

instanceof 能够判断出 [ ] 是Array的实例，但它认为 [ ] 也是Object的实例

[ ].__proto__  指向 Array.prototype，而 Array.prototype.__proto__ 又指向了Object.prototype，最终 Object.prototype.__proto__ 指向了null，标志着原型链的结束。因此，[]、Array、Object 就在内部形成了一条原型链

**instanceof 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型。**

针对数组的这个问题，ES5 提供了 **Array.isArray()** 方法 。

- #### constructor

当一个函数 F被定义时，JS引擎会为F添加 prototype 原型，然后再在 prototype上添加一个 constructor 属性，并让其指向 F 的引用。

```javascript
''.constructor === String; // true
new Number(1).constructor === Number; // true
new Function().constructor === Function; // true
new Date().constructor === Date; // true
new Error().constructor === Error; // true
[].constructor === Array; // true
({}).constructor ===Object; // true
document.constructor === HTMLDocument; // true
window.constructor === Window; // true
```

1. null 和 undefined 是无效的对象，因此是不会有 constructor 存在的，这两种类型的数据需要通过其他方式来判断。

2. 函数的 constructor 是不稳定的，这个主要体现在自定义对象上，当开发者重写 prototype 后，原有的 constructor 引用会丢失，constructor 会默认为 Object
- #### toString

> toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。
> 
> 对于 Object 对象，直接调用 toString()  就能返回 [object Object] 。而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。

```javascript
Object.prototype.toString.call('');   // "[object String]"
Object.prototype.toString.call(1);    // "[object Number]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(Symbol()); // "[object Symbol]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(newFunction()); // "[object Function]"
Object.prototype.toString.call(newDate()); // "[object Date]"
Object.prototype.toString.call([]); // "[object Array]"
Object.prototype.toString.call(newRegExp()); // "[object RegExp]"
Object.prototype.toString.call(newError()); // "[object Error]"
Object.prototype.toString.call(document); // "[object HTMLDocument]"
Object.prototype.toString.call(window); // "[object global]" window 是全局对象 global 的引用
```
