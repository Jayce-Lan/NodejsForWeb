# CSS样式

## 层叠、优先级与继承

### 层叠

> 在层叠样式中遵循的优先级原则为：id > class > 标签（类）

#### *! important* 改变优先级

> 使用 *! important*声明优先级，使之优先级高于前面的id+标签

例如，在 HTML 中有如下结构：

```html
 <ul id="main-nav" class="nav">
     <li><a href="/">主页</a></li>
     <li><a href="/coffees">咖啡</a></li>
     <li><a href="/brewers">浏览</a></li>
     <li><a href="/specials" class="featured">优惠</a></li>
</ul>
```

在 CSS 文件中有如下定义：

```css
#main-nav a {
    color: white;
    background-color: #13a4a4;
    padding: 5px;
    border-radius: 2px;
    text-decoration: none;  /*消除a标签下划线*/
}

.featured {
    background-color: orange ! important; /*使用!important声明优先级，使之优先级高于上面的id+标签*/
}
```

但是，这么做会使得往下的操作带来更更多的  *! important* 标签，因此我们可以修改为 id + class的形式提高优先级

## 相对单位

### *em&rem* 

#### *em*

> em是最常见的相对长度单位，适合基于特定的字号进行排版。在CSS中，1em等于当前元素的字号，其准确值取决于作用的元素

```css
.padded {
    font-size: 16px;
    padding: 1em; /*设置内边距为font-size*/
}
```

当我们先规定了 *em* 之后，它的取值取决于被作用的元素

- 规定一个 *span* 如下：`<span class="box box-small></span>"`
- 规定一个 *span* 如下：`<span class="box box-large></span>"`
- 设定如下 css 属性后，两者的 *padding、border-radius* 会不相同，因为它们的 *font-size* 不同

```css
.box {
    padding: 1em;
    border-radius: 1em;
    background-color: skyblue;
    color: #fff;
}

.box-small {
    font-size: 12px;
}

.box-large {
    font-size: 18px;
}
```



使用 *em* 作为参考值

```css
.testEm {
    font-size: 1.2em;
}

/* 两者大小会不相等，因为font-size被做了调整 */
.testEmAll {
    padding: 1em;
    border-radius: 1em;
    background-color: skyblue;
    color: #fff;
}
```



#### *rem*

> rem是root em的缩写。rem不是相对于当前元素，而是相对于根元素的单位。不管在文档的什么位置使用rem,1.2rem都会有相同的计算值：1.2乘以根元素的字号

拿不准的时候，用rem设置字号，用px设置边框，用em设置其他大部分属性
