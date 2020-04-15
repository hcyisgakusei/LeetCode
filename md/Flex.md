### Flex布局

**需要注意的是：当时设置 flex 布局之后，子元素的 float、clear、vertical-align 的属性将会失效。**

## Flex 容器：

有下面六种属性可以设置在容器上，它们分别是：

1. **flex-direction**（决定主轴的方向）
2. **flex-wrap**（决定容器内项目是否可换行）
3. flex-flow
4. **justify-content**（主轴的对齐方式）
5. **align-items**（交叉轴上的对齐方式）
6. align-content
- #### flex-direction:  决定主轴的方向(即项目的排列方向)

```css
.container {
    flex-direction: row | row-reverse | column | column-reverse;
}
```

- #### flex-wrap: 决定容器内项目是否可换行

```css
.container {
    flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- #### flex-flow: flex-direction 和 flex-wrap 的简写形式

```css
.container {
 flex-flow: <flex-direction> || <flex-wrap>;
}
```

- #### justify-content：定义了项目在主轴的对齐方式

```css
.container {
    justify-content: flex-start | flex-end | center | space-between |     space-around;
}
```

- #### align-items: 定义了项目在交叉轴上的对齐方式

```css
.container {
 align-items: flex-start | flex-end | center | baseline | stretch;
}
```

- #### align-content: 定义了多根轴线的对齐方式，如果项目只有一根轴线，那么该属性将不起作用

```css
.container {
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```



## Flex Item 属性：

有六种属性可运用在 item 项目上：

1. **order**（容器中的排列顺序）
2. **flex-grow** （项目的放大比例）
3. **flex-shrink**（项目的缩小比例）
4. **flex-basis**（项目占据的主轴空间）
5. **flex**
6. **align-self**（单个项目的对齐方式）



- #### order: 定义项目在容器中的排列顺序，数值越小，排列越靠前，默认值为 0

```css
.item {
    order: <number>;
}
```

- #### flex-grow: 定义项目的放大比例

```css
.item {
    flex-grow: <number>;
}
```

- #### flex-shrink: 定义了项目的缩小比例

```css
.item {
    flex-shrink: <number>;
}
```

- #### flex-basis: 定义了在分配多余空间之前，项目占据的主轴空间，浏览器根据这个属性，计算主轴是否有多余空间

```css
.item {
    flex-basis: <length> | auto;
}
```

- #### flex: flex-grow, flex-shrink 和 flex-basis的简写

```css
.item{
    flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
} 
```

有关快捷值：auto (1 1 auto) 和 none (0 0 auto)

- #### align-self: 允许单个项目有与其他项目不一样的对齐方式

```css
.item {
     align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```


