// function Point(x, y) {
//     this.x = x;
//     this.y = y;
// }
//
// Point.prototype.toString = function () {
//     return `(${this.x},${this.y})`
// };
// 等价
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x},${this.y})`
  }
}

console.log(typeof Point); //function
console.log(Point === Point.prototype.constructor); //true

class Point1 {
  constructor() {
    // ...
  }

  toString() {
    // ...
  }

  toValue() {
    // ...
  }
}

// 等同于

Point1.prototype = {
  constructor() {
  },
  toString() {
  },
  toValue() {
  },
};

// b是B类的实例，它的constructor方法就是B类原型的constructor方法。
class B {
}

let b = new B();

console.log(b.constructor === B.prototype.constructor);// true
console.log(b.constructor === B); // true
console.log(B.prototype.constructor === B); //true

// 由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。
// Object.assign方法可以很方便地一次向类添加多个方法。
class Point2 {
  constructor() {
    // ...
  }
}

Object.assign(Point2.prototype, {
  toString() {
  },
  toValue() {
  }
});
console.log(Point2.prototype.constructor === Point2); // true

//类的内部所有定义的方法，都是不可枚举的（non-enumerable）,但是通过 Object.assign的可以枚举

console.log(Object.keys(Point1.prototype)); //[]
console.log(Object.getOwnPropertyNames(Point1.prototype)); // [ 'constructor', 'toString', 'toValue' ]
console.log(Object.keys(Point2.prototype)); //[ 'toString', 'toValue' ]
console.log(Object.getOwnPropertyNames(Point2.prototype)); // [ 'constructor', 'toString', 'toValue' ]

// 上面代码中，toString方法是 Point1 类内部定义的方法，它是不可枚举的。这一点与 ES5 的行为不一致。
// 采用 ES5 的写法，toString方法就是可枚举的。
const Point3 = function (x, y) {
  // ...
};

Point3.prototype.toString = function () {
  // ...
};

console.log(Object.keys(Point3.prototype));// ["toString"]
console.log(Object.getOwnPropertyNames(Point3.prototype)); // ["constructor","toString"]


// constructor 方法

// constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
// 一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
// constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。

//与 ES5 一样，实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。
//定义类
class Point4 {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

}

const point4 = new Point4(2, 3);

console.log(point4.toString()); // (2, 3)

console.log(point4.hasOwnProperty('x')); // true
console.log(point4.hasOwnProperty('y')); // true
console.log(point4.hasOwnProperty('toString')); // false
console.log(point4.__proto__.hasOwnProperty('toString')); // true
console.log(Point4.prototype.hasOwnProperty('toString')); // true
console.log(point4.__proto__ === Point4.prototype); // true


// 与 ES5 一样，类的所有实例共享一个原型对象。

const p4_1 = new Point4(2, 3);
const p4_2 = new Point4(3, 2);

console.log(p4_1.__proto__ === p4_2.__proto__)//true
// 上面代码中，p1和p2都是Point的实例，它们的原型都是Point.prototype，所以__proto__属性是相等的。
// 这也意味着，可以通过实例的__proto__属性为“类”添加方法。

// __proto__ 并不是语言本身的特性，这是各大厂商具体实现时添加的私有属性，虽然目前很多现代浏览器的
// JS 引擎中都提供了这个私有属性， 但依旧不建议在生产中使用该属性，避免对环境产生依赖。
// 生产环境中，我们可以使用 Object.getPrototypeOf 方法来获取实例对象的原型，然后再来为原型添加方法/属性。


p4_1.__proto__.printName = function () {
  return 'Oops'
};
// 等同于
Object.getPrototypeOf(p4_1).printName = function () {
  return 'Oops'
};

console.log(p4_1.printName()); // "Oops"
console.log(p4_2.printName()); // "Oops"

const p4_3 = new Point4(4, 2);
console.log(p4_3.printName()); // "Oops"

// 上面代码在p1的原型上添加了一个printName方法，由于p1的原型就是p2的原型，因此p2也可以调用这个方法。
// 而且，此后新建的实例p3也可以调用这个方法。这意味着， 使用实例的__proto__属性改写原型，
// 必须相当谨慎，不推荐使用，因为这会改变“类”的原始定义，影响到所有实例。


// 取值函数（getter）和存值函数（setter）
// 与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。

class MyClass {
  constructor() {
    // ...
  }

  get prop() {
    return 'getter';
  }

  set prop(value) {
    console.log('setter: ' + value);
  }
}

let inst = new MyClass();

inst.prop = 123; // setter: 123

console.log(inst.prop); // getter


// 类不存在变量提升（hoist），这一点与 ES5 完全不同。
// new Foo(); // ReferenceError
// class Foo {}
// 上面代码中，Foo类使用在前，定义在后，这样会报错，因为 ES6 不会把类的声明提升到代码头部
// 。这种规定的原因与下文要提到的继承有关，必须保证子类在父类之后定义。

{
  let Foo_1 = class {
  };

  class Bar_1 extends Foo_1 {
  }
}
//  上面的代码不会报错，因为Bar继承Foo的时候，Foo已经有定义了。
// 但是，如果存在class的提升，上面代码就会报错，因为class会被提升到代码头部，而let命令是不提升的，
// 所以导致Bar继承Foo的时候，Foo还没有定义。


// 由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被Class继承，包括name属性。

class Point5 {
}

console.log(Point5.name); // "Point"
// name属性总是返回紧跟在class关键字后面的类名。


// Generator 方法

// 如果某个方法之前加上星号（*），就表示该方法是一个 Generator 函数。

class Foo1 {
  constructor(...args) {
    this.args = args;
  }

  * [Symbol.iterator]() {
    for (let arg of this.args) {
      yield arg;
    }
  }
}

for (let x of new Foo1('hello', 'world')) {
  console.log(x);
}
// hello
// world
// 上面代码中，Foo类的Symbol.iterator方法前有一个星号，表示该方法是一个 Generator 函数。
// Symbol.iterator方法返回一个Foo类的默认遍历器，for...of循环会自动调用这个遍历器。

// 静态方法
// 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。
// 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

class Foo2 {
  static classMethod() {
    return 'hello';
  }
}

Foo2.classMethod(); // 'hello'

// const foo = new Foo2();
// foo.classMethod();// TypeError: foo.classMethod is not a function

//上面代码中，Foo类的classMethod方法前有static关键字，表明该方法是一个静态方法，可以直接在Foo类上调用（Foo.classMethod()），
// 而不是在Foo类的实例上调用。如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法。

// 注意，如果静态方法包含this关键字，这个this指的是类，而不是实例
class Foo3 {
  static bar() {
    this.baz();
  }

  static baz() {
    console.log('hello');
  }

  baz() {
    console.log('world');
  }
}

Foo3.bar(); // hello
// 上面代码中，静态方法bar调用了this.baz，这里的this指的是Foo类，而不是Foo的实例，等同于调用Foo.baz。
// 另外，从这个例子还可以看出，静态方法可以与非静态方法重名

// 父类的静态方法，可以被子类继承。

class Foo4 {
  static classMethod() {
    return 'hello';
  }
}

class Bar extends Foo4 {
}

// Bar.classMethod(); // 'hello'
// 上面代码中，父类Foo有一个静态方法，子类Bar可以调用这个方法。

//静态方法也是可以从super对象上调用的。

class Foo5 {
  static classMethod() {
    return 'hello';
  }
}

class Bar1 extends Foo5 {
  static classMethod() {
    return super.classMethod() + ', too';
  }
}

console.log(Bar1.classMethod()); // "hello, too"


// 实例属性除了定义在constructor()方法里面的this上面，也可以定义在类的最顶层。

class IncreasingCounter1 {
  constructor() {
    this._count = 0;
  }

  get value() {
    console.log('Getting the current value!');
    return this._count;
  }

  increment() {
    this._count++;
  }
}

// 上面代码中，实例属性this._count定义在constructor()方法里面。另一种写法是，这个属性也可以定义在类的最顶层，其他都不变。

class IncreasingCounter2 {
  // _count =  0;
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }

  increment() {
    this._count++;
  }
}

// 上面代码中，实例属性_count与取值函数value()和increment()方法，处于同一个层级。这时，不需要在实例属性前面加上this。

//静态属性
//静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。

class Foo6 {
}

Foo6.prop = 1;
console.log(Foo6.prop); // 1
//上面的写法为Foo类定义了一个静态属性prop。

//目前，只有这种写法可行，因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。现在有一个提案提供了类的静态属性，写法是在实例属性的前面，加上static关键字。

