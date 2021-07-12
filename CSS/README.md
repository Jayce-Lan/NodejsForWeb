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

