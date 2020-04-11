### vue 原理

**vue的底层主要是实现了三个类，分别是observer、watcher、compiler**

- observer 是通过object.defineProperty 实现数据劫持，监听数据的变化。vue在初始化的时候，首先会把data全部都转化为observer。

- 然后complier再去解析模版，解析到需要订阅数据的地方，就会创建一个watcher。

- observer内部维护了一个消息队列，会把相应的watcher添加到消息队列中。当observer调用了set方法，observer监听到数据发生变化的话就会通知消息队列中所有的watcher。watcher接收到通知后，早期版本的vue，watcher会直接调用complier去更新视图，后面的版本做了优化，参考了react的虚拟节点，先更新虚拟节点。然后再diff新旧虚拟节点，diff出发生了变化的部分，再把变化了的部分更新到视图中。

**diff的原则是只和同层元素进行对比**

- vue2.X数组监听需要劫持数组更新的方法，而proxy可以直接监听

- object.defineProperty 需要深度遍历对象，把所有属性都转化成observer，而proxy不需要
