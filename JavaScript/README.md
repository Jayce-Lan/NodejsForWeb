# JavaScript数据结构与算法

## JavaScript对数组的定义

> 数组的标准定义是：一个存储元素的线性集合（collection），元素可以通过索引来任意存取，索引通常是数字，用来计算元素之间存储位置的偏移量。几乎所有的编程语言都有类似的数据结构。然而JavaScript的数组却略有不同
>
> JavaScript中的数组是一种特殊的对象，用来表示偏移量的索引是该对象的属性，索引可能是整数。然而，这些数字索引在内部被转换为字符串类型，这是因为JavaScript对象中的属性名必须是字符串。数组在JavaScript中只是一种特殊的对象，所以效率上不如其他语言中的数组高
>
> JavaScript中的数组，严格来说应该称作对象，是特殊的JavaScript对象，在内部被归类为数组。由于Array在JavaScript中被当作对象，因此它有许多属性和方法可以在编程时使用



### 创建数组

javascript 创建数组的几种方式

```js
var arr1 = [];
console.log("数组长度：", arr1.length); // 0

var arr2 = [1, 2, 3, 4, 5];
console.log("数组长度：", arr2.length); // 5

var arr3 = new Array();
console.log("数组长度：", arr3.length); // 0

var arr4 = new Array(5)
console.log("数组长度：", arr4.length); // 5

var arr5 = new Array(1, 2, 3, 4, 5)
console.log("数组长度：", arr5.length); // 5
```



#### 脚本语言的特性

> 在脚本语言里很常见的一个特性是，数组中的元素**不必是同一种数据类型**，这一点和很多编程语言不同

```js
var obj = [1, 'Test', true, null];
console.log(obj.length); // 4
```



#### *Array.isArray(obj)* 判断对象是否为数组

> 布尔类型返回值的方法，判断 *obj* 是否为数组

```js
var num = 3;
var obj = [1, 'Test', true, null];
console.log(Array.isArray(num)); // false
console.log(Array.isArray(obj)); // true
```



### 读写数组

